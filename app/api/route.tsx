// import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authConfig } from "@/lib/auth";


export async function GET(request:Request){

	// try{
    // 	    const session = await getServerSession(authConfig);
	//     if(session){
	// 	return NextResponse.json({authenticated: !!session})
	// 	}
	// }
	// catch(error){
	// 	console.log("authentication error on host/api",error);
	// }
    return NextResponse.json({ok:true})
}