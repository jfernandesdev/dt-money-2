import axios from 'axios'

export const api = axios.create({
  // baseURL: 'http://localhost:3333',
  baseURL: 'https://my-json-server.typicode.com/jfernandesdev/dt-money-2',
})
