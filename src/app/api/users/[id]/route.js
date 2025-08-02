import connectToDB from "../../../../../utils/database";
import User from "../../../../../model/user";

export const GET = async (req, { params }) => {
    try {
        await connectToDB();

        const user = await User.findOne({ address: params.address }).populate('username');

        if (!user) {
            return new Response(JSON.stringify({ success: false, error: "User not found" }), { status: 404 });
        }
        const userData = {
            username: user.username,
            address: user.address
        };

        return new Response(JSON.stringify({ success: true, data: userData }), { status: 200 });
    } catch (error) {
        console.error("Error fetching user:", error);
        return new Response(JSON.stringify({ success: false, error: "Failed to fetch the user" }), { status: 500 });
    }
};
