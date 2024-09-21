export const Header = () => {
  return (
    // Add padding and adjust positioning for mobile
    <div className="flex justify-center items-center fixed top-3 p-3 left-0 right-0 z-10">
      <nav className="flex flex-wrap justify-center gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a href="/" className="nav-item">Home</a>
        <a href="#about" className="nav-item">About</a>
        <a href="#projects" className="nav-item">Projects</a>
        <a href="https://priyanshumishra.com" className="nav-item hover:text-cyan-200" target="_blank" rel="noopener noreferrer">Blog</a>
        <a href="#contact" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">Contact</a>
      </nav>
    </div>
  );
};
