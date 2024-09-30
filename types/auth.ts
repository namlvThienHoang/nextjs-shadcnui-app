export interface Login{
    username: string;
    password: string;
  } 

  export interface AuthResponse {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    accessToken: string;
    refreshToken: string;
  }

  export interface TokenResponse {
    accessToken: string;
    refreshToken: string;
  }