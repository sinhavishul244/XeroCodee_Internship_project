import { errorHandler } from "@/middlewares/error";
import User from "@/models/User";
import connectDB from "@/utils/connectDB"

export default async function handler(req: any, res: any) {
    if (req.method !== "POST") return errorHandler(res, 400, "only post requests allowed")
    try {
        await connectDB();
        const { email }: { email: string } = req.body;

        if (!email) return errorHandler(res, 400, "Enter your email")

        const user = await User.findOne({ email });

        if (user) return errorHandler(res, 400, "User already exists")

        await User.create({ email });

        res.json({
            success: true,
            message: "User successfully added"
        })
    } catch (error: any) {
        const { errors: { email: { message } } } = error;
        return errorHandler(res, 400, message);
    }
}