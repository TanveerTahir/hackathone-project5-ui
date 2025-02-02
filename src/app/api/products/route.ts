import { client } from "@/sanity/lib/client";
import { error } from "console";
import { NextResponse } from "next/server";


export async function GET() {
    try{
        const data = await client.fetch(`*[_type =="product" && slug.current == $slug] [0] {
        _id,
        title,
        _type,
        "imageUrl" :productImage.asset -> url,
        price,
        tags,
        discountPercentage,
        isNew
        }`,);

        return NextResponse.json(data, { status: 200 });
    } catch {error} {
        console.error('Error fetching data from Sanity:', error);
        return new NextResponse('Error fetching data', { status: 500});
    }
}