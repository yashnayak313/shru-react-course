const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-[100] py-5 bg-gradient-to-b from-black/90 to-black/0 w-screen">
      <div className="w-full flex justify-between items-center">
        <div className="flex-shrink-0 pl-4">
          <h1 className="text-xl lg:text-4xl font-bold text-red-600">
            REACTFLIX
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
