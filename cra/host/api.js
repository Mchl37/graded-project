// src/api.js

import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = () => {
  return axios.get(`${BASE_URL}/posts?_limit=5`);
};
