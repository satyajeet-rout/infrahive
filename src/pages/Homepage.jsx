
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../components/homecomponents/Logo';
import CardScroll from '../components/homecomponents/CardScroll';
import Suggestcard from '../components/homecomponents/Suggestcard';
function Homepage() {
  return (
      <>
          <div className=" flex flex-col w-full bg-[url('https://infrahive-ai-search.vercel.app/bg-search.png')] bg-custom bg-cover bg-center h-screen">
              <div className='flex justify-end'>
                  <button className='w-[90px] relative right-0 mr-[20px] mt-5 rounded bg-gray-300 border border-gray-400 hover:border-black  hover:shadow-md hover:bg-white'>+ New</button>
              </div>
              <span className="mx-auto text-[24px] inter ">Good Afternoon, Kunal</span>

                <label className="relative block w-[780px] mt-[30px] mx-auto">
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <SearchIcon/>
                </span>
                <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
                </label>
              <div className='mx-auto mt-[25px]'>
                  <Logo />
              </div>


              <div className='flex justify-between px-[100px] mt-[40px]'>
                  <Suggestcard/>
                  <CardScroll />
              </div>
              
                
             
             
             
             
         </div>
          

      </>
  )
}

export default Homepage