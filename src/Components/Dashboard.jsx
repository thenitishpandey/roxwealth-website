import React from "react";

const Dashboard = ({ option, option_list }) => {
    return (
        <div className="bg-gray-300 p-4 h-full w-full">
            <h1 className="text-2xl mb-4">Dashboard Content</h1>
            <p>{`This is option ${option}`}</p>
        </div>
    );
};

export default Dashboard;
