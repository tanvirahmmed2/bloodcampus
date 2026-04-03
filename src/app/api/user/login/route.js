import connectDB from "@/lib/database/mongo";
import User from "@/lib/models/user";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'


export async function POST(req) {
    try {
        await connectDB()
        const {email, password}=await req.json()
        if(!email || !password){
            return NextResponse.json({
                success:false , message:'Please fill all info'
            },{status:400})
        }
        const user= await User.findOne({email})
        if(!user){
            return NextResponse.json({
                success:false, message:'No account found with this email'
            },{status:400})
        }
        const isMatchPass=await bcrypt.compare(password, user.password)
        if(!isMatchPass){
            return NextResponse.json({
                success:false, message:'Incorrect password'
            })
        }
    } catch (error) {
        return NextResponse.json({
            success:false, message:error.message
        },{status:500})
        
    }
    
}