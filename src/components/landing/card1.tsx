import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import bgImage from "@/assets/stock/home_cleaning.jpg"
import {cImage1,cImage2, cImage3, cImage4} from "@/assets/fb/index"


function Card1(){
    return (
        <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className="absolute inset-0 bg-cover bg-center z-0"
      >
        {/* Blue overlay */}
        <div className="absolute inset-0 bg-blue-900/60 backdrop-blur-[1px]"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-5xl font-bold text-white leading-tight">
            Professional Home Cleaning Services
          </h1>
          <p className="text-lg text-blue-100 max-w-md">
            Let us take care of your home while you focus on what matters most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg" className="bg-highlight hover:bg-highlight/40">
              Book Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-highlight font-extrabold hover:bg-highlight/10 hover:text-white hover:border-none">
              Our Services
            </Button>
          </div>
        </div>

        {/* Right Section (Carousel) */}
        <div className="hidden xl:block w-full">
          <Carousel className="relative w-full max-w-4xl mx-auto rounded-2xl shadow-xl overflow-hidden"
            plugins={[
                Autoplay({
                delay: 2000,
                }),
            ]}>
            <CarouselContent>
              <CarouselItem>
                <img src={cImage1} alt="Cleaning 1" className="w-full h-[700px] object-cover" />
              </CarouselItem>
              <CarouselItem>
                <img src={cImage2} alt="Cleaning 2" className="w-full h-[700px] object-cover" />
              </CarouselItem>
              <CarouselItem>
                <img src={cImage3} alt="Cleaning 3" className="w-full h-[700px] object-cover" />
              </CarouselItem>
              <CarouselItem>
                <img src={cImage4} alt="Cleaning 4" className="w-full h-[700px] object-cover" />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-2"/>
            <CarouselNext className="right-2"/>
          </Carousel>
        </div>
      </div>
    </div>
    )
}
export default Card1;