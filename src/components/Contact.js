import emailjs from 'emailjs-com'
import {init} from 'emailjs-com';
import {useState} from "react";
import "./ContactStyle.css";

init('user_id');
const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);
    const submit = () => {
        if (name && email && message) {
            const serviceId = 'service_03hylwu';
            const templateId = 'template_gkg7rso';
            const userId = 'PUx7L7zYPCewIvK3l';
            const templateParams = {
                name,
                email,
                message
            };

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));

            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }
    }
    const isValidEmail = email => {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    };
    return (
        <>
            <div className="contact-container">
                <div className="user-details">
                    <input className="contact-name" type="text" placeholder="Your Name" value={name}
                           onChange={e => setName(e.target.value)}/>
                    <input className="contact-email" type="email" placeholder="Your email address" value={email}
                           onChange={e => setEmail(e.target.value)}/>
                </div>
                <textarea className="contact-msg" placeholder="Your message" value={message}
                          onChange={e => setMessage(e.target.value)}></textarea>
                <button className="contact-btn" onClick={submit}>Send Message</button>
                <span
                    className={emailSent ? 'visible contact-success' : null}>Thank you for your message, we will be in touch in no time!</span>
            </div>
        </>
    );
};

export default Contact;