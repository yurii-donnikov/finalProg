export interface IUser {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  dob: {
    date: string;
    age: number;
  };
  registered: {
    date: string;
    age: number;
  };
  phone: string;

  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

export interface IUsersState {
  users: {
    users: IUser[];
    error: null | Error;
  };
}

export interface IInitStateReducer {
  users: IUser[];
  error: null | Error;
}

export interface IAction<T> {
  type: string;
  payload: T & T[];
}
