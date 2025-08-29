import { Outlet } from "@tanstack/react-router"
import LandingNav from "./navbars/landing-nav"
import LandingFooter from "./footers/landing-footer"



function LandingLayout(){
    return (
        <div className="min-h-screen flex flex-col">
            <div className="bg-complement">
                <LandingNav />
            </div>
            <main className="flex-grow z-0" style={{ backgroundColor: "#f3f3f6" }}>
                <Outlet />
            </main>
            <LandingFooter />
        </div>
    )
}

export default LandingLayout