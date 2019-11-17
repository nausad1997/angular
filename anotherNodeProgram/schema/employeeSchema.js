const mongoose = require('mongoose')
//importing schema
const schema=mongoose.Schema;

let employeeModel=new schema({
    
        empId:{
            type:String,
            unique:true
        },
        firstName:{
            type:String,
            default:''
        },
        lastName:{
            type:String,
            default:''
        },
        fathersName:{
            type:String,
            default:'',
            // required:true
        },
        views:{
            type:Number,
            default:0
        },
        mothersName:{
            type:String,
            default:''
        },
        designation:{
            type:String,
            default:''
        },
        hobbies:[],
        presentAddress:{
            type:String,
            default:''
        },
        parmanentAddress:{
            type:String,
            default:''
        },
        about:{
            type:String,
            default:''
        },
        sallary:{
            type:Number,
            default:0
        },
        joiningDate:{
            type:Date,
            default:Date.now()
        },
        contactNumber:{
            type:Number,
            default:0
        },
        lastModified:{
            type:Date,
            default:Date.now()
        },
}
);
module.exports= mongoose.model('employees', employeeModel);