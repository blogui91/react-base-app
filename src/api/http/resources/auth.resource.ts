import Http from 'api/http';

const AuthResource = {
  getCurrentUser: (): Promise<any> => Http.get('api/profile'),
  login: (): Promise<any> => Http.get('api/login'),
  logout: (): Promise<any> => Http.get('api/logout'),
};

export default AuthResource;
