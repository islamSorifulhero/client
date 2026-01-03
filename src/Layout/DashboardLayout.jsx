import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../components/content/AuthProviders";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
        await signOut(auth);
        navigate("/login");
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-green-700 text-white p-5">
                <NavLink to="/"><h2 className="text-2xl font-extrabold mb-3 text-white tracking-wide hover:text-green-300 transition">Dashboard</h2></NavLink>

                <nav className="space-y-3">
                    <NavLink to="/dashboard" className="block hover:bg-green-600 p-2 rounded">
                        Dashboard Home
                    </NavLink>
                    <NavLink to="/dashboard/all-issues" className="block hover:bg-green-600 p-2 rounded">
                        All Issues
                    </NavLink>
                    <NavLink to="/dashboard/add-issue" className="block hover:bg-green-600 p-2 rounded">
                        Add Issues
                    </NavLink>
                    <NavLink to="/dashboard/my-issues" className="block hover:bg-green-600 p-2 rounded">
                        My Issues
                    </NavLink>
                    <NavLink to="/dashboard/add-contribution" className="block hover:bg-green-600 p-2 rounded">
                        Add Contributions
                    </NavLink>
                    <NavLink to="/dashboard/my-contributions" className="block hover:bg-green-600 p-2 rounded">
                        My Contributions
                    </NavLink>
                    <NavLink to="/dashboard/profile" className="block hover:bg-green-600 p-2 rounded">
                        Profile
                    </NavLink>
                </nav>
            </aside>

            {/* Main Area */}
            <div className="flex-1">
                {/* Top Navbar */}
                <div className="flex justify-between items-center bg-white shadow px-6 py-3">
                    <h3 className="font-semibold">Welcome, {user?.displayName}</h3>

                    <div className="relative group">
                        <img
                            src={user?.photoURL}
                            alt="profile"
                            className="w-10 h-10 rounded-full cursor-pointer"
                        />
                        <div className="absolute right-0 hidden group-hover:block bg-white shadow rounded mt-2 w-40">
                            <NavLink to="/dashboard/profile" className="block px-4 py-2 hover:bg-gray-100">
                                Profile
                            </NavLink>
                            <NavLink to="/dashboard" className="block px-4 py-2 hover:bg-gray-100">
                                Dashboard Home
                            </NavLink>
                            <button
                                onClick={handleLogout}
                                className="w-full text-left px-4 py-2 hover:bg-gray-100"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>

                <div className="p-6">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
