import { Outlet } from "@tanstack/react-router"
import LandingNav from "./navbars/landing-nav"
import Footer from "./footers/footer.tsx"



function LandingLayout(){
    return (
        <div className="min-h-screen flex flex-col">
            <div className="sticky">
                <LandingNav />
            </div>
            <main className="flex-grow z-0" style={{ backgroundColor: "#f3f3f6" }}>
                <Outlet />
            </main>
            <div className="w-full bg-[#3300ED]">
                <Footer />
            </div>
        </div>
    )
}

export default LandingLayout