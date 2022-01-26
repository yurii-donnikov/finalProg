import axios from 'axios';
import apiConfig from './apiConfig';
import { IUser } from './../../interfaces/usersInterfaces';

interface IParams {
  page: number;
  results: number;
}

axios.defaults.baseURL = apiConfig.baseUrl;

axios.defaults.params = { ...apiConfig.params };

const fetchUsers = async (options?: IParams): Promise<IUser[]> => {
  options = options || apiConfig.defaultFetch;

  axios.defaults.params.page = options.page;
  axios.defaults.params.results = options.results;

  const {
    data: { results },
  } = await axios.get('/');

  return results;
};

export default fetchUsers;
