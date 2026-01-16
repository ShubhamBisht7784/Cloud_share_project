import { UserButton } from "@clerk/clerk-react"

const Dashboard = () => {

    return <>
    <div>
     <DashboardLayout>
        <div>
            <UserButton />
        </div>
     </DashboardLayout> 
    </div>
    </>
}

export default Dashboard

