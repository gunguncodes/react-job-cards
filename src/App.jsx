import { Routes, Route, NavLink } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Product from "./pages/product";

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
                    to="/product/:id"
                    className={({isActive})=>
                    isActive
                    ? "text-yellow-300 font-bold"
                    : "text-white"
                    }
                >  
                    Product 
                </NavLink>

            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/product/:id" element={<Product/>} />
            </Routes>
        </>
    );
}

export default App;