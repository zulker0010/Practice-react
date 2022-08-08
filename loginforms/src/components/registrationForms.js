import React, {useState} from 'react';
import './style.css'
function RegistrationForm(){
    return(
        <div className="form">
            <div className="form-body">
                <div classname="username">
                    <label className="form__label" for="fullName">Name</label>
                    <input className="form__input" type="text" id="fullName" placeholder="Name"></input>
                </div>
                <div className="email">
                    <label className="form__label" for="email">Email</label>
                    <input type="email" id="email" className="form__input" placeholder="Email"></input> 
                </div>  
                <div className="password">
                    <label className="form__label" for="password">Password</label>
                    <input className="form__input" type="password" id="password" placeholder="Password"></input>
                </div>
                <div className="confirm-password">
                    <label className="form__label" for="confirmPassword">Confirm Password</label>
                    <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Passsword"/>
                </div>  
            </div>
            
            
                <div class="footer">
                    <button type="submit" class="btn">Sign-Up</button>
                </div>
            
        </div>
    )
}
export default RegistrationForm;