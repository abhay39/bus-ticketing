import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const EnjoySummer = () => {
  return (
    <div className=" min-h-screen flex items-center">
            <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center gap-8">
                {/* Left Side - Image */}
                <div className="flex-1">
                    <Image
                        src="/summer.webp" // Replace with your actual image path
                        alt="Van Illustration"
                        width={400}
                        height={300}
                        className="w-full"
                    />
                </div>

                {/* Right Side - Content */}
                <div className="flex-1 text-center lg:text-left">
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                        Enjoy Your Summer Trip With Us!
                    </h1>
                    <p className="text-gray-600 mb-6">
                        Lorem ipsum dolor sit amet adipiscing elit, sed do eiusmod
                        tempor elementum ut labore et dolore magna aliqua ad minim veniam,
                        quis nostrud amet exercitation.
                    </p>
                    <p className="text-gray-600 mb-6">
                        We offer a diverse range of transportation services from project
                        cargo to major international transport and domestic travel
                        services.
                    </p>

                    <div className="flex flex-col lg:flex-row items-center gap-4">
                        <Link
                            href="/get-all-buses"
                            className="bg-teal-500 text-white py-2 px-6 rounded-lg hover:bg-teal-600"
                        >
                            Get Trip Now
                        </Link>
                        <a
                            href="#"
                            className="text-teal-500 underline hover:text-teal-600"
                        >
                            Want to know more?
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EnjoySummer