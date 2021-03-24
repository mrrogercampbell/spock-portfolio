import React, { Component } from 'react';

class Contact extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            phone: '',
        }
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
        console.log(this.state);
    }

    onSubmit = e => {
        e.preventDefault();
        alert("form has been submitted");
    }
    render() {
        const { name, email, phone } = this.state
        const { onChange, onSubmit } = this
        return (
            <div id="contact">
                <form id="contact-form" onSubmit={onSubmit}>
                    <label>
                        Name:
                 <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={onChange}
                        />
                    </label>
                    <label>
                        Email:
                     <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={onChange}
                        />
                    </label>
                    <label>
                        Phone Number:
                 <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={phone}
                            onChange={onChange}
                        />
                    </label>
                    <input
                        type="submit"
                        value="Submit"
                        id="submit-input"
                    />
                </form>
            </div>
        );
    }
}

export default Contact;