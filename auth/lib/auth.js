import axios from 'axios';

export const loginUser = async (email, password) => {
  // const response = await axios.post('/api/login', { email, password });
  // response.data;

  //console.log(response.data);
  // destructured version
  const { data } = await axios.post('/api/login', { email, password });
  console.log(data);
}