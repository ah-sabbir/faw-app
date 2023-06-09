type user_data = {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    avatar: string;
    password: string;
    country: string;
    city: string;
};


type user_login = {
    email: string;
    password: string;
};

type user_update = {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    avatar: string;
    country: string;
    city: string;
};

type user_update_password = {
    old_password: string;
    new_password: string;
};

type user_update_avatar = {
    avatar: string;
};

type user_update_phone = {
    phone: string;
};

type user_update_email = {
    email: string;
};

type user_update_country = {
    country: string;
};

type user_update_city = {
    city: string;
};

type user_update_firstname = {
    firstname: string;
};

type user_update_lastname = {
    lastname: string;
};


declare module 'bcrypt' {
  export function hash(data: string, salt: number): string;
  // Declare other functions and types used by bcrypt
}



// "firstname": "sabbir",
// "lastname": "ahmmed",
// "email": "ahsabbir103@gmail.com"



// type CredentialsProvider = {
//     getCredentials(): Promise<{
//       username: string;
//       password: string;
//     }>;
//   };