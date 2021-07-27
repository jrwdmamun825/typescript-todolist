import React from 'react';
import { Card, Button } from 'reactstrap';
import './SContact.css';

interface Icontacts {
    name: string;
    email: string;
    handleRemove: (email: string) => void;
}
const Contacts = ({ name, email, handleRemove }: Icontacts) => {
    return (
        <div className="mb-3 d-flex justify-content-center">
            <Card className="p-5 shadow">
                <h3>This is Student Todo list with typscripts</h3>
                <p className="contact-name"><b>Student name</b>: {name}</p>
                <p className="contact-email"><b>Student mail</b>: {email}</p>
                <div className="d-flex justify-content-center">
                    <Button close onClick={() => handleRemove(email)} className="btn btn-outline-danger w-25 bo">Delete</Button>
                </div>
            </Card>
        </div>
    );
};

export default Contacts;