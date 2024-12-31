import Image from "next/image"
import Link from "next/link"
import React from "react"

const HeroSection:React.FC = () => {
  return (
    <section className=" flex flex-col lg:flex-row gap-5 items-center justify-center min-h-screen">
        <div className=" w-full animatedText flex flex-col gap-8 lg:w-1/2">
            <h1 className=" lg:text-5xl md:text-4xl text-3xl font-bold">Forget to Waiting For Your Bus Journey</h1>
            <p className=" text-sm text-justify">Forget waiting endlessly for your bus journey! Experience seamless travel with our efficient bus service, designed to prioritize your time and convenience. Say goodbye to long queues and unpredictable schedules, and say hello to stress-free commuting with real-time updates and reliable transportation. Your journey begins here!</p>
            <Link href={"/book-ticket"} className=" bg-blue-400 p-4 rounded-lg text-center font-semibold">Get Your Ticket</Link>
        </div>
        <div className=" w-full lg:w-1/2">
            <Image src={"/queue.webp"} height={200} width={400}  alt="queue" className=" animated h-full w-full object-cover rounded-lg" />
        </div>
    </section>
  )
}

export default HeroSection