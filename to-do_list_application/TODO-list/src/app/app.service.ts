import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  


  private url="https://chatapi.edwisor.com/api/v1";

  constructor(public http:HttpClient) { }

  setUserInfoInLocalStorage=(data)=> {
    localStorage.setItem('userInfo', JSON.stringify(data));
  }

  getUserInfoInLocalStorage=()=> {
   return JSON.parse(localStorage.getItem('userInfo'));
  }

  public signUpFunction(data):Observable<any>{
    const params=new HttpParams()
    .set("firstName", data.firstName)
    .set("lastName", data.lastName)
    .set("mobile", data.mobile)
    .set("email", data.email)
    .set("password", data.password)
    .set("apiKey", data.apiKey)

    return this.http.post(`${this.url}/users/signup`,params);
  }//end of signup function

  public signinFunction(data):Observable<any>{
    const params=new HttpParams()
    .set("email", data.email)
    .set("password", data.password)

    return this.http.post(`${this.url}/users/login`,params);

  }//end of login function

  public logout(): Observable<any> {

    const params = new HttpParams()
      .set('authToken', Cookie.get('authtoken'))

    return this.http.post(`${this.url}/users/logout`, params);

  } // end logout function

 


}
