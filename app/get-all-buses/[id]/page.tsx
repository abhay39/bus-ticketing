"use client"
import Link from 'next/link';
import React, { useEffect } from 'react'
import { FaStar } from 'react-icons/fa';
import {BusSeatLayout} from '../../../components/Seat';
import Destination from '../../../components/Destination';
import DepartTime from '../../../components/DepartTime';

interface OneBus{
    params:any;
}
const page:React.FC<OneBus> =async ({params}) => {
    let {id}=await params;
    console.log("id: ",id)

    const getBusDetails=async()=>{
        const api = process.env.NEXT_PUBLIC_API_URL;
        let res=await fetch(`${api}/bus/${id}`)
        res=await res.json();
        console.log("Res: ",res)
    }

    useEffect(()=>{
        if(id){
            getBusDetails();
        }
    },[id])

    return (
        <div className='w-full  lg:px-28 md:px-16 sm:px-7 px-4 mt-[13ch] mb-[8ch] '>
            <div className="w-full grid grid-cols-2 items-center">
                <div className="col-span-1 space-y-8">
                    <img src={"/bus5.png"} alt="detail" className="w-full  aspect-[3/2] rounded-md object-contain" />
                    <div className='"space-y-4'>
                        <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-50">
                            Luxury Bus
                            <span className="text-base  font-normal text-neutral-400 dark:text-neutral-500 ml-3">
                                (Bus Number Plate)
                            </span>
                        </h1>

                        <div className='file items-center gap-x-2'>
                            <div className="flex items-center gap-x-1 text-sm text-yellow-500 dark:text-yellow-600">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <p className="text-neutral-900 dark:text-neutral-200 text-sm font-normal">
                                (4.5)
                            </p>
                            <p className="text-neutral-900 dark:text-neutral-200 text-sm font-normal">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque officia ipsum ducimus doloribus iure voluptatem veritatis eveniet placeat repudiandae similique, sunt, ullam, perferendis dicta animi.
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 space-y-10">
                    <div className="space-y-6">
                        {/*Destination Card*/}
                        <Destination/>
                        {/*Departure  Card*/}
                        <DepartTime />
                    </div>

                    {/*Seat Selection*/}
                    <BusSeatLayout />

                    {/*checkout Btn*/}
                    <div className="flex">
                        <Link href={'/bus/bus-details/checkout'} className='w-fit bg-violet-600 text-neutral-50 font-medium text-base px-6 py-2 rounded-md hover:bg-violet-700 ease-in-out duration-300'>
                        Processed to Checkout
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default page
