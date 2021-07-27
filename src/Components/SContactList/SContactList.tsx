import React, { useState } from 'react';
import SContacts from '../SContatcts/SContacts';
import './SContactList.css';

interface Icontact {
    name: string;
    email: string
}
const ContactList = () => {
    const [contacts, setContacts] = useState<Icontact>({ name: '', email: '' })
    const [contactList, setContactList] = useState<Icontact[]>([]);

    const contactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContacts({ ...contacts, [e.target.name]: e.target.value });
    }
    const addTodo = () => {
        setContactList([...contactList, contacts]);
        setContacts({
            name: '',
            email: ''
        })
    }
    const handleRemove = (email: string) => {
        console.log('email:', email)
        const removeTodo = contactList.filter(conts => conts.email !== email)
        setContactList(removeTodo)
    }
    return (
        <div className="container">
            <div className=" mb-3 px-4 w-75 m-auto ">
                <div className="input-group mb-2">
                    <input className="border-info border-2 form-control w-25" onChange={contactChange} type="text" name="name" id="" value={contacts.name} placeholder="name" />
                    <input className="border-info border-2 form-control w-25" onChange={contactChange} type="text" name="email" id="" value={contacts.email} placeholder="email" />
                    <button onClick={addTodo} className="btn btn-outline-info border-2 py-2">add</button>
                </div>
                <div>
                    {/* {
                        contactList.map(cont => <Contacts name={cont.name} email={cont.email} handleRemove={handleRemove} />)
                    } */}
                </div>
                <div>

                </div>
            </div>
            <div className="">
            
                {
                    contactList.map(cont => <SContacts name={cont.name} email={cont.email} handleRemove={handleRemove} />)
                }
            </div>
        </div>
    );
};

export default ContactList;