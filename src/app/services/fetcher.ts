import axios from "axios";
import { Bulletin } from "../types/bulletin";

export const getBulletin = async () => {
    const response = await axios.get("https://nesine-case-study.onrender.com/bets");
    return response.data;
}
