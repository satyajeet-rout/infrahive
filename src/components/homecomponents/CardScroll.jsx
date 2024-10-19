import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

function CardScroll() {
  return (
      <>
          <div className='border rounded-md bg-white border-black w-[330px]  h-[400px]  p-[10px] overflow-y-scroll hide-scrollbar'>
              <span className='text-[15px] inter font-[500]'>Today</span>

              <div className='flex gap-[50px] items-center mt-[25px]'>
                <div className='flex flex-col'>
                    <span className='text-[12px]'>10:30-11:30 AM</span>
                    <span className='text-[14px] font-[500]'>Software Engineer Interview</span>
                </div>
                <KeyboardArrowDownIcon/>
                  
              </div>

              <div className='w-[80px] border border-gray-400 rounded-[4px] flex gap-2 justify-center hover:bg-cyan-100 hover:cursor-pointer hover:shadow-sm hover:shadow-slate-600 mt-[15px]'>
                  <VideoCallIcon style={{ fill: '#0072ea' }}  />
                  <span>Join</span>
              </div>

              <div className='flex items-center mt-[20px]'>
                   <button>
                    <svg className="w-[28px] MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="PersonOutlineOutlinedIcon"><path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4"></path></svg>
                  </button>
                  <div className='flex items-start'>
                      <img className='rounded-full w-[35px]' src='https://randomuser.me/api/portraits/men/0.jpg' />
                      <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv border-2 border-white rounded-full w-[18px] mt-[20px] ml-[-12px] bg-green-300 text-green-600" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DoneRoundedIcon"><path d="m9 16.2-3.5-3.5a.9839.9839 0 0 0-1.4 0c-.39.39-.39 1.01 0 1.4l4.19 4.19c.39.39 1.02.39 1.41 0L20.3 7.7c.39-.39.39-1.01 0-1.4a.9839.9839 0 0 0-1.4 0z"></path></svg>
                      
                  </div>

                  <div className='flex items-start'>
                      <img className='rounded-full w-[35px]' src='https://randomuser.me/api/portraits/men/1.jpg' />
                      <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv border-2 border-white rounded-full w-[18px] mt-[20px] ml-[-12px] bg-pink-300 text-pink-600" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CloseRoundedIcon"><path d="M18.3 5.71a.9959.9959 0 0 0-1.41 0L12 10.59 7.11 5.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4"></path></svg>
                      
                  </div>

                  <div className='flex items-start'>
                      <img className='rounded-full w-[35px]' src='https://randomuser.me/api/portraits/men/2.jpg' />

                      <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv border-2 border-white rounded-full w-[18px] mt-[20px] ml-[-12px] bg-gray-300 text-pink-600" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="QuestionMarkRoundedIcon"><path d="M7.92 7.54c-.8-.34-1.14-1.33-.66-2.05C8.23 4.05 9.85 3 11.99 3c2.35 0 3.96 1.07 4.78 2.41.7 1.15 1.11 3.3.03 4.9-1.2 1.77-2.35 2.31-2.97 3.45-.15.27-.24.49-.3.94-.09.73-.69 1.3-1.43 1.3-.87 0-1.58-.75-1.48-1.62.06-.51.18-1.04.46-1.54.77-1.39 2.25-2.21 3.11-3.44.91-1.29.4-3.7-2.18-3.7-1.17 0-1.93.61-2.4 1.34-.35.57-1.08.75-1.69.5M14 20c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2"></path></svg>
                   
                      
                  </div>
                  <div>
                      <span className='text-[12px] inter'>You and 14 others</span>
                  </div>
                  
              </div>


              <div className='flex gap-[10px] items-center mt-[20px]'>
                  <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-8feus5 w-[24px]" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="MenuRoundedIcon"><path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1"></path></svg>

                  <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1f302my w-[24px] fill-sky-600 " focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArticleRoundedIcon"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-6 14H8c-.55 0-1-.45-1-1s.45-1 1-1h5c.55 0 1 .45 1 1s-.45 1-1 1m3-4H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1m0-4H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1"></path></svg>

                  <span className='text-[14px] inter font-[400]'>Eng Interview Guide</span>
                  <div className=' w-[18px] h-[18px] border border-gray-300 rounded-full flex items-center justify-center bg-slate-300 ml-[-5px]' >
                      <span className='text-[11px] inter font-[400]  '>+2</span>
                  </div>
              </div>

              <div>
                <div className='flex gap-[50px] items-center mt-[15px] justify-between pr-[30px]'>
                <div className='flex flex-col'>
                    <span className='text-[11px] text-[#575657]'>11:30 AM - 12:30 PM</span>
                    <span className='text-[13px] text-[#575657] '>Kelvin/Cindy 1:1</span>
                </div>
                <ArrowForwardIosRoundedIcon style={{ fontSize: '13px' }}/>
                  
                </div>
                  

                <div className='flex gap-[50px] items-center mt-[15px] justify-between pr-[30px]'>
                <div className='flex flex-col'>
                    <span className='text-[11px] text-[#575657]'>2:30 PM - 3:30 PM</span>
                    <span className='text-[13px] text-[#575657] '>PM Design working session</span>
                </div>
                <ArrowForwardIosRoundedIcon style={{ fontSize: '13px' }}/>
                </div>
                  
                  


                <div className='flex gap-[50px] items-center mt-[15px] justify-between pr-[30px]'>
                <div className='flex flex-col'>
                    <span className='text-[11px] text-[#575657]'>4:00 PM - 4:30 PM</span>
                    <span className='text-[13px] text-[#575657] '>Team Check-in</span>
                </div>
                <ArrowForwardIosRoundedIcon style={{ fontSize: '13px' }}/>
                </div>
                  

                <div className='flex gap-[50px] items-center mt-[15px] justify-between pr-[30px]'>
                <div className='flex flex-col'>
                    <span className='text-[11px] text-[#575657]'>5:00 PM - 6:00 PM</span>
                    <span className='text-[13px] text-[#575657] '>Project Roadmap Review</span>
                </div>
                <ArrowForwardIosRoundedIcon style={{ fontSize: '13px' }}/>
                  </div>
                  


                <div className='flex gap-[50px] items-center mt-[15px] justify-between pr-[30px]'>
                <div className='flex flex-col'>
                    <span className='text-[11px] text-[#575657]'>6:30 PM - 7:30 PM</span>
                    <span className='text-[13px] text-[#575657] '>Client Sync-up</span>
                </div>
                <ArrowForwardIosRoundedIcon style={{ fontSize: '13px' }}/>
                </div>

              </div>
          </div>
      </>
  )
}

export default CardScroll