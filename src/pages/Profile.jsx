import { useContext } from "react";
import { AuthContext } from "../components/content/AuthProviders";

const Profile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="bg-white p-6 rounded shadow max-w-2xl">
            <img src={user.photoURL} className="w-24 rounded-full mb-4" />
            <p><strong>Name:</strong> {user.displayName}</p>
            <p><strong>Email:</strong> {user.email}</p>
        </div>
    );
};

export default Profile;
