import React, { useEffect } from 'react'
import { Auth } from 'aws-amplify'

const Login = ({ history }) => {
  useEffect(() => {
    Auth.currentAuthenticatedUser({ bypassCache: true })
      .then((user) => {
        localStorage.setItem('userInfo', JSON.stringify(user))
        history.push('/home')
      })
      .catch((err) => {
        console.log('currentAuthenticatedUser Error:  ', err)
        login()
      })
  }, [])

  const login = () => {
    localStorage.removeItem('userInfo')
    Auth.federatedSignIn()
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h3>Loading....</h3>
    </div>
  )
}

export default Login
