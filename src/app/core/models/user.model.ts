export interface UserModel {
  name: string;
  slug: string;
  email: string;
  email_verified: boolean;
  phone_number: string|null;
  phone_number_verified: boolean;
  avatar: string;
  balance: number;
  created_at: string;
  updated_at: string;
}
