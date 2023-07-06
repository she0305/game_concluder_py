import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/options";
import {Request} from "next/dist/compiled/@edge-runtime/primitives";
import {NextResponse} from "next/server";

export async function GET(request: Request) {
    const session = await getServerSession(authOptions)
    if (!session) {
        return new NextResponse(JSON.stringify({ error: 'unauthorized' }), {
            status: 401
        })
    }
    console.log('get api', session) //localhost:3000/api/
    return NextResponse.json({authenticated: !!session?.user})
}
