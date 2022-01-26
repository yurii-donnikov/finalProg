import { IUsersState } from '../../interfaces/usersInterfaces';

export const getUsers = (state: IUsersState) => state.users.users;
