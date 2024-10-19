
import SearchIcon from '@mui/icons-material/Search';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import Users from '../components/peopleComponents/Users';

function People() {
  return (
      <>
      <div>
              <div>
          <div className="fixed top-0 right-0 left-0 bg-white z-[-1]">
            <div className='h-[40px]'>

            </div>
                  <label className="relative  w-[750px]  mx-auto flex items-center">
                <span className="sr-only ">Search</span>
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <SearchIcon/>
                </span>
                <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
                      <span className='flex gap-1 items-center absolute inset-y-0 right-3'>
                          <InfoOutlinedIcon style={{ fill: 'gray', width: "17px" }} />
                          <CloseOutlinedIcon style={{fill:'gray', width:"17px" }}/>
                      </span>
            </label>
            <div className='w-screen border border-gray-400 mt-7' > </div>
                </div>
              </div>
              

              <div className=' flex gap-[40px] '>
                  <div className='text-[20px] font-[500] Lato ml-[120px] fixed top-[140px] right-0 left-[90px]'>People</div>
                  <div className="absolute top-[140px] left-[300px] z-[-2]">
                    <Users/>
                  </div>
              </div>
      </div>
      </>
  )
}

export default People