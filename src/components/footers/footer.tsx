import { IoLocationOutline, IoCallOutline, IoMailOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";

const information = [
    {
        title: "Address",
        description: "Exact address here",
        icon: IoLocationOutline,
    },
    {
        title: "Phone",
        description: "Phone number here",
        icon: IoCallOutline,
    },
    {
        title: "Email",
        description: "Email here",
        icon: IoMailOutline,
    },
    {
        title: "Business Hours",
        description: "Exact Business hours here",
        icon: FaRegClock,
    },
];

function Footer() {
    return (
        <footer className="bg-gray-900 w-full">
            <div className="container mx-auto px-6 md:px-10 lg:px-20 py-12 md:py-16 lg:py-20 flex flex-col lg:flex-row gap-12 lg:gap-20">
                {/* Left side */}
                <div className="flex-1">
                    <h1 className="text-white text-3xl sm:text-4xl font-extrabold mb-4">
                        Contact Us
                    </h1>
                    <p className="text-white/70 font-medium text-base sm:text-lg mb-8">
                        Have any concerns? Get in touch with us today!
                    </p>

                    <div className="flex flex-col gap-6">
                        {information.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={index}
                                    className="flex items-start gap-4"
                                >
                                    <div className="p-3 rounded-full bg-gray-800 flex items-center justify-center shadow-md">
                                        <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                                    </div>
                                    <div>
                                        <h2 className="text-white text-lg sm:text-xl font-bold">
                                            {item.title}
                                        </h2>
                                        <p className="text-white/60 text-sm sm:text-base">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Right side */}
                <div className="flex-1 bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg">
                    <h2 className="text-white text-xl sm:text-2xl font-bold mb-4">
                        Send Us a Message
                    </h2>
                    <form className="flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                        <textarea
                            placeholder="Your Message"
                            className="p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none h-28"
                        />
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300 text-white font-semibold py-3 rounded-lg"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
