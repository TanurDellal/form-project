import React, {useState} from 'react';

import './FormSubscription.css';

function FormSubscription({onSubmitFormData}) {

  const [userMailInput, setUserMailInput] = useState({
    EnteredFirstName: '',
    EnteredLastName: '',
    EnteredEmail: '',
    EnteredMessage: ''
  });

  const userInputChangeHandler = (identifier, value) => {
    if (identifier === 'firstName') {
      setUserMailInput((prevState) => {
        return {...prevState, EnteredFirstName: value};
      });
    }
    else if (identifier === 'lastName') {
      setUserMailInput((prevState) => {
        return {...prevState, EnteredLastName: value};
      });
    }
    else if (identifier === 'email') {
      setUserMailInput((prevState) => {
        return {...prevState, EnteredEmail: value};
      });
    }
    else if (identifier === 'message') {
      setUserMailInput((prevState) => {
        return {...prevState, EnteredMessage: value};
      });
    }
  };

  const onFormSubmitHandler = (event) => {
    event.preventDefault();

    const formData = {
      firstName: userMailInput.EnteredFirstName,
      lastName: userMailInput.EnteredLastName,
      email: userMailInput.EnteredEmail,
      message: userMailInput.EnteredMessage
    };

    // submit data and receive in NewExpense.js
    onSubmitFormData(formData);

    // set all fields back to null/''
    setUserMailInput(() => {
      const resetUserMailInput = {};
      Object.keys(userMailInput).forEach(key => {
        resetUserMailInput[key]= '';
      });
      return resetUserMailInput;
    });
  };

  return (
    <div className="form-section">
      <form onSubmit={onFormSubmitHandler} >
        <legend>Contact Me</legend>
        <div className="form-inputs">
          <div className="form__input">
            <label htmlFor="firstNameInput">First Name</label>
            <input id="firstNameInput" value={userMailInput.EnteredFirstName} type="text" onChange={(event) => userInputChangeHandler('firstName', event.target.value)} />
          </div>
          <div className="form__input">
            <label htmlFor="lastNameInput">Last Name</label>
            <input id="lastNameInput" value={userMailInput.EnteredLastName} type="text" onChange={(event) => userInputChangeHandler('lastName', event.target.value)} />
          </div>
          <div className="form__input">
            <label htmlFor="emailInput">Email Address</label>
            <input id="emailInput" value={userMailInput.EnteredEmail} type="email" onChange={(event) => userInputChangeHandler('email', event.target.value)} />
          </div>
          <div className="form__input">
            <label htmlFor="messageInput">Message</label>
            <textarea id="messageInput" value={userMailInput.EnteredMessage} type="textbox" onChange={(event) => userInputChangeHandler('message', event.target.value)} />
          </div>
        </div>
        <div className="form__actions">
            <button type="submit">Send Email</button>
        </div>
      </form>
    </div>
  );

}

export default FormSubscription;

//min max characters for message
