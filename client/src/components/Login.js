
import React, { useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const initialUser = {
  username: '',
  password: ''
};

const Login = () => {
  const [values, setValues] = useState(initialUser);
  const { push } = useHistory();
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

 const login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", {
        username: values.username,
        password: values.password
      })
      .then(res => {
        // res.data.payload ==> localStorage
        // navigate user to the "protected" route
        localStorage.setItem('token', res.data.payload);
        push('/');
      })
      .catch(err => console.log('ERROR'));
  };

  const handleChange = (evt) => {
    evt.persist();
    setValues({
        ...values,
        [evt.target.name]: evt.target.value
    })
};

  return (
    <>
      <h1 className="textcenter">Welcome to the Bubble App!</h1>
      <div className='loginForm'>
        <form onSubmit={login}>
          <input className="input"
            placeholder='Username'
            type="text"
            name="username"
            value={values.username}
            onChange={handleChange}
          />
          <input className="input"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          <button className='Btn'>Log in</button>
        </form>
      </div>
    </>
  );
};

export default Login;
