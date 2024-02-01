
import { Link, useNavigate } from 'react-router-dom'

export default function Signup() {
  const navigate = useNavigate();

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='font-extrabold text-center text-[3rem] text-slate-700 my-7 p-3'>Sign Up</h1>
      <form className='flex flex-col gap-4'>
        <input type="text" placeholder='Username' id='username' className='bg-slate-100 p-3 rounded-lg'/>
        <input type="email" placeholder='Email' id='email' className='bg-slate-100 p-3 rounded-lg'  />
        <input type="password" placeholder='Password' id='password' className='bg-slate-100 p-3 rounded-lg' />
        <a className="relative" href="#">
            <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-slate-700"></span>
            <span className="text-center fold-bold relative inline-block h-full w-full rounded border-2 border-slate-700   bg-white px-3 py-3 text-base font-bold text-white transition duration-100 hover:bg-[#9981EF]  hover:text-slate-900 dark:bg-transparent">Write down your thoughts</span>
            </a>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to='/signin'>
          <span className='text-blue-500'>Sign In</span>
        </Link>
      </div>
    </div>
  )
}