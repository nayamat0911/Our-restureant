import React from 'react'

export default function Footer() {
    return (
        <section className="footer-content">
            <div className="footer-content">
                <input type="email" id="send" className="Send_message" placeholder="Send Email" required/>
                <a className="Send_button">Send</a>

            </div>
            <div id="subscribe">
                <button className="Subscribe_button">Subscribe</button>
            </div>
            <p className="copyright">Copy by @ nayamat</p>
            
        </section>
    )
}
