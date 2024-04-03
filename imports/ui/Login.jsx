import { Meteor } from 'meteor/meteor';
import { Helmet } from "react-helmet";
import React, { useState } from 'react';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submitLogin = e => {
    e.preventDefault();

    Meteor.loginWithPassword(username, password, error => {
      if(error)
        alert(error.message);
    });
  };

  const submitSignup = e => {
    e.preventDefault();

    Meteor.call('users.insert', username, password, error => {
      if(error)
        alert(error.message);
      else
        Meteor.loginWithPassword(username, password, error => {
          if(error)
            alert(error.message);
        });
    });
  };

  return (
    <div className='main'>
        <Helmet>
          <title>Log In / Sign Up</title> 
        </Helmet>

        <form className="login-form">
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Username"
            name="username"
            required
            onChange={e => setUsername(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>

          <input
            type="password"
            placeholder="Password"
            name="password"
            required
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" onClick={submitLogin}>Log In</button>
          <button type="submit" onClick={submitSignup}>Sign Up</button>
        </div>
      </form>
    </div>
  );
};
