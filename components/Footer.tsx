export default function Footer() {
    return (
        <footer className="bg-[#060324] text-white">
            <div className="container mx-auto px-6 py-10 grid grid-cols-2 lg:grid-cols-5 gap-8">
                {/* Left Section - Logo and Text */}
                <div className="lg:col-span-1">
                    <h2 className="text-2xl font-bold text-teal-400 mb-4">BookMySpot</h2>
                    <p className="text-gray-400">
                        Lorem ipsum dolor sit amet adipiscing eiusmod tempor
                        elementum ut labore.
                    </p>
                </div>

                {/* Links Section */}
                <div>
                    <h3 className="text-teal-400 font-semibold mb-4">Privacy</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="#" className="hover:text-white">Privacy</a></li>
                        <li><a href="#" className="hover:text-white">Policy</a></li>
                        <li><a href="#" className="hover:text-white">Security</a></li>
                        <li><a href="#" className="hover:text-white">Return</a></li>
                        <li><a href="#" className="hover:text-white">Support</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-teal-400 font-semibold mb-4">Company</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="#" className="hover:text-white">About</a></li>
                        <li><a href="#" className="hover:text-white">Press</a></li>
                        <li><a href="#" className="hover:text-white">Careers</a></li>
                        <li><a href="#" className="hover:text-white">Contact</a></li>
                        <li><a href="#" className="hover:text-white">Partners</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-teal-400 font-semibold mb-4">Support</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="#" className="hover:text-white">Help Center</a></li>
                        <li><a href="#" className="hover:text-white">Terms of service</a></li>
                        <li><a href="#" className="hover:text-white">Legal</a></li>
                        <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-white">Status</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-teal-400 font-semibold mb-4">Follow us</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="#" className="hover:text-white">Facebook</a></li>
                        <li><a href="#" className="hover:text-white">Twitter</a></li>
                        <li><a href="#" className="hover:text-white">Dribbble</a></li>
                        <li><a href="#" className="hover:text-white">Instagram</a></li>
                        <li><a href="#" className="hover:text-white">LinkedIn</a></li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-gray-800 text-gray-500 text-center py-4">
                <p>Copyright © 2024 BookMySpot, All Rights Reserved</p>
            </div>
        </footer>
    );
}
