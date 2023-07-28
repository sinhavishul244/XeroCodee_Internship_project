import { errorHandler } from "@/middlewares/error";
import User from "@/models/User";
import connectDB from "@/utils/connectDB"

export default async function handler(req: any, res: any) {
    if (req.method !== "GET") return errorHandler(res, 400, "only get requests allowed")
    try {
        connectDB();
        const user = await User.find({});
        res.json({
            success: true,
            user
        })
    } catch (error: any) {
        return errorHandler(res, 400, error);
    }
}