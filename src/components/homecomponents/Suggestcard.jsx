

function Suggestcard() {
  return (
      <>
          <div className="border rounded-md border-orange-300 shadow-sm shadow-orange-400 bg-white  px-[20px] w-[750px] h-[400px] ml-[50px]">
              <div className="flex gap-[50px] mt-[20px] ml-[15px]">
                  <span className="text-[#666666] hover:text-yellow-600 cursor-pointer Lato text-[14px]">Suggested</span>
                  <span className="text-[#666666] hover:text-yellow-600 cursor-pointer Lato text-[14px]">Recent</span>
              </div>

              <div className="border border-[#666666] mt-[10px]">
                  
              </div>

              <div className=" pl-[5px]">
                  <div className="flex mt-[10px] gap-[7px] items-center">
                      <span>
                          <img className="w-[15px]" src="https://infrahive-ai-search.vercel.app/appIcons/4.png"/>
                      </span>
                      <span className="inter text-[12px] text-[#666666]">
                          Common first day questions
                      </span>
                  </div>


                  <div className="flex mt-[10px] gap-[7px] items-center">
                      <span>
                          <img className="w-[15px]" src="https://infrahive-ai-search.vercel.app/appIcons/11.png"/>
                      </span>
                      <span className="inter text-[12px] text-[#666666]">
                         Teams/Projects Workshop Synthesis
                      </span>
                  </div>


                  <div className="flex mt-[10px] gap-[7px] items-center">
                      <span>
                          <img className="w-[15px]" src="https://infrahive-ai-search.vercel.app/appIcons/10.png"/>
                      </span>
                      <span className="inter text-[12px] text-[#666666]">
                         Remote working guide
                      </span>
                  </div>

                  <div className="flex mt-[10px] gap-[7px] items-center">
                      <span>
                          <img className="w-[15px]" src="https://infrahive-ai-search.vercel.app/appIcons/9.png"/>
                      </span>
                      <span className="inter text-[12px] text-[#666666]">
                        Sales opportunities Q4
                      </span>
                  </div>

                  <div className="flex mt-[10px] gap-[7px] items-center">
                      <span>
                          <img className="w-[15px]" src="https://infrahive-ai-search.vercel.app/appIcons/9.png"/>
                      </span>
                      <span className="inter text-[12px] text-[#666666]">
                       Quarterly goals
                      </span>
                  </div>

                  <div className="flex mt-[10px] gap-[7px] items-center">
                      <span>
                          <img className="w-[15px]" src="https://infrahive-ai-search.vercel.app/appIcons/11.png"/>
                      </span>
                      <span className="inter text-[12px] text-[#666666]">
                         Quarterly goals prioritization
                      </span>
                  </div>



              </div>
          </div>
      </>
  )
}

export default Suggestcard