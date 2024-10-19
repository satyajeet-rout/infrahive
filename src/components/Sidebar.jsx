import { NavLink } from "react-router-dom"
function Sidebar() {
  return (
      <>
          <div className='flex flex-col w-[70px] h-screen justify-between  items-center bg-[#EFEFEF] border  fixed top-0 left-0 right-0'>
              
              <div className='flex flex-col  gap-4  items-center bg-[#EFEFEF] '>
                   <span>
                  <img className="w-[37px] mt-[15px]" src="https://infrahive-ai-search.vercel.app/Logo%20(Digest).png" alt="" />
                  </span>
                  
                  

              <button>
                <NavLink to='/' className={({isActive}) =>
                                        `block p-2 duration-200 ${isActive ? "bg-white rounded-md fill-black  shadow-md shadow-gray-600" : "bg-transparent hover:bg-gray-600 hover:fill-white rounded-md hover:shadow-md hover:shadow-black"} `
                                    }>
                      <svg className="w-[24px] MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="HomeOutlinedIcon"><path d="m12 5.69 5 4.5V18h-2v-6H9v6H7v-7.81zM12 3 2 12h3v8h6v-6h2v6h6v-8h3z"></path></svg>
                  </NavLink>
                  
              </button>

              <button>
                <NavLink to='/people' className={({isActive}) =>
                                        `block p-2 duration-200 ${isActive ? "bg-white rounded-md fill-black  shadow-md shadow-gray-600" : "bg-transparent hover:bg-gray-600 hover:fill-white rounded-md hover:shadow-md hover:shadow-black"} `
                                    }>
                    <svg className="w-[24px] MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="PersonOutlineOutlinedIcon"><path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4"></path></svg>
                </NavLink>
                  
              </button>
            
                  <button>
                      <NavLink to='/knowledge' className={({isActive}) =>
                                        `block p-2 duration-200 ${isActive ? "bg-white rounded-md fill-black  shadow-md shadow-gray-600" : "bg-transparent hover:bg-gray-600 hover:fill-white rounded-md hover:shadow-md hover:shadow-black"} `
                                    }>
                           <svg className="w-[24px] MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="AutoStoriesOutlinedIcon">
                           <path d="M22.47 5.2c-.47-.24-.96-.44-1.47-.61v12.03c-1.14-.41-2.31-.62-3.5-.62-1.9 0-3.78.54-5.5 1.58V5.48C10.38 4.55 8.51 4 6.5 4c-1.79 0-3.48.44-4.97 1.2-.33.16-.53.51-.53.88v12.08c0 .58.47.99 1 .99.16 0 .32-.04.48-.12C3.69 18.4 5.05 18 6.5 18c2.07 0 3.98.82 5.5 2 1.52-1.18 3.43-2 5.5-2 1.45 0 2.81.4 4.02 1.04.16.08.32.12.48.12.52 0 1-.41 1-.99V6.08c0-.37-.2-.72-.53-.88M10 16.62C8.86 16.21 7.69 16 6.5 16s-2.36.21-3.5.62V6.71C4.11 6.24 5.28 6 6.5 6c1.2 0 2.39.25 3.5.72zM19 .5l-5 5V15l5-4.5z"></path>
                           </svg>
                          
                      </NavLink>
                 
              </button>

              <button>
                <NavLink to='/deployment' className={({isActive}) =>
                                        `block p-2 duration-200 ${isActive ? "bg-white rounded-md fill-black  shadow-md shadow-gray-600" : "bg-transparent hover:bg-gray-600 hover:fill-white rounded-md hover:shadow-md hover:shadow-black"} `
                                    }>
                    <svg className="w-[24px] MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CategoryOutlinedIcon"><path d="m12 2-5.5 9h11zm0 3.84L13.93 9h-3.87zM17.5 13c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5m0 7c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5M3 21.5h8v-8H3zm2-6h4v4H5z"></path></svg>
                </NavLink>
                  
              </button>
             </div>

              <img className="rounded-full w-[40px] mb-[30px]" src="https://infrahive-ai-search.vercel.app/people/kv.jpeg
              "/>
              
                    
               
               
          </div>
         
      </>
  )
}

export default Sidebar