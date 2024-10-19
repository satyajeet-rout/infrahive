
import PropTypes from 'prop-types';
function Peoplebar({name,department,role,image}) {
  return (
    //   <>
    //       <div>
               
    //                   <div className="flex ml-[80px] justify-between    border border-white h-[50px] w-[1000px] items-center rounded-md px-[15px] bg-white hover:bg-red-200">
    //                   <span className='flex gap-2' >
    //                     <img className='w-[30px] rounded-full' src={image} />
    //                     <span className='text-[15px] text-blue-800 Lato font-[400] hover:cursor-pointer hover:underline' >{name}</span>
    //                   </span>
                  
    //                   <div className='flex mx-auto'>
    //                     <span className='text-[14px] Lato   '>{department}</span>
    //                   </div>
    //                       <span className='text-[15px] text-blue-800 Lato font-[400] hover:cursor-pointer hover:underline'>{role}</span>
    //                   </div>
                      
                     
                  
    //       </div>
      //   </>
      

       <>
          <div>
               
                      <div className="flex ml-[80px] justify-between   border border-[#fff] h-[50px] w-[1000px] items-center rounded-md p-[15px] bg-[#fff]  hover:bg-red-200">
                      <span className='flex gap-2 w-[333.33px]' >
                        <img className='w-[30px] rounded-full' src={image} />
                        <p className='text-[15px] text-blue-800 Lato font-[400] hover:cursor-pointer hover:underline ' >{name}</p>
                      </span>
                  
                     
                        <p className='text-[14px]  w-[333.33px] text-center Lato  '>{department}</p>
                      
                          <p className='text-[15px] w-[333.33px] text-right   text-blue-800 Lato font-[400] hover:cursor-pointer hover:underline'>{role}</p>
                      </div>
                      
                     
                  
          </div>
      </>
  )
}

Peoplebar.propTypes = {
  name: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Peoplebar