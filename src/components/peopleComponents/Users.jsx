import Peoplebar from "../../pages/Peoplebar"
import Peoplebar2 from "../../pages/Peoplebar2"


function Users() {
  return (
          <>
          <div className='flex flex-col w-full overflow-auto '>
                      <div className="flex ml-[80px] justify-around gap-[350px]  border border-gray-400 h-[50px] w-[1000px] items-center rounded-md p-[18px] bg-gray-400">
                          <p className='text-[15px] Lato font-[500] ' >Name</p>
                          <p className='text-[15px] Lato font-[500] '>Deaprtment</p>
                          <p className='text-[15px] Lato font-[500] '>Role</p>
                      </div>
                      <Peoplebar name="Kunal Verma" department="Engineering" role="Software Engineer" image="https://infrahive-ai-search.vercel.app/people/kv.jpeg" />
                      <Peoplebar2 name="Dushyant Kumar" department="Sales" role="Sales" image="https://infrahive-ai-search.vercel.app/people/dk.png" />
                      <Peoplebar name="Abhinav Dhir" department="Marketting" role="Marketing Management" image="https://infrahive-ai-search.vercel.app/people/abhinav.jpeg" />
                      <Peoplebar2 name="Himanshu Jadon" department="Human Resources" role="HR Specialist" image="https://infrahive-ai-search.vercel.app/people/himanshu.jpeg" />
                      
                      <Peoplebar name="Shubh Wadekar" department="IT" role="System Administrator" image="https://infrahive-ai-search.vercel.app/people/shubh.jpeg" />
                      <Peoplebar2 name="Sarah Wilson" department="Sales" role="Sales Executive" image="https://randomuser.me/api/portraits/women/5.jpg" />
        
                      <Peoplebar name="David Martinez" department="Customer Support" role="Support Specialist" image="https://randomuser.me/api/portraits/men/6.jpg" />
                      <Peoplebar2 name="Emma Garcia" department="Operations" role="Operations Manager" image="https://randomuser.me/api/portraits/women/7.jpg" />
                      
                      <Peoplebar name="James Lee" department="Product" role="Product Manager" image="https://randomuser.me/api/portraits/men/8.jpg" />
                      <Peoplebar2 name="Olivia Harris" department="Legal" role="Legal Advisor" image="https://randomuser.me/api/portraits/women/9.jpg" />
                      
                      <Peoplebar name="Lucas Turner" department="Engineering" role="DevOps Engineer" image="https://randomuser.me/api/portraits/men/10.jpg" />
                      <Peoplebar2 name="Ava Scott" department="Design" role="UX Designer" image="https://randomuser.me/api/portraits/women/11.jpg" />
                      
                      <Peoplebar name="Benjamin White" department="Sales" role="Sales Director" image="https://randomuser.me/api/portraits/men/12.jpg" />
                      <Peoplebar2 name="Sophia Perez" department="Customer Success" role="Sales Executive" image="https://randomuser.me/api/portraits/women/13.jpg" />
                      
                      <Peoplebar name="Ethan Ramirez" department="Engineering" role="Backend Developer" image="https://randomuser.me/api/portraits/men/14.jpg" />
                      <Peoplebar2 name="Mia Carter" department="Finance" role="Accountant" image="https://infrahive-ai-search.vercel.app/people/himanshu.jpeg" />
                      
                      <Peoplebar name="Alexander Clark" department="Operations" role="Logistics Coordinator" image="https://randomuser.me/api/portraits/women/15.jpg" />
                      <Peoplebar2 name="Isabella Lewis" department="HR" role="HR Manager" image="https://randomuser.me/api/portraits/men/16.jpg" />
                      
                      <Peoplebar name="Mason Walker" department="Engineering" role="Front-end Developer" image="https://randomuser.me/api/portraits/women/17.jpg" />
                      <Peoplebar2 name="Harper Young" department="Design" role="Graphic Designer" image="https://randomuser.me/api/portraits/men/18.jpg" />
                      
                      <Peoplebar name="Logan Hall" department="Marketing" role="Content Strategist" image="https://randomuser.me/api/portraits/women/19.jpg" />
                      <Peoplebar2 name="Ella King" department="Legal" role="Compliance Officer" image="https://randomuser.me/api/portraits/men/20.jpg" />
                      <Peoplebar name="Daniel Hill" department="Product" role="Product Owner" image="https://randomuser.me/api/portraits/women/21.jpg" />
                      <Peoplebar2 name="Grace Adams" department="Engineering" role="QA Engineer" image="https://randomuser.me/api/portraits/men/22.jpg" />
                      <Peoplebar name="Matthew Baker" department="IT" role="Network Engineer" image="https://randomuser.me/api/portraits/women/23.jpg" />
                      <Peoplebar2 name="Chloe Gonzalez" department="Sales" role="Account Executive" image="https://randomuser.me/api/portraits/men/24.jpg" />
                      <Peoplebar name="Elijah Green" department="Operations" role="Supply Chain Analyst" image="https://randomuser.me/api/portraits/women/25.jpg" />
                      <Peoplebar2 name="Lily Mitchell" department="Customer Support" role="Support Manager" image="https://randomuser.me/api/portraits/men/26.jpg" />
                      <Peoplebar name="Samuel Perez" department="Engineering" role="Cloud Architect" image="https://randomuser.me/api/portraits/women/27.jpg" />
                      <Peoplebar2 name="Amelia Edwards" department="Marketing" role="SEO Specialist" image="https://randomuser.me/api/portraits/men/28.jpg" />
                      
        
                  </div>
                  
      </>
  )
}

export default Users