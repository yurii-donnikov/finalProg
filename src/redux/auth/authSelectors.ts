interface IAuthState {
  auth: {
    isAuthenticated: boolean;
  };
}

export const isAuthenticated = (state: IAuthState) =>
  state.auth.isAuthenticated;
