import { Routes, Route, NavLink } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Product from "./pages/product";
import DashboardLayout from "./pages/DashboardLayout";
import Profile from "./pages/Profile";
import Orders from "./pages/Orders";
import Settings from "./pages/Settings";

function App() {
    return (
        <>
            <nav className="bg-purple-500 p-4 flex justify-center gap-8">

                <NavLink
                    to="/"
                    className={({isActive})=>
                    isActive
                      ? "text-yellow-300 font-bold"
                      : "text-white"
                    }
                >
                    Home
                </NavLink>

                <NavLink
                    to="/about"
                    className={({isActive})=>
                    isActive
                      ? "text-yellow-300 font-bold"
                      : "text-white"
                    }
                >
                    About
                </NavLink>

                <NavLink
                    to="/contact"
                   className={({isActive})=>
                    isActive
                      ? "text-yellow-300 font-bold"
                      : "text-white"
                    }
                >
                    Contact
                </NavLink>
                
                <NavLink
                    to="/login"
                    className={({isActive})=>
                    isActive
                    ? "text-yellow-300 font-bold"
                    : "text-white"
                    }
                >  
                    Login  
                </NavLink>

                <NavLink
                    to="/dashboard"
                    className={({isActive})=>
                    isActive
                    ? "text-yellow-300 font-bold"
                    : "text-white"
                    }
                >  
                    Dashboard 
                </NavLink>

                <NavLink
                    to="/product/25"
                    className={({isActive})=>
                    isActive
                    ? "text-yellow-300 font-bold"
                    : "text-white"
                    }
                >  
                    Product 
                </NavLink>

                 <NavLink
                    to="/dashboard/profile"
                    className={({isActive})=>
                    isActive
                    ? "text-yellow-300 font-bold"
                    : "text-white"
                    }
                >  
                    Profile
                </NavLink>

                 <NavLink
                    to="/dashboard/orders"
                    className={({isActive})=>
                    isActive
                    ? "text-yellow-300 font-bold"
                    : "text-white"
                    }
                >  
                    Orders
                </NavLink>

                 <NavLink
                    to="/dashboard/settings"
                    className={({isActive})=>
                    isActive
                    ? "text-yellow-300 font-bold"
                    : "text-white"
                    }
                >  
                    Settings 
                </NavLink>

            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/product/:id" element={<Product/>} />
                <Route path="/dashboard" element={<DashboardLayout />}>
                    <Route path="profile" element={<Profile />} />
                    <Route path="orders" element={<Orders />} />
                    <Route path="settings" element={<Settings />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;