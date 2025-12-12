import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const POST = async(req: NextRequest) => {

    try {
        
        const { name, email, msg } = await req.json();
        const resend = new Resend(process.env.RSEND_API_KEY as string);
        resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'sejpalvatsal456@gmail.com',
            subject: 'Contact Response from Portfolio',
            html: `
                <p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Message: ${msg}</p>
            `
        });
        return NextResponse.json({ status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }

}