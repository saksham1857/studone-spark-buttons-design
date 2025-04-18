
import { ClassButton } from "@/components/ClassButton";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black px-4 relative overflow-hidden">
      {/* Increased intensity light beam effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50rem] h-[50rem] bg-gradient-radial from-white/40 via-white/20 to-transparent transform -translate-y-1/2 pointer-events-none blur-sm" />
      
      <h1 className="font-montserrat font-bold text-4xl md:text-6xl text-white mb-16 text-center relative z-10">
        PHYSICS WALLAH
      </h1>
      
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 relative z-10">
        <ClassButton
          className="bg-white text-black hover:bg-gray-100"
          label="Class 9"
          subLabel="Neev"
        />
        <ClassButton
          className="bg-white text-black hover:bg-gray-100"
          label="Class 10"
          subLabel="Udaan"
        />
        <ClassButton
          className="bg-white text-black hover:bg-gray-100"
          label="Class 11"
          subLabel="Arjuna"
        />
      </div>
    </div>
  );
};

export default Index;
