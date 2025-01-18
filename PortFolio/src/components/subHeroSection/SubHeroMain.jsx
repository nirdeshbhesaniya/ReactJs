const SubHeroMain = () => {
  return (
    <div className="w-full border-y border-lightGrey bg-brown text-lightGrey flex flex-wrap justify-around items-center gap-4 py-8 uppercase">
      {/* Adjusted the text size for different screen sizes */}
      <p className="hidden md:block text-sm sm:text-xl xl:text-4xl">Fast Learner</p>
      <p className="hidden md:block text-sm sm:text-xl xl:text-4xl">Team Work</p>
      <p className="text-sm sm:text-xl xl:text-4xl">MERN Stack</p>
    </div>
  );
};

export default SubHeroMain;

