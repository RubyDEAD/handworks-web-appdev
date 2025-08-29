import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Link, useLocation } from "@tanstack/react-router"
import logo from "@/assets/logo.jpg"
import MobileLandingNav from "./mobile/m-landing-nav"
import { Button } from "@/components/ui/button"

const routes = [
    { name: "home", link: "/home" },
    { name: "services", link: "/services" },
    { name: "about", link: "/about" },
]

function LandingNav() {
    return (
        <>
            <header className="w-full py-5 x:py-1 text-accent border-b border-border">
                <div className="px-4 xl:px-8 flex justify-between items-center w-full">
                    {/* Logo + Title */}
                    <Link to="/landing" className="flex items-center gap-4">
                        <Avatar className="w-16 h-16">
                            <AvatarImage src={logo} />
                            <AvatarFallback>HW</AvatarFallback>
                        </Avatar>
                        <h1 className="text-2xl xl:text-4xl font-semibold">
                            Handworks Cleaning
                        </h1>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden xl:flex items-center gap-8">
                        <Nav />
                        <Link to="/">
                            <Button className="text-xl bg-fuchsia-50 text-accent hover:bg-accent hover:text-white">Sign Up</Button>
                        </Link>
                    </div>

                    {/* Mobile Nav */}
                    <div className="xl:hidden">
                        <MobileLandingNav />
                    </div>
                </div>
            </header>
        </>
    )
}
export default LandingNav

function Nav() {
    const location = useLocation();
    return (
        <nav className="flex gap-8">
            {routes.map((link, index) => {
                return <Link to={link.link} key={index} 
                className={`${link.link === location.pathname && 
                    "text-accent border-b-2 border-accent"
                } capitalize font-medium hover:text-accent transition-all`}>
                    <span className="text-xl hover:text-slate-800">{link.name}</span></Link>
            } )}
        </nav>
    )
}
