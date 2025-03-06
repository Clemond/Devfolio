import { motion } from "framer-motion";
import { useState } from "react";

export default function FactBubble({
  title,
  text
}: {
  title: string;
  text: string;
}) {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  return (
    <motion.div
      className={`w-32 h-32 flex items-center text-center justify-center rounded-full shadow-2xl shadow-[#c227de] ${
        isHovering ? "bg-[#383249]" : "bg-gray-600/50"
      }`}
      whileHover={{ scale: 2, x: 0, y: -150, width: 230, height: 230 }}
      onHoverStart={() => setIsHovering(true)}
      onHoverEnd={() => setIsHovering(false)}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
    >
      <p className={`  ${isHovering ? "text-[10px] mx-1" : "text-sm"}`}>
        {isHovering ? text : title}
      </p>
    </motion.div>
  );
}
