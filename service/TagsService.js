'use strict';
const axios = require('axios');
const PORTAINER_URL = process.env.PORTAINER_URL;

/**
 * Create a new tag
 * Create a new tag. **Access policy**: administrator
 *
 * body Tags.tagCreatePayload Tag details
 * returns portainer.Tag
 **/
exports.tagCreate = function(body,token) {
  return new Promise(async function(resolve, reject) {
    try {
      const response = await axios.post(`${PORTAINER_URL}/api/tags`,body, {
        headers: {
          Authorization: `Bearer ${token}`, // Authenticate with the API
        },
      });
      resolve(response.data); // Return the data received from Portainer
    } catch (error) {
      console.error('Error creating tag', error);
      reject(error.response.data); // Handle and pass on any errors
    }
  });
}


/**
 * Remove a tag
 * Remove a tag. **Access policy**: administrator
 *
 * id Integer Tag identifier
 * no response value expected for this operation
 **/
exports.tagDelete = function(id,token) {
  return new Promise(async function(resolve, reject) {
    try {
      const response = await axios.delete(`${PORTAINER_URL}/api/tags/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Authenticate with the API
        },
      });
      resolve(response.data); // Return the data received from Portainer
    } catch (error) {
      console.error('Error deleting endpoint tags', error);
      reject(error.response.data); // Handle and pass on any errors
    }
  });
}


/**
 * List tags
 * List tags. **Access policy**: authenticated
 *
 * returns List
 **/
exports.tagList = function(token) {
  return new Promise(async function(resolve, reject) {
    try {
      const response = await axios.get(`${PORTAINER_URL}/api/tags`, {
        headers: {
          Authorization: `Bearer ${token}`, // Authenticate with the API
        },
      });
      resolve(response.data); // Return the data received from Portainer
    } catch (error) {
      console.error('Error fetching endpoint tags details:', error);
      reject(error.response.data); // Handle and pass on any errors
    }
  });
}

