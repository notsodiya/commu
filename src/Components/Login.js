
import React, { useState } from 'react';
//import { useHistory } from 'react-router-dom';

function Login() {
  const [loginName, setLoginName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  // const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:51294/api/Login/ValidateUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          LoginName: loginName,
          Password: password
        })
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      if (data && data.ResponseStatus === 1) {
        // Store UserId in session storage
        // sessionStorage.setItem('userId', data.Data.user[0].Id);
        // // Redirect to FamilyDataFetcher page
        // history.push('/familydatafetcher');


        //localStorage.setItem('Id', data.Data.user[0].Id); // Store the Id in localStorage
         //   history.push('/profile');
      } else {
        //setError(data.Message);
        localStorage.setItem('FamilyMemberId', data.Data.user[0].FamilyMemberId);
        window.location.href ="/home"
      }
    } catch (err) {
      setError('Failed to login. Please try again later.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Login Name:
          <input
            type="text"
            value={loginName}
            onChange={(e) => setLoginName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}

export default Login;
