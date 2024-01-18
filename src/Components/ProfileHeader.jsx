import React, { useState } from "react";

const ProfileHeader = ({ userName, handleLogout }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  //check if the current page is profile page
  const isProfilePage = window.location.pathname === "/profile";

  const handleHomePage = () => {
    window.location.pathname = "/";
  };

  const handleDashboard = () => {
    window.location.pathname = "/user";
  };

  const handleProfile = () => {
    window.location.pathname = "/profile";
  };

  return (
    <div className="flex justify-between items-center p-4 bg-gray-200">
      <h1 className="text-2xl font-semibold">Hi, {userName}</h1>
      <div className="relative">
        <button
          className="bg-gray-700 text-white p-2 rounded font-semibold focus:outline-double text-xl"
          onClick={() => setIsProfileOpen(!isProfileOpen)}
        >
          {isProfileOpen ? "Close" : "Account"}
        </button>
        {isProfileOpen && (
          <ul className="absolute right-0 mt-2 bg-gray-700 text-white rounded font-semibold text-lg ">
          <MenuItem text="HomePage" onClick={handleHomePage}/>
          {/* if it is profile page, it will appear dashboard, else profile */}
          {isProfilePage ? (
            <MenuItem text="Dashboard" onClick={handleDashboard}/>
          ) : (
            <MenuItem text="Profile" onClick={handleProfile}/>
          )}
          <MenuItem text="Logout" onClick={handleLogout} />
        </ul>
        )}
      </div>
    </div>
  );
};


const MenuItem = ({ text, onClick }) => {
  return (
    <li className="w-full py-2 px-4 rounded-md hover:bg-blue-600">
      <button className="focus:outline-none " onClick={onClick}>
        {text}
      </button>
    </li>
  );
};

export default ProfileHeader;
