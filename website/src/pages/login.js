import React, {useState} from 'react'
import PropTypes from 'prop-types';

async function loginUser(credentials) {
  let fetchurl = 'https://localhost:44315/Login';
  let Body = JSON.stringify({
    "email" : credentials.email,
    "password" : credentials.password
  })
  return fetch(fetchurl, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: Body
  })
    .then(data => data.json())
}


export default function Login ({setToken}) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  
  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password
    });
    setToken(token);

  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <p>Username</p>
        <input type="text" onChange={e => setEmail(e.target.value)}/>
      </label>
      <label>
        <p>Password</p>
        <input type="password" onChange={e => setPassword(e.target.value)}/>
      </label>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}