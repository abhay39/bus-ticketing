"use client"
import Image from "next/image"
import { useState } from "react"

interface infosLayout {
    pickupLocation: string,
    dropoffLocation: string,
    date: string,
    busType: string
}

const LayoutForTicket: React.FC = () => {

    const [infos, setInfos] = useState<infosLayout>({
        pickupLocation: "",
        dropoffLocation: "",
        date: "",
        busType: ""
    })

    const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInfos({
            ...infos,
            [e.target.name]: e.target.value
        })
    }

    return (
        <section className=" min-h-screen flex flex-col gap-4 lg:flex-row ">
            <div className=" w-full lg:w-1/2 flex items-center justify-center">
                <Image src={"/bus.jpg"} height={400} width={600} alt="ticket" className=" rounded-lg" />
            </div>

            <div className=" w-full lg:w-1/2 flex items-start justify-center gap-2 flex-col">
                <h1 className=" font-bold text-2xl">
                    Where Your Destinition?
                </h1>
                <p className=" text-slate-400 text-sm">We Offer a diverse range of transporation service from one place to another.</p>
                <div className=" flex flex-col gap-8 mt-6 w-full p-4 shadow-lg">
                    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
                        <div className=" w-full flex flex-col gap-1">
                            <label className=" flex gap-1 items-center text-xs" htmlFor=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 text-[#00A19A]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                                Pickup</label>

                            <input onChange={handlechange} placeholder="Where do you want to get picked up?" className=" p-2 rounded-md border-none outline-none bg-slate-100 w-full text-black text-sm" name="pickupLocation" type="text" />
                        </div>
                        <div className=" w-full flex flex-col gap-1">
                            <label className=" flex gap-1 items-center text-xs" htmlFor=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 text-[#00A19A]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                                Destination</label>

                            <input onChange={handlechange} placeholder="Where do you want to get picked up?" className=" p-2 rounded-md border-none outline-none bg-slate-100 w-full text-black text-sm" name="dropoffLocation" type="text" />
                        </div>
                    </div>

                    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
                        <div className=" w-full flex flex-col gap-1">
                            <label className=" flex gap-1 items-center text-xs" htmlFor=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 text-[#00A19A]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                            </svg>

                                Date</label>

                            <input onChange={handlechange} name="date" placeholder="Where do you want to get picked up?" className=" p-2 rounded-md border-none outline-none bg-slate-100 w-full text-black text-sm" type="date" />
                        </div>
                        <div className=" w-full flex flex-col gap-1">
                            <label className=" flex gap-1 items-center text-xs" htmlFor=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 text-[#00A19A]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                            </svg>

                                Bus Type</label>

                            <select onChange={(e)=>{
                                setInfos({...infos,busType:e.target.value})
                            }} className="p-2 rounded-md border-none outline-none bg-slate-100 w-full text-black text-sm" name="busType" id="">
                                <option className=" rounded-md" value="">Choose a bus type</option>
                                <option className=" rounded-md" value="AC">AC</option>
                                <option className=" rounded-md" value="Non-AC">Non-AC</option>
                            </select>
                        </div>
                    </div>

                    <div className=" grid grid-cols-1 gap-4 w-full">
                        <button onClick={()=>{
                            console.log("Result: ",infos)
                        }} className=" bg-[#00A19A] p-3 rounded-md text-white">Get Buses</button>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default LayoutForTicket