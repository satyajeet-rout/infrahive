import AppLogo from "./AppLogo"


function Apps() {
  return (
      <>
          <div className="overflow-auto ">
              <div className="flex justify-left ml-[40px] gap-[750px]">
              <span className="text-[18px] font-[500]  inter">Apps</span>
              <button className='w-[90px] text-[14px] relative right-0 mr-[px]  rounded bg-gray-300 border border-gray-400 hover:border-black  hover:shadow-md hover:bg-white'>+ Add App</button>
              </div>

              <div className="w-[900px] mt-[30px] ml-[40px]">
              <span className="text-[15px] text-[#525252]">InfraHive works best when you can search across all the tools you and your team use every day. Connect all the tools you need by clicking on each and following the steps shown.</span>
              </div>


              <div className="flex flex-wrap justify-between ml-[40px] mt-[10px] w-[890px]">
                  <AppLogo image="https://infrahive-ai-search.vercel.app/Knowledge/1.png" name="Airtable"/>
                  <AppLogo image="https://infrahive-ai-search.vercel.app/Knowledge/2.png" name="Asana"/>
                  <AppLogo image="https://infrahive-ai-search.vercel.app/Knowledge/3.png" name="Salesforce"/>
                  <AppLogo image="https://infrahive-ai-search.vercel.app/Knowledge/4.png" name="SAP"/>
                  <AppLogo image="https://infrahive-ai-search.vercel.app/Knowledge/5.png" name="Microsoft Dynamic 360"/>
                  <AppLogo image="https://infrahive-ai-search.vercel.app/Knowledge/6.png" name="Oracle Suite"/>
                  <AppLogo image="https://infrahive-ai-search.vercel.app/Knowledge/7.png" name="Confluence (Cloud)"/>
                  <AppLogo image="https://infrahive-ai-search.vercel.app/Knowledge/8.png" name="Confluence (Datacenter)"/>
                  <AppLogo image="https://infrahive-ai-search.vercel.app/Knowledge/9.png" name="Tableau"/>
                  <AppLogo image="https://infrahive-ai-search.vercel.app/Knowledge/10.png" name="Google Drive"/>
                  <AppLogo image="https://infrahive-ai-search.vercel.app/Knowledge/11.png" name="Microsoft One Drive"/>
                  <AppLogo image="https://infrahive-ai-search.vercel.app/Knowledge/12.png" name="Microsoft Azure"/>
                  <AppLogo image="https://infrahive-ai-search.vercel.app/Knowledge/13.png" name="Google Cloud Platform (GCP)"/>
                  <AppLogo image="https://infrahive-ai-search.vercel.app/Knowledge/14.png" name="Microsoft Teams"/>
                  <AppLogo image="https://infrahive-ai-search.vercel.app/Knowledge/15.png" name="Gmail"/>
                  <AppLogo image="https://infrahive-ai-search.vercel.app/Knowledge/16.png" name="Microsoft Outlook"/>
                  <AppLogo image="https://infrahive-ai-search.vercel.app/Knowledge/17.png" name="Slack"/>
                  <AppLogo image="https://infrahive-ai-search.vercel.app/Knowledge/18.png" name="Jira (Cloud)"/>
                  <AppLogo image="https://infrahive-ai-search.vercel.app/Knowledge/19.png" name="Jira (Datacenter)"/>

              </div>
              

              
          </div>
          
      </>
  )
}

export default Apps