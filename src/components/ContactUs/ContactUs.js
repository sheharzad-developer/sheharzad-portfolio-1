/* eslint-disable react/style-prop-object */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <Container className="ContactUs">
            <div className="ContactUs">
                <h1>Contact Us</h1>
{/* 
                <div className="TableLists">
                    <table>
                        <tr>
                            <th>Sheharzad Salahuddin</th>
                        </tr>
                        <tr>
                            <td>Centro comercial Moctezuma</td>
                        </tr>
                    </table>
                </div> */}

                <div className="row">
                    <div className="col-sm-6">
                        <div className="ContactTitle">
                            <h2>Sheharzad Salahuddin</h2>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="ContactTitle">
                            <span>Email: <p>sheharzad.salahuddin@outlook.com</p></span>
                        </div>
                    </div>
                </div> 
            </div>
        </Container>

    )
}

export default ContactUs;