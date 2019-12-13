/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faMapMarked } from "@fortawesome/free-solid-svg-icons/faMapMarked";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";

export default function ContactComponent() {
    return (
        <section className="section">
            <div className="container">
                <h1 className="title center">
                    Contact Me</h1>
                <div className="columns">
                    <div className="column">
                        <h3 className="has-text-black is-size-4">Contact info</h3>
                        <ul className="con_info_menu">
                            <li><FontAwesomeIcon className="icon" icon={faMapMarked} /> Kigali, Rwanda</li>
                            <li><FontAwesomeIcon className="icon" icon={faEnvelope} /> codewhisper@jonathanaurugai.me</li>
                            <li><FontAwesomeIcon className="icon" icon={faPhone} /> +250738234168</li>
                        </ul>
                        <h5 className="followTitle">Follow Me</h5>
                        <ul className="followLink">
                            <li><a href="#"><FontAwesomeIcon className="icon" icon={faFacebook} /></a></li>
                            <li><a href="#"><FontAwesomeIcon className="icon" icon={faTwitter} /></a></li>
                            <li><a href="#"><FontAwesomeIcon className="icon" icon={faLinkedin} /></a></li>
                        </ul>
                    </div>
                    <div className="column is-two-thirds">
                        <form action="">
                            <div className="field">
                                <label className="label">Full Name</label>
                                <div className="control">
                                    <input className="input" type="text" placeholder="John Doe" />
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column">
                                    <div className="field">
                                        <label className="label">Phone Number</label>
                                        <div className="control">
                                            <input className="input" type="text" placeholder="+1 210-293-344" />
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="field">
                                        <label className="label">Email</label>
                                        <div className="control">
                                            <input className="input" type="text" placeholder="johndoe@gmail.com" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <textarea className="textarea" placeholder="Some message"></textarea>
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                <button className="button is-warning">Warning</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
