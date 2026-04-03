import connectDB from "@/lib/database/mongo";
import User from "@/lib/models/user";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'



export async function POST(req) {
    try {
        await connectDB()
        const { name, email, password, bloodgroup, district, phone, upazilla, dateofbirth } = await req.json()


        if (!name || !email || !password || !bloodgroup || !district || !phone || !dateofbirth || !upazilla) {
            return NextResponse.json({
                success: false,
                message: "Please fill all required fields",
            }, { status: 400 });
        }


        const existingUser = await User.findOne({ $or: [{ email: email }, { phone: phone }] });
        if (existingUser) {
            return NextResponse.json({
                success: false,
                message: "User already registered",
            }, { status: 400 });
        }



        const dob = new Date(dateofbirth);
        const today = new Date();
        const diffMs = today - dob;
        const age = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 365.25));

        if (age < 15) {
            return NextResponse.json({
                success: false,
                message: "User must be atleast 15 years old",
            }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, salt);


        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            bloodgroup,
            district,
            phone,
            upazilla,
            dateofbirth,
        });

        await newUser.save();


        return NextResponse.json({
            success: true,
            message: "User registered successfully",
        }, { status: 400 });

    } catch (error) {
        return NextResponse.json({
            success: false, message: error.message
        }, { status: 500 })

    }

}



export async function GET(req) {
    try {
        const { searchBloodgroup, searchDistrict, searchUpazilla } = req.query
        const filter = {}

        if (searchBloodgroup) filter.bloodgroup = searchBloodgroup
        if (searchDistrict) filter.district = searchDistrict
        if (searchUpazilla) filter.upazilla = searchUpazilla

        const donors = await User.find(filter).sort({ _id: -1 })

        if (!donors || donors === null) {
            return NextResponse.json({
                success: false,
                message: 'No donor found',
                payload: null
            },{status:400})
        }
        return NextResponse.json({
            success: true,
            message: `Found ${donors.length} donor`,
            payload: donors
        }, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: 'No donor found',
            error: error.message
        }, { status: 500 })
    }

}