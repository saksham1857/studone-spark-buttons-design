
const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white px-4">
      <h1 className="font-montserrat font-bold text-4xl md:text-6xl text-navy-900 mb-16 text-center">
        PHYSICS WALLAH
      </h1>
      
      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        <ClassButton
          className="bg-blue-500 hover:bg-blue-600"
          label="Class 9"
          subLabel="Neev"
        />
        <ClassButton
          className="bg-orange-500 hover:bg-orange-600"
          label="Class 10"
          subLabel="Udaan"
        />
        <ClassButton
          className="bg-green-500 hover:bg-green-600"
          label="Class 11"
          subLabel="Arjuna"
        />
      </div>
    </div>
  );
};

export default Index;
