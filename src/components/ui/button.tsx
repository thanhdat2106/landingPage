import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline";
  icon?: React.ReactNode;
  label: string;
  className?: string;
}

const Button = ({
  variant = "primary",
  icon,
  label,
  className,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "px-6 py-2 rounded-full font-medium flex items-center justify-center gap-2 transition-all duration-300";

  const variants = {
    primary: "bg-[#F2542D] text-white hover:bg-[#d94726]",
    secondary: "bg-[#CA3E1B] text-white hover:bg-[#b13618]",
    outline: "border border-[#562C2C4D] text-[#562C2C] hover:bg-[#562C2C0D]",
  };

  return (
    <motion.button
      className={cn(baseStyles, variants[variant], className)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      <span>{label}</span>
      {icon && <span>{icon}</span>}
    </motion.button>
  );
};

export default Button;
