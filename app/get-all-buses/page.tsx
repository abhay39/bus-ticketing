"use client"
import Bus from "@/components/Bus";
import { useEffect, useState } from "react";

const page = () => {

    const [allBuses, setAllBuses] = useState([])

    const getAllBuses = async () => {
        const api = process.env.NEXT_PUBLIC_API_URL;
        let res: any = await fetch(`${api}/bus`);
        res = await res.json();
        setAllBuses(res)
    }

    useEffect(()=>{
        getAllBuses()
    },[])

    return (
        <div className=" min-h-screen  lg:px-32 py-2 md:px-16 px-8 flex flex-col gap-5">
            <div className="w-full px-4">
                <h1 className="font-bold text-left text-xl">All trips available with us currently</h1>
            </div>

            {
                allBuses.length > 0 ? (
                    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                        {
                            allBuses.map((item,index)=>{
                                return(
                                    <Bus key={index} item={item}/>
                                )
                            })
                        }
                    </div>
                )
                    : (
                        <div className=" mt-5 flex items-center flex-col justify-center">
                            <img src="https://emojiisland.com/cdn/shop/products/Sad_Face_Emoji_large.png?v=1571606037" height={300} width={200} alt="" />
                            <h2>No buses found. Please check back later.</h2>
                        </div>
                    )
            }
        </div>
    )
}

export default page