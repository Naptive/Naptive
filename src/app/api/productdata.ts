import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    id: number;
    Title: string;
    Description: string;
    oldPrice: number;
    price: number;
    Brand: string;
    Image: string;
    IsNew: string;
    Cat: string;
}[]

const productdata = [
    {
        id: 36544,
        Title: "Iphone 14 Pro max ",
        Description: 
        "The most noticeable difference between the iPhone 14 Pro and iPhone 14 Pro Max is their screen sizes. This results in the iPhone 14 Pro Max having a larger 6.7-inch screen and a 4,323 mAh battery—the latter being an exact match compared to the iPhone 14 Plus.",
        oldPrice:   37899,
        price:  27699,
        Brand: "Apple",
        Image: "https://images.unsplash.com/photo-1675467369399-5022df8eba71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=878&q=80",
        IsNew: "true",
        Cat: "Electronics",
    }
]

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {
    res.status(200).json(productdata)
}