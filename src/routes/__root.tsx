import {createRootRoute, Outlet, useRouter} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import PageTransition from "@/components/transitions/pageTransition.tsx";
import {AnimatePresence, motion} from "framer-motion";
import { useEffect, useState } from "react";
import LoadingScreen from "@/components/transitions/LoadingScreen.tsx";

function NotFoundComponent() {
    const router = useRouter();

    useEffect(() => {
        if (window.history.length > 1) {
            router.history.back();
        } else {
            router.navigate({ to: "/" });
        }
    }, [router]);

    return null;
}

function ErrorComponent() {
  return <div>Something went wrong</div>;
}

  

export const Route = createRootRoute({
  component:RootComponent, 
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
})

function RootComponent(){
    const [isLoading, setIsLoading] = useState<boolean>(true)

    // temp timeout phase, will integrate auth into this
    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false)
        }, 1200)

        return () => clearTimeout(timeout)
    }, []);
    if (isLoading) {
        return <LoadingScreen />;
    }

 return (
  // TODO: add auth logic
  // PLEASE HELP ME FIX THIS MESS
  //    DI JUD MO FADE OUT PROPERLY ANG LOADING ANIMATION AND IDK WHY - Yousif
  <div className="min-h-screen flex flex-col bg-background text-foreground">
          <AnimatePresence mode="wait">
              {isLoading ? (
                  <motion.div
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 1,
                      transition: {delay: 1, duration: 0.4, ease: "easeOut" }
                      }}
                      className="h-screen w-full flex items-center justify-center"
                  >
                      <LoadingScreen />
                  </motion.div>
              ) : (
                  <motion.div
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 1,
                          transition: {delay: 1, duration: 0.4, ease: "easeInOut" }
                      }}
                      className="h-full w-full"
                  >
                      <PageTransition>
                          <Outlet />
                      </PageTransition>
                      <TanStackRouterDevtools />
                  </motion.div>
              )}
          </AnimatePresence>
  </div>
 )
}