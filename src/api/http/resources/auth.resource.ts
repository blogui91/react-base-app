import Http from 'api/http';
import { AxiosResponse } from 'axios';
import { LoginFormFields } from 'contexts/AuthContext';

export interface User {
  id: number;
  nickname: string;
  name: string;
  last_name: string;
  email: string;
  phone_number?: any;
  email_verified_at?: any;
  school_id: number;
  about?: any;
  has_changed_password: boolean;
  is_teacher: boolean;
  department?: any;
  picture: string;
  gender: string;
  deleted_at?: any;
  created_at: Date;
  updated_at: Date;
  full_name: string;
}

export interface LoginResponse {
  access_token: string;
  user: User;
}


const AuthResource = {
  getCurrentUser: (): Promise<any> => Http.get('api/profile'),
  login: (body: LoginFormFields): Promise<AxiosResponse<LoginResponse>> => Http.post('api/auth/login', body),
  logout: (): Promise<any> => Http.get('api/logout'),
};

export default AuthResource;
