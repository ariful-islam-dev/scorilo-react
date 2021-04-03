import React from 'react'

function Footer() {
    return (
        <footer className="footer text-center">
                <div className="container">
                    <div className="row">
                        <p className="footernote">
                            Connect with Scorilo
			            </p>
                        <ul className="social-iconsfooter">
                            <li><a href="/"><i className="fa fa-phone"></i></a></li>
                            <li><a href="/"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="/"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="/"><i className="fa fa-google-plus"></i></a></li>
                            <li><a href="/"><i className="fa fa-pinterest"></i></a></li>
                        </ul>
                        <p>
                            &copy; 2021 All Right Reserved<br />
				Scorilo - Convert template by <a href="https://www.facebook.com/reactwebdevelopments">Ariful Islam</a>
                        </p>
                    </div>
                </div>
            </footer>
    )
}

export default Footer
