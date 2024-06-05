import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://nesine-case-study.onrender.com",
    headers: {
        "Content-Type": "application/json",
    },
});

export const getBulletin = async () => {
    const response = await axiosInstance.get("/bets");
    return response.data;
}
