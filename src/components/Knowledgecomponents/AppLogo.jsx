
import PropTypes from 'prop-types';
function AppLogo({image, name}) {
  return (
      <>
          <div className='flex border border-gray-400 mt-[20px] rounded-md shadow-md shadow-gray-500 w-[280px] h-[80px] py-[10px] gap-3 items-center'>
              <img className='w-[60px] ml-[20px]' src={image} alt="" />
              <span className='text-[16px] font-[500]'>{name}</span>
          </div>
      </>
  )
    

}
AppLogo.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  
};
export default AppLogo