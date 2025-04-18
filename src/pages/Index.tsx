
import { ClassButton } from "@/components/ClassButton";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black px-4">
      <h1 className="font-montserrat font-bold text-4xl md:text-6xl text-white mb-16 text-center">
        PHYSICS WALLAH
      </h1>
      
      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
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
