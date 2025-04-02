export interface UserInterface {
  id: number;
  name: string;
  email: string;
  website: string;
  username: string;
  phone: string;
  address: {
    street: string;
    city: string;
    zipcode: string;
  };
  company: {
    bs: string;
    catchPhrase: string;
    name: string;
  };
}
