
import { ClassButton } from "@/components/ClassButton";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black px-4 relative overflow-hidden">
      {/* Light beam effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-gradient-radial from-white/20 via-white/5 to-transparent transform -translate-y-1/2 pointer-events-none" />
      
      <h1 className="font-montserrat font-bold text-4xl md:text-6xl text-white mb-16 text-center relative">
        PHYSICS WALLAH
      </h1>
      
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 relative">
        <ClassButton
          className="bg-white text-black hover:bg-red-500 hover:text-white"
          label="Class 9"
          subLabel="Neev"
          comingSoon={true}
        />
        <Link to="/studone">
          <ClassButton
            className="bg-white text-black hover:bg-green-500 hover:text-white"
            label="Class 10"
            subLabel="Udaan"
          />
        </Link>
        <ClassButton
          className="bg-white text-black hover:bg-red-500 hover:text-white"
          label="Class 11"
          subLabel="Arjuna"
          comingSoon={true}
        />
      </div>

      <div className="absolute bottom-4 right-4 text-white/60 text-sm font-montserrat">
        -By Saksham Shree
      </div>
    </div>
  );
};

export default Index;
