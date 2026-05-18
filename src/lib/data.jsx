import { headers } from "next/headers";
import { auth } from "./auth";

export const getDestinationsData = async () => {
    const res = await fetch("http://localhost:5000/destination");
    const data = await res.json();
    return data;
}

export const getDestinationById = async (id) => {
    const {token} = await auth.api.getToken({
    headers: await headers()
    })

    const res = await fetch(`http://localhost:5000/destination/${id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    const data = await res.json();
    return data;
}

export const getBookingsByUserId = async (id) => {
    const {token} = await auth.api.getToken({
    headers: await headers()
    })

    const res = await fetch(`http://localhost:5000/booking/${id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    const data = await res.json();
    return data;
}