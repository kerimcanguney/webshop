import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem('Token');
    try {
      const userToken = JSON.parse(tokenString);
      validateToken()
      return userToken?.token
    } catch (error) {
      localStorage.removeItem('Token');
    }
    
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    localStorage.setItem('Token', JSON.stringify(userToken));
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token
  }
}


function validateToken(){

}