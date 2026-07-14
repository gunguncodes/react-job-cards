import {Link, Outlet} from "react-router-dom"
function DashboardLayout() {
    return (
        <div>
            <h1>Dashboard</h1>
            <nav>
                <Link to ="profile">Profile</Link>
                <Link to ="Orders">Orders</Link>
                <Link to ="Settings">Settings</Link>
            </nav>
            <hr />
            <Outlet/>
        </div>
    )
}

export default DashboardLayout;