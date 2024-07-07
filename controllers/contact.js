import { ContactModel } from "../models/contact-models.js";


//post controller
export const addContact = async (req, res, next) => {
    try {
        const addData = await ContactModel.create(req.body)
        res.status(201).json(addData)
        console.log( 'contact added')
    } catch (error) {
        next(error)  
    }

}


//get controller
export const getContact = async (req,res, next) => {
    try {
        const getData = await ContactModel.find()
        res.status(201).json(getData)
        
    } catch (error) {
        next(error)
    }
}

//get a single contact
export const oneContact =async (req, res, next) => {
    try{
        const oneData = await ContactModel.findById(req.params.id)
        res.status(201).json(oneData)
    } catch (error){
        next (error)
    }
}

//update contact
export const updateContact = async (req, res, next) =>{
    try {
       
        const updateData = await ContactModel.findByIdAndUpdate(req.params.id, req.body,{new:true})
        
    } catch (error) {
        next (error)
        
    }
}


//delete Contact
export const deleteContact =async (req, res, next) =>{
try {

    const deletedContact =await ContactModel. findByIdAndDelete (req.params.id)
     res.status(201).json('Contact deleted')
     
} catch (error) {
    next(error)
    
}

}