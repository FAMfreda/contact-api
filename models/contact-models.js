import { Schema, model } from "mongoose";


//create schema
const contactSchema = new Schema ({
    name: {
        type:String,
        required:true,
        unique: true
    } ,
    email:{
        type:String,
    },
    number:{
        type:Number,
        required:true,
        unique:true
    },
    address:{
        type:String
    }
},{
    timestamps:true
})

export const ContactModel = model('contact', contactSchema )
