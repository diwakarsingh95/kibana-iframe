import React from 'react'
import { Auth } from 'aws-amplify'
import Iframe from 'react-iframe'

const Kibana = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Kibana</h1>
      <button onClick={() => Auth.signOut({ global })}>Logout</button>
      <Iframe
        url='https://4d980065475c44f5b3dded9798abb265.us-east-1.aws.found.io:9243/'
        width='100%'
        height='100%'
        id='kibanaIframe'
        className='kibanaIframe'
        display='initial'
        position='relative'
      />
    </div>
  )
}

export default Kibana
