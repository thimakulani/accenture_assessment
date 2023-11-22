import React from "react";

const Contact =()=>{
    return(
        <div className='footer'>
            <section className="bottom-img-text">
                <img className='img-object'/><p>Contact us</p>
            </section>

            <section id='contact_container'>
                <div style={{color: '#F5F5F5', fontSize: 40, fontFamily: 'Inter', wordWrap: 'break-word'}}>Have a project in mind? Let's make it happen</div>
                <div id='contact' >
                    <p>22 Street Name, Suburb, 8000</p>
                    <p>Cape Town, South Africa</p>
                    <p>+27 21 431 0001</p>
                    <p>enquirie@website.co.za</p>
                </div>
            </section>


                <div className="links-container">
                    <div className="legal-links">
                        <a href="#">Terms of Service</a> <br />
                        <a href="#">Privacy Policy</a> <br />
                        <a href="#">Impressum</a> <br />
                    </div>
                    <div className="social-links">
                        <a href="#">Facebook</a> <br />
                        <a href="#">Instagram</a> <br />
                        <a href="#">Twitter</a> <br />
                    </div>
                    <div className="professional-links">
                        <a href="#">Github</a> <br />
                        <a href="#">Linkedin</a> <br />
                        <a href="#">Teams</a> <br />
                    </div>
                    <div className="creative-links">
                        <a href="#">Youtube</a> <br />
                        <a href="#">Behance</a> <br />
                        <a href="#">Dribbble</a> <br />
                    </div>
                    <div className="jobs-link">
                        <a href="#">Explore open jobs</a>
                        <p>©2000—2023 Company Name</p>
                    </div>
                </div>

        </div>
    )
}
export default Contact;