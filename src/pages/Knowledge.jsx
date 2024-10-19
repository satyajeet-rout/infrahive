import SearchIcon from '@mui/icons-material/Search';
import Apps from '../components/Knowledgecomponents/Apps';



function Knowledge() {
  return (
    <>
      <div>
              
              <div className='border border-white bg-white h-[115px] fixed top-0 right-0 left-0 z-[-1] '>
                <div className='flex items-center fixed top-0 left-0 right-0 '>
                <label className="relative  w-[450px]  mx-auto flex items-center mt-[40px] bg-white">
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <SearchIcon/>
                </span>
                <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
                </label>
                
                <div className='mt-[40px]'>
                    <img className='w-[30px] rounded-full mr-[15px]' src='https://infrahive-ai-search.vercel.app/people/kv.jpeg'/>
                </div>
              </div>
              <div className='w-full z-[-1] border border-gray-400 mt-4 fixed top-[100px] left-0 right-0' > </div>
              
              </div>

              <div className=' flex  mt-[40px] ml-[50px]'>
                  <div className='text-[20px] font-[500] w-[290px] Lato ml-[60px] fixed top-[150px] left-[90px] right-0'>Knowledge Management</div>
                  <div className='relative top-[110px] left-[430px] z-[-2]'>
                      <Apps/>
                  </div>
              </div>
      </div>
      </>
  )
}

export default Knowledge