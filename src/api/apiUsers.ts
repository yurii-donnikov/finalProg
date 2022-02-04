import axios from 'axios';
import apiConfig from './apiConfig';
import { IUser } from '../interfaces/usersInterfaces';

interface IParams {
  page: number;
  results: number;
}

axios.defaults.baseURL = apiConfig.baseUrl;

const fetchUsers = async (settings?: IParams): Promise<IUser[]> => {
  settings = settings || apiConfig.defaultFetch;
  const settingsRequest = {
    params: {
      page: settings.page,
      results: settings.results,
      seed: apiConfig.params.seed,
      exc: apiConfig.params.exc,
    },
  };

  const { data: { results }, } = await axios.get('/', settingsRequest);
  return results;
};

export default fetchUsers;
