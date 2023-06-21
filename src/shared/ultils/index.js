import { BASE_URL } from "../constants/app";

export const getImageProducts = (image) => {
    return `${BASE_URL}assets/uploads/products/${image}`;
}