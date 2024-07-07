import { Router } from "express";
import { addContact, deleteContact, getContact, oneContact, updateContact } from "../controllers/contact.js";



//create Router
const ContactRouter = Router()

//define routes
//add a contact route
ContactRouter.post('/contact', addContact)

//get route
ContactRouter.get('/contact', getContact)

//get by id
ContactRouter.get('/contact/:id', oneContact)

//update contact
ContactRouter.patch('/contact/:_id', updateContact)

//delete contact
ContactRouter.delete('/contact/:id',deleteContact)


export default ContactRouter;