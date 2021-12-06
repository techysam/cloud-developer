const apiId = 'jc2tirbdsl'
//Having issues making it work without my old apiid zmh7v1es8j. It seems it is the reason why a todo cannot
//be deleted and upload is impossible. Please I have searched all over but cannot solve it.
//Please help me solve it you can email me at samuelbenjamibaffoe@gmail.com
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  domain: 'dev-nzq7t-ek.us.auth0.com',           // Auth0 domain
  clientId: 'FgaVpSWQ5wHsCZDomZp3mrOwMFXBXLez',  // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
