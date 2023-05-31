type user_data = {
    firstname: string;
    lastname: string;
    profileImage: string;
    email: string;
    aboutUser: string;
    password: string;
    confirmPassword: string;
    phone: string;
    country: string;
    city: string;
};


declare module 'bcrypt' {
  export function hash(data: string, salt: number): string;
  // Declare other functions and types used by bcrypt
}



// "firstname": "sabbir",
// "lastname": "ahmmed",
// "email": "ahsabbir103@gmail.com"
