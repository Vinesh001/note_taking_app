import home from '../assets/home.jpg'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className='xl:px-[15rem] py-[5.6rem] flex items-center justify-between px-[1.5rem] md:lg-[7rem] md:px-[4rem] py-10 max-sm:flex-col-reverse max-sm:text-center max-sm:items-center max-sm:justify-center'>
        <div className='w-1/2 flex flex-col gap-[2rem] items-start justify-center'>
            <h1 className='font-extrabold text-[3rem] text-slate-700'>Note App</h1>
            <p className='font-semibold text-slate-700 text-md'>This is your personal note taking app in which you can note down all your important notes </p>
            <a className="relative" href="#">
            <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-slate-700"></span>
            <span className=" fold-bold relative inline-block h-full w-full rounded border-2 border-slate-700   bg-white px-3 py-1 text-base font-bold text-white transition duration-100 hover:bg-[#9981EF]  hover:text-slate-900 dark:bg-transparent">Write down your thoughts</span>
            </a>
        </div>
        <div className='w-[27rem] w-1/2'>
            <img src={home} alt="" />
        </div>
    </div>
    <Footer></Footer>
    </>
  )
}

export default Home
