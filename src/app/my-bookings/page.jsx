import { auth } from "@/lib/auth";
import { getBookingsByUserId } from "@/lib/data";
import { headers } from "next/headers";

const MyBookings = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    });
    const user = session?.user;

    const myBookings = await getBookingsByUserId(user?.id)

    return (
        <div>
            hjdbhc
        </div>
    );
};

export default MyBookings;