import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { SocketService } from 'src/app/socket.service';

@Component({
  selector: 'app-list-box',
  templateUrl: './list-box.component.html',
  styleUrls: ['./list-box.component.scss']
})
export class ListBoxComponent implements OnInit {

  @ViewChild('scrollMe', { static: false })

  public scrollMe: ElementRef;

  public authToken: any;
  public userInfo: any;
  public receiverId: any;
  public receiverName: any;
  public userList: any = [];
  public disconnectedSocket: boolean;
  public messageText: any;
  public messageList: any = [];
  public scrollToChatTop: boolean;
  pageValue: number;
  loadingPreviousChat: boolean;


  constructor(
    public Appservice: AppService,
    public socketService: SocketService,
    public router: Router,
    private toastr: ToastrManager,
  ) {

    this.receiverId = Cookie.get('receiverId');

    this.receiverName = Cookie.get('receiverName');


  }



  ngOnInit() {

    this.authToken = Cookie.get('authtoken');

    this.userInfo = this.Appservice.getUserInfoInLocalStorage();

    this.checkStatus();

    this.verifyUserConfirmation();

    this.getOnlineUserList();

    this.getMessageFromAUser();



  }
  //checking my status, that my authToken is present in cookies or not
  public checkStatus: any = () => {

    if (Cookie.get('authtoken') === undefined || Cookie.get('authtoken') === '' || Cookie.get('authtoken') === null) {

      this.router.navigate(['/']);

      return false;

    } else {

      return true;

    }

  } // end checkStatus


  //listening on my varification from server
  public verifyUserConfirmation: any = () => {

    this.socketService.verifyUser()
      .subscribe((data) => {

        this.disconnectedSocket = false;


        //setting me as online
        this.socketService.setUser(this.authToken);
        //calling list of users function
        this.getOnlineUserList()

      });
  }

  public getOnlineUserList: any = () => {

    this.socketService.onlineUserList()
      .subscribe((userList) => {

        this.userList = [];

        for (let x in userList) {

          let temp = { 'userId': x, 'name': userList[x], 'unread': 0, 'chatting': false };



          this.userList.push(temp);

        }

        console.log(this.userList);

      }); // end online-user-list
  }

  public getPreviousChatWithAUser: any = () => {
    let previousData = (this.messageList.length > 0 ? this.messageList.slice() : []);

    this.socketService.getChat(this.userInfo.userId, this.receiverId, this.pageValue * 10)
      .subscribe((apiResponse) => {

        console.log(apiResponse);

        if (apiResponse.status == 200) {

          this.messageList = apiResponse.data.concat(previousData);

        } else {

          this.messageList = previousData;
          this.toastr.warningToastr('No Messages available')



        }

        this.loadingPreviousChat = false;

      }, (err) => {

        this.toastr.errorToastr('some error occured')


      });

  }// end get previous chat with any user


  public loadEarlierPageOfChat: any = () => {

    this.loadingPreviousChat = true;

    this.pageValue++;
    this.scrollToChatTop = true;

    this.getPreviousChatWithAUser()

  } // end loadPreviousChat

  public userSelectedToChat: any = (id, name) => {

    console.log("setting user as active")

    // setting that user to chatting true   
    this.userList.map((user) => {
      if (user.userId == id) {
        user.chatting = true;
      }
      else {
        user.chatting = false;
      }
    })

    Cookie.set('receiverId', id);

    Cookie.set('receiverName', name);


    this.receiverName = name;

    this.receiverId = id;

    this.messageList = [];

    this.pageValue = 0;

    let chatDetails = {
      userId: this.userInfo.userId,
      senderId: id
    }


    this.socketService.markChatAsSeen(chatDetails);

    this.getPreviousChatWithAUser();

  } // end userBtnClick function



  public sendMessageUsingKeypress: any = (event: any) => {

    if (event.keyCode === 13) { // 13 is keycode of enter.

      this.sendMessage();

    }

  } // end sendMessageUsingKeypress

  public sendMessage: any = () => {

    if (this.messageText) {

      let chatMsgObject = {
        senderName: this.userInfo.firstName + " " + this.userInfo.lastName,
        senderId: this.userInfo.userId,
        receiverName: Cookie.get('receiverName'),
        receiverId: Cookie.get('receiverId'),
        message: this.messageText,
        createdOn: new Date()
      } // end chatMsgObject
      console.log(chatMsgObject);
      this.socketService.SendChatMessage(chatMsgObject)
      this.pushToChatWindow(chatMsgObject)


    }
    else {
      this.toastr.warningToastr('text message can not be empty')

    }

  } // end sendMessage

  public pushToChatWindow: any = (data) => {

    this.messageText = "";
    this.messageList.push(data);
    this.scrollToChatTop = false;


  }// end push to chat window

  public getMessageFromAUser: any = () => {

    this.socketService.chatByUserId(this.userInfo.userId)
      .subscribe((data) => {


        (this.receiverId == data.senderId) ? this.messageList.push(data) : '';

        this.toastr.successToastr(`${data.senderName} says : ${data.message}`)

        this.scrollToChatTop = false;

      });//end subscribe

  }// end get message from a user 

  public logout: any = () => {

    this.Appservice.logout()
      .subscribe((apiResponse) => {

        if (apiResponse.status === 200) {
          console.log("logout called")
          Cookie.delete('authtoken');

          Cookie.delete('receiverId');

          Cookie.delete('receiverName');

          this.socketService.exitSocket()

          this.router.navigate(['/']);

        } else {
          this.toastr.errorToastr(apiResponse.message)

        } // end condition

      }, (err) => {
        this.toastr.errorToastr('some error occured')


      });

  } // end logout

  public receivedName($event) {

    let name = $event;
    this.toastr.successToastr('You Are Chatting With ' + name);

  }


}
