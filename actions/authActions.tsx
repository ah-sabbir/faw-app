'use server'

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