// This is an example of how to read a JSON Web Token from an API route
import { getToken } from "next-auth/jwt"

const GetToken = async (req:any, res:any) => {
  // If you don't have NEXTAUTH_SECRET set, you will have to pass your secret as `secret` to `getToken`
  const token = await getToken({ req })
  if (token) {
    // Signed in

    // This is the JSON Web Token (JWT) for the currently signed in user
    // You can decode the token and use it in your API routes
    // return token as json
    res.json({token: token})
    //
    console.log("JSON Web Token", JSON.stringify(token, null, 2))
  } else {
    // Not Signed in
    res.json({ok: false, message: "Not signed in"})
  }
}

export default GetToken;