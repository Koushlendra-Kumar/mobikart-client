import React from "react";

function Header() {
  return (
    <header className="w-full px-8 lg:py-4 py-2 border-b">
      <div className="flex justify-between  ">
        <h1 className="font-extrabold text-2xl text-blue-500 !font-sans">
          Mobikart
        </h1>
        <input
          type="text"
          className="hidden lg:block w-1/4 rounded-full bg-gray-100 px-2 py-1"
          placeholder="Search by Brand, Price, Model etc."
        />
        <div className="hidden lg:block">
          <button className=" hover:text-blue-500">Login</button>/
          <button className=" hover:text-blue-500">Signup</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
