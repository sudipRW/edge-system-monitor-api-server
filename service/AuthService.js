'use strict';
const fetch = (...args) => import('node-fetch').then(module => module.default(...args));
require('dotenv').config();

const PORTAINER_URL = process.env.PORTAINER_URL; // Adjust this to your Portainer server URL

/**
 * Authenticate
 * **Access policy**: public Use this endpoint to authenticate against Portainer using a username and password.
 *
 * @param {Object} body - Credentials used for authentication
 * @returns {Promise<Object>} - Authenticated response (JWT token)
 */
exports.authenticateUser = function(body) {
  return new Promise(async function(resolve, reject) {
    try {
      const response = await fetch(`${PORTAINER_URL}/api/auth`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: body.username,
          password: body.password
        })
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        return reject({ message: errorResponse.message || 'Authentication failed', statusCode: response.status });
      }

      const data = await response.json();
      resolve(data); // This should return the JWT token { jwt: "your_token" }
    } catch (error) {
      reject({ message: 'Error during authentication', error });
    }
  });
};



/**
 * Logout
 * **Access policy**: public
 *
 * no response value expected for this operation
 **/
exports.logout = function() {
  return new Promise(function(resolve, reject) {
    // No server-side logout needed in JWT-based systems
    resolve({ message: 'Logout successful' });
  });
};


/**
 * Authenticate with OAuth
 * **Access policy**: public
 *
 * body Auth.oauthPayload OAuth Credentials used for authentication
 * returns auth.authenticateResponse
 **/
const OAUTH_URL = 'https://example.com/oauth/token'; // OAuth token URL

/**
 * Authenticate with OAuth
 * **Access policy**: public
 *
 * @param {Object} body - OAuth Credentials used for authentication
 * @returns {Promise<Object>} - OAuth response (access token)
 */
exports.validateOAuth = function(body) {
  return new Promise(async function(resolve, reject) {
    try {
      const response = await fetch(OAUTH_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          client_id: body.client_id,
          client_secret: body.client_secret,
          code: body.code, // Use authorization code or other credentials
          redirect_uri: body.redirect_uri,
          grant_type: 'authorization_code' // Adjust as per your OAuth setup
        })
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        return reject({ message: errorResponse.message || 'OAuth authentication failed', statusCode: response.status });
      }

      const data = await response.json();
      resolve(data); // This should return the access token
    } catch (error) {
      reject({ message: 'Error during OAuth authentication', error });
    }
  });
};

