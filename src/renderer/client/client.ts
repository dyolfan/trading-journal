import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  'Access-Control-Allow-Origin': '*',
};

export default axios.create({
  baseURL: 'http://localhost:8080',
  headers,
});
