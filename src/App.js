import React from 'react';
import './App.css';
import App1 from './App1';
import { Auth0Provider } from "@auth0/auth0-react";
import Helmet from 'react-helmet';


const App = () => {
  return (
    <> 

        <Helmet>
            <title>HOMe- PDF Study Materials free download</title>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="aktu quantum books for mechanical engineering, electrical engineering, computer science and engineering,civil engineering" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="theme-color" content="#000000" />

        </Helmet>

<Auth0Provider
    domain="dev-46pg4wuufwiowvo2.us.auth0.com"
    clientId="le7zch4n26mhHjhr1NEdCzOPitSSqGXg"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >



          <App1/>
          
      </Auth0Provider>
    </>
    
    
  )
}

export default App