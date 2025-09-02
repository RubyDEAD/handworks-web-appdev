import { motion } from "framer-motion";
import logo from "@/assets/logo.jpg";

export default function LoadingScreen() {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-indigo-950 via-slate-900 to-black text-foreground overflow-hidden">

            {/* Glowing radial background */}
            <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                style={{
                    background:
                        "radial-gradient(circle at center, rgba(255,255,255,0.08) 0%, transparent 70%)",
                    filter: "blur(80px)",
                }}
            />

            {/* Central pulsing blob with logo */}
            <div className="relative flex items-center justify-center w-40 h-40 mb-10">
                {/* Blob glow */}
                <motion.div
                    className="absolute w-40 h-40 rounded-full bg-indigo-600/40 blur-3xl"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Outer ripple effect */}
                <motion.div
                    className="absolute w-48 h-48 rounded-full border-4 border-indigo-400/50"
                    animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut",
                    }}
                />

                {/* Inner ripple effect */}
                <motion.div
                    className="absolute w-32 h-32 rounded-full border-4 border-pink-400/50"
                    animate={{ scale: [1, 1.8], opacity: [0.7, 0] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: 1,
                        ease: "easeOut",
                    }}
                />

                {/* Logo */}
                <motion.img
                    src={logo}
                    alt="Logo"
                    className="relative w-24 h-24 drop-shadow-[0_0_25px_rgba(99,102,241,0.8)] rounded-full"
                    initial={{ scale: 0.7, rotate: -15, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                />
            </div>

            {/* Multi-layer rotating rings */}
            <div className="relative w-20 h-20 flex items-center justify-center">
                {/* Outer ring */}
                <motion.div
                    className="absolute w-full h-full rounded-full border-4 border-indigo-500"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "linear",
                    }}
                    style={{
                        boxShadow: "0 0 20px rgba(99,102,241,0.8)",
                    }}
                />

                {/* Inner ring */}
                <motion.div
                    className="absolute w-12 h-12 rounded-full border-4 border-pink-500"
                    initial={{ rotate: 360 }}
                    animate={{ rotate: 0 }}
                    transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        ease: "linear",
                    }}
                    style={{
                        boxShadow: "0 0 20px rgba(236,72,153,0.8)",
                    }}
                />

                {/* Glowing center dot */}
                <motion.div
                    className="w-5 h-5 rounded-full bg-indigo-400"
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    style={{
                        boxShadow: "0 0 15px rgba(129,140,248,1)",
                    }}
                />
            </div>

            {/* Loading text */}
            <motion.p
                className="mt-10 text-lg font-semibold tracking-wide text-gray-200"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                Loading<span className="animate-pulse">...</span>
            </motion.p>

            {/* Subtle diagonal shine effect */}
            <motion.div
                className="absolute bottom-0 w-[200%] h-[200%] bg-gradient-to-tr from-transparent via-white/5 to-transparent rotate-12"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </div>
    );
}
