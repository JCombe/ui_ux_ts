import axios from 'axios';

export const GetUserData = new Promise((resolve, reject) => {
  const data = axios.get('https://randomuser.me/api/?results=6').then((obj) => {
    return obj.data.results;
  });

  resolve(data);
});
