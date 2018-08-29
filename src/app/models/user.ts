export interface Roles { 
  customer?: boolean;
  admin?: boolean;
}

export interface User {
  uid: string;
  displayName: string;
  photoURL: string;
  email: string;
  roles: Roles;
}