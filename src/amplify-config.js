const userPoolId = process.env.REACT_APP_COGNITO_USER_POOL_ID
const userPoolWebClientId = process.env.REACT_APP_COGNITO_USER_POOL_WEBCLIENT_ID
const authDomain = process.env.REACT_APP_COGNITO_AUTH_DOMAIN
const redirectSignIn =
  process.env.REACT_APP_REDIRECT_SIGNIN || 'http://localhost:3000/'
const redirectSignOut =
  process.env.REACT_APP_REDIRECT_SIGNOUT || 'http://localhost:3000/'

const Auth = {
  // REQUIRED - Amazon Cognito Region
  region: 'us-east-1',

  // OPTIONAL - Amazon Cognito User Pool ID
  userPoolId: userPoolId,

  // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
  userPoolWebClientId: userPoolWebClientId,

  // OPTIONAL - Hosted UI configuration
  oauth: {
    domain: authDomain,
    scope: [
      'phone',
      'email',
      'profile',
      'openid',
      'aws.cognito.signin.user.admin',
    ],
    redirectSignIn: redirectSignIn,
    redirectSignOut: redirectSignOut,
    responseType: 'code', // or 'token', note that REFRESH token will only be generated when the responseType is code
  },
}

export default Auth
