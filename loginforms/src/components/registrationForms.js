import React, {useState, setState} from 'react';
import './style.css'
function RegistrationForm(){

    const [fullName, setfullName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);

    const handleInputChange = (e) => {
        const {id, value} = e.target;
        if(id==="fullName"){
            setfullName(value);
        }
        if(id ==="email"){
            setEmail(value);
        }
        if(id==="password"){
            setPassword(value);
        }
        if(id==="confirmPassword"){
            setConfirmPassword(value);
        }
    }

    const handleSubmit = () => {
        console.log(fullName, email,password,confirmPassword);
    }

    return(
        <div className="form">
            <div className="form-body">
                <div classname="username">
                    <label className="form__label" for="fullName">Name</label>
                    <input className="form__input" type="text" value={fullName} onChange ={(e) => handleInputChange(e)} id="fullName" placeholder="Name"></input>
                </div>
                <div className="email">
                    <label className="form__label" for="email">Email</label>
                    <input type="email" id="email" className="form__input" value={email} onChange = {(e)=> handleInputChange(e)} placeholder="Email"></input> 
                </div>  
                <div className="password">
                    <label className="form__label" for="password">Password</label>
                    <input className="form__input" type="password" id="password" value={password} onChange={(e) => handleInputChange(e)} placeholder="Password"></input>
                </div>
                <div className="confirm-password">
                    <label className="form__label" for="confirmPassword">Confirm Password</label>
                    <input className="form__input" type="password" id="confirmPassword" onChange={(e)=> handleInputChange(e)} placeholder="Confirm Passsword"/>
                </div>  
            </div>
            
            
                <div class="footer">
                    <button onClick={()=>handleSubmit()} type="submit" class="btn">Sign-Up</button>
                </div>
            
        </div>
    )
}
export default RegistrationForm;