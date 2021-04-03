import React from 'react'

const ContactForm = () => {
    return (
        <div className="row">
            <div className="col-lg-8 col-lg-offset-2">
                <div className="done">
                    <div className="alert alert-success">
                        <button type="button" className="close" data-dismiss="alert">×</button>
					Your message has been sent. Thank you!
				</div>
                </div>
                <form method="post" action="contact.php" id="contactform">
                    <div className="form">
                        <input type="text" name="name" placeholder="Your Name *" />
                        <input type="text" name="email" placeholder="Your E-mail Address *" />
                        <textarea name="comment" rows="7" placeholder="Type your Message *"></textarea>
                        <input type="submit" id="submit" className="clearfix btn" value="Send" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm
