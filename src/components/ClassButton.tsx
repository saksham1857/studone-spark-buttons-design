
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ClassButtonProps {
  className?: string;
  label: string;
  subLabel: string;
}

export const ClassButton = ({ className, label, subLabel }: ClassButtonProps) => {
  return (
    <Button
      className={cn(
        "flex flex-col items-center justify-center w-64 h-24 transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-montserrat",
        className
      )}
    >
      <span className="text-xl font-semibold">{label}</span>
      <span className="text-sm opacity-90">{subLabel}</span>
    </Button>
  );
};
