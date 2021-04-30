import React from 'react';

const ContactCard = () => {
    return (
        <div>
            <a
                id={contact.platform}
                href={contact.hyperlink}
                target='_blank'
                rel="noreferrer"
            >
                {contact.content}
            </a>
        </div>
    );
};

export default ContactCard;