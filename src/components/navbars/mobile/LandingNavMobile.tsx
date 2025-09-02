import {Sheet, SheetContent, SheetTrigger, SheetTitle} from "@/components/ui/sheet.tsx"
import { Link, useLocation } from "@tanstack/react-router"
import {GiHamburgerMenu} from "react-icons/gi"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar.tsx"

import logo from "@/assets/logo.jpg"

const routes = [
    {
        name: "home",
        link: "/home"
    }, 
    {
        name: "services",
        link: "/services"
    },
    {
        name: "about",
        link: "/about"
    },
]

function MobileLandingNav(){
    const location = useLocation();

    return (
        <Sheet>
            <SheetTrigger>
                <GiHamburgerMenu className="text-[32px] text-accent font-bold"/>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                  <VisuallyHidden>
                        <SheetTitle>Mobile Navigation</SheetTitle>
                    </VisuallyHidden>
                 <div className="mt-32 mb-40 text-center text-2xl">
                        <Link to="/landing">
                        <div className="flex flex-col items-center gap-6">
                        <Avatar className="w-42 h-42">
                            <AvatarImage src={logo}/>
                            <AvatarFallback>HW</AvatarFallback>
                        </Avatar>
                        </div>
                        </Link>
                </div>
                {/* Nav */}
                <nav className="flex flex-col justify-center items-center gap-8">
                        {routes.map((link, index) => {
                            return (
                                <Link to={link.link} key={index}  className={`
                                    ${link.link == location.pathname && "text-accent border-b-2 border-accent"}
                                    text-xl capitalize hover:text-accent transition-all`}>
                                    {link.name}
                                </Link>
                            )
                        })}
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileLandingNav;