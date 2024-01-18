
import React from "react";
import { useState } from "react";
import ProfileHeader from "./Components/ProfileHeader";
import IndexBar from "./Components/indexBar";
import Dashboard from "./Components/Dashboard";

const indexLists = [
    { id: 1, name: "Overview" },
    { id: 2, name: "Option 2" },
    { id: 3, name: "Option 3" },
    { id: 4, name: "Option 4" },
];




const UserPage = () => {
    const [option, setOption] = useState(1);
    const [isIndexBarOpen, setIsIndexBarOpen] = useState(true);

    const changeOption = (newOption) => {
        setOption(newOption);
    };

    const toggleIndexBar = () => {
        setIsIndexBarOpen(!isIndexBarOpen);
    };

    const handleLogout = () => {
        console.log("Logout");
        // Remove token from local storage
        // Redirect to login page
        
        //code:
        localStorage.removeItem('token');
        window.location.href = '/';
    }

    return (<>
        <ProfileHeader
            userName="userName"
            handleLogout={handleLogout}
        />
        <div className="flex h-screen w-screen">
            <IndexBar
                indexLists={indexLists}
                option={option}
                changeOption={changeOption}
                isOpen={isIndexBarOpen}
                toggleIndexBar={toggleIndexBar}
                />
            <Dashboard 
            option={option} 
            option_list={indexLists}
            />
            <footer className="bg-gray-200 text-center text-xs  absolute bottom-0 w-full">
                <p>&copy; RoxWealth 2024</p>
            </footer>
        </div>
    </>
    );
}

export default UserPage;