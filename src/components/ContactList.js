import React from 'react';
import spockContactData from '../data/spockContactData.json'

const ContactList = () => {

    const contactInfoList = spockContactData.map((contact, i) => <a key={i} id={contact.platform} href={contact.hyperlink} target='_blank' rel="noreferrer"> {contact.content}</a>)

    return (
        <footer className='contact-list'>
            {contactInfoList}
        </footer>
    );
};

export default ContactList;