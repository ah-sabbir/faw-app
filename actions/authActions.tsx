'use server'

import { z } from "zod";
import { signIn } from "next-auth/react";

// export async function LoginAction(formData:FormData): Promise<void> {
//     const isProduction = process.env.NODE_ENV === 'production';
//     const baseUrl = isProduction ? 'https://yourapp.com' : 'http://localhost:3000';
//       const email = formData.get('email');
//       const password = formData.get('password');

//       if (!email || !password) {
//           return;
//       }

//       const res = await fetch(baseUrl+'/api/auth/callback/credentials', {
//             method: 'POST',
//             body: JSON.stringify({ email, password }),
//             headers: { 'Content-Type': 'application/json' }
//         });
//       console.log(res)
//   }


export const loginUser = async ( prevState: any, formData: FormData) => {
    const schema = z.object({
        email: z.string().email().nonempty(),
        password: z.string().nonempty(),
    });

    const data = schema.parse({
        email: formData.get('email'),
        password: formData.get('password'),
    });
    
    console.log(data);
    return data;
}