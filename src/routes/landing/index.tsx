import {createFileRoute} from '@tanstack/react-router'
import LandingNav from "@/components/navbars/LandingNav.tsx";
import Footer from "@/components/footers/footer.tsx";
import CardContainer from "@/components/landing/cardContainer.tsx";

export const Route = createFileRoute('/landing/')({
  component: RouteComponent,
})

function RouteComponent() {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="sticky">
                <LandingNav />
            </div>
            <main className="flex-grow z-0" style={{ backgroundColor: "#f3f3f6" }}>
                <CardContainer />
            </main>
            <div className="w-full bg-[#3300ED]">
                <Footer />
            </div>
        </div>
    )
}
