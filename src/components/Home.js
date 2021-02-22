import React from 'react'
import { Auth } from 'aws-amplify'

const Home = ({ history }) => {

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Home</h1>
      <button onClick={() => history.push('/kibana')}>Go to Kibana</button>&nbsp;
      <button onClick={() => Auth.signOut({ global })}>Logout</button>
    </div>
  )
}

export default Home