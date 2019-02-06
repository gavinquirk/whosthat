// Axios instance for Persons collection

import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://whosthat-299a2.firebaseio.com/'
})

export default instance