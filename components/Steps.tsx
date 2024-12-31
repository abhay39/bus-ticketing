import React from 'react'
import { FaBusAlt, FaWallet } from 'react-icons/fa'

const Steps: React.FC = () => {
    return (
        <div className=' flex items-start justify-center flex-col gap-4'>
            <h1 className=' font-bold text-3xl'>Follow 3 steps to Get your online ticket</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-4">
                <div className=' bg-[#6231F0] p-3 rounded-md text-white'>
                    <p className=' bg-slate-400 p-2 rounded-full w-10 flex items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                        </svg>

                    </p>
                    <h1 className=' font-bold text-xl'>Search Your Pickoff & Destination</h1>
                    <p className=' text-xs'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, quam aliquam porro consectetur deleniti provident amet iusto debitis adipisci ipsum nihil quasi vel velit culpa laborum totam ipsa inventore mollitia.</p>
                </div>

                <div className=' bg-[#19B8B1] p-3 rounded-md text-white'>
                    <p className=' bg-slate-400 p-2 rounded-full w-10 flex items-center justify-center'>
                    <FaBusAlt size={20}/>
                    </p>
                    <h1 className=' font-bold text-xl'>Choice Your Bus Ticket</h1>
                    <p className=' text-xs'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, quam aliquam porro consectetur deleniti provident amet iusto debitis adipisci ipsum nihil quasi vel velit culpa laborum totam ipsa inventore mollitia.</p>
                </div>

                <div className=' bg-[#6B76FF] p-3 rounded-md text-white'>
                    <p className=' bg-slate-400 p-2 rounded-full w-10 flex items-center justify-center'>
                    <FaWallet />
                    </p>
                    <h1 className=' font-bold text-xl'>Fill Your details and pay</h1>
                    <p className=' text-xs'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, quam aliquam porro consectetur deleniti provident amet iusto debitis adipisci ipsum nihil quasi vel velit culpa laborum totam ipsa inventore mollitia.</p>
                </div>
            </div>

        </div>
    )
}

export default Steps