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
        <div className="bg-gray-900 flex w-full h-[80vh]">
            <div className="container mx-auto px-20 py-20 flex gap-20">
                {/* Left side */}
                <div className="flex-1">
                    <h1 className="text-white text-4xl font-extrabold mb-4">Contact Us</h1>
                    <p className="text-white/60 font-semibold text-lg mb-10">
                        Have any concerns? Get in touch with us today!
                    </p>

                    <div className="flex flex-col gap-6">
                        {information.map((item, index) => {
                            const Icon = item.icon; //Grabbing icon reference here
                            return (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-none flex items-center justify-center">
                                        <Icon className="w-10 h-10 text-white" />
                                    </div>
                                    <div>
                                        <h2 className="text-white text-xl font-bold">{item.title}</h2>
                                        <p className="text-white/60 text-base">{item.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Right side */}
                <div className="flex-1">
                    Right side form
                </div>
            </div>
        </div>
    );
}

export default Footer;
