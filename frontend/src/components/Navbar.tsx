

const Navbar = () => {
  return (
    <div className="xl:px-[15rem] px-[2rem] md:px-[7rem] flex justify-between items-center shadow-md bg-slate-100 py-3">
      <h1 className="font-extrabold sm:text-slate-700 text-transparent bg-clip-text bg-gradient-to-r from-[#5341FF] to-[#FF49E8] text-[1.8rem] cursor-pointer hover:drop-shadow-lg">Note App</h1>
      <ul className="flex gap-7">
        <li className="transition font-bold text-slate-500 text-[1.1rem] cursor-pointer hover:text-[#9981EF] hover:drop-shadow-lg max-sm:hidden">Home</li>
        <li className="transition font-bold text-slate-500 text-[1.1rem] cursor-pointer hover:text-[#9981EF] hover:drop-shadow-lg max-sm:hidden">Notes</li>
        <li className="transition font-bold text-slate-500 text-[1.1rem] cursor-pointer hover:text-[#9981EF] hover:drop-shadow-lg max-sm:hidden">Contact</li>
      </ul>
      <div className="w-10 h-10 text-center flex items-center justify-center cursor-pointer font-bold text-[#681EFF] text-[1.3rem] rounded-full bg-gradient-to-r from-[#B7ADFF] to-[#DEC1FF] hover:shadow-md">V</div>
    </div>
  )
}

export default Navbar;
