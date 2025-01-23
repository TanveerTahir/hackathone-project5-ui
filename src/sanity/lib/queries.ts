import { groq } from "next-sanity";

export const allProducts = groq `*[_type == "product" ]`;
export const twelveProduct = groq `*[_type == "product" ] [0..11]`;
export const eightProduct = groq `*[_type == "product" ] [9..16]`;