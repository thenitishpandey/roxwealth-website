import React from "react";

const IndexBar = ({ indexLists, option, changeOption, isOpen, toggleIndexBar }) => {
    return (
        <div className={`bg-gray-200 p-2 h-full ${isOpen ? "w-1/4" : "w-1/9"}`}>
            <div className="mb-4">
                <button
                    className="bg-gray-700 text-white p-2 rounded w-full font-extrabold"
                    onClick={toggleIndexBar}
                >
                    {isOpen ? "Close" : "Open"}
                </button>
            </div>
            {isOpen && (
                <div>
                    {indexLists.map((indexItem) => (
                        <div
                            key={indexItem.id}
                            className={`cursor-pointer p-2 ${
                                option === indexItem.id
                                    ? "bg-blue-500 text-white rounded-md font-bold"
                                    : ""
                            }`}
                            onClick={() => changeOption(indexItem.id)}
                        >
                            {indexItem.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default IndexBar;
