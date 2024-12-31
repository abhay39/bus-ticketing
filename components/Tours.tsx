import Image from "next/image";

export default function Tours() {
    return (
        <div className=" min-h-screen flex items-center">
            <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center gap-12">
                {/* Left Side - Content */}
                <div className="flex-1 text-center lg:text-left">
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                        Why You Choose Us for Your Tours
                    </h1>
                    <p className="text-gray-600 mb-8">
                        We offer a diverse range of transportation services from project
                        cargo to major international transport.
                    </p>

                    <div className="space-y-6">
                        {/* Feature 1 */}
                        <div className="flex items-start gap-4">
                            <div className="flex items-center justify-center bg-teal-500 text-white w-12 h-12 rounded-lg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-800">
                                    Find Your Ticket
                                </h3>
                                <p className="text-gray-600">
                                    We offer a diverse range of transportation services from
                                    project cargo to amar.
                                </p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex items-start gap-4">
                            <div className="flex items-center justify-center bg-teal-500 text-white w-12 h-12 rounded-lg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 17L13 21L21 9"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-800">
                                    Easy Payment Process
                                </h3>
                                <p className="text-gray-600">
                                    We offer a diverse range of transportation services from
                                    project cargo to amar.
                                </p>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="flex items-start gap-4">
                            <div className="flex items-center justify-center bg-teal-500 text-white w-12 h-12 rounded-lg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 10h11M9 21V3"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-800">
                                    Trusted Partner Services
                                </h3>
                                <p className="text-gray-600">
                                    We offer a diverse range of transportation services from
                                    project cargo to amar.
                                </p>
                            </div>
                        </div>
                    </div>

                    <a
                        href="#"
                        className="mt-8 inline-block bg-teal-500 text-white py-2 px-6 rounded-lg hover:bg-teal-600"
                    >
                        Get Trip Now
                    </a>
                </div>

                {/* Right Side - Illustration */}
                <div className="flex-1">
                    <Image
                        src="/girl.jpg" // Replace with your actual image path
                        alt="Tour Illustration"
                        width={400}
                        height={400}
                        className="w-full"
                    />
                </div>
            </div>
        </div>
    );
}
