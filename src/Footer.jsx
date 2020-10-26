import React from 'react'
import logo from './logo.png'



const Footer = () => {
    return (
        <>

            <footer>
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <img src={logo} style={{ width: '40px', height: '40px' }} />
                        <p>Zeeshan Developers</p>
                        <h5>Contact</h5>
                        <h9>03072255896<br />Zeeshansaaab@gmail.com</h9>
                        <hr className="socket" />
                        <span>&copy;Zeeshan Developers</span>
                    </div>
                </div>
            </footer>

        </>
    )
}
export default Footer;