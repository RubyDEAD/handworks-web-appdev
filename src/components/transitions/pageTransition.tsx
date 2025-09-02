import { AnimatePresence, motion } from "framer-motion";
import { useRouterState } from "@tanstack/react-router";

function PageTransition({ children }: { children: React.ReactNode }) {
    const router = useRouterState();
    const pathname = router.location.pathname;

    return (
        <AnimatePresence>
            <div key={pathname}>
                <motion.div
                    initial={{opacity: 1}}
                    animate={{opacity: 0,
                        transition:{
                            delay: 1, duration: 0.4, ease: "easeInOut"
                        },

                    }}
                    className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
                />
                {children}
            </div>
        </AnimatePresence>
    );
}

export default PageTransition;
