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
      className={
        "w-32 h-32 flex items-center text-center justify-center rounded-full bg-gray-600/50"
      }
      whileHover={{ scale: 2, x: 100, y: -100, width: 200, height: 200 }}
      onHoverStart={() => setIsHovering(true)}
      onHoverEnd={() => setIsHovering(false)}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
    >
      <p className={` ${isHovering ? "text-[10px] mx-1" : "text-sm"}`}>
        {isHovering ? text : title}
      </p>
    </motion.div>
  );
}
