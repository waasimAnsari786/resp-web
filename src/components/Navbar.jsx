import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeAbout from "./HomeAbout.jsx";
import Service from "./Service.jsx";
import Contact from "./Contact.jsx";

export default function Navbar() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeAbout head='grow your business with' btnText='get started' URL='https://img.freepik.com/free-vector/rocket-start-up-launcher_24908-81066.jpg?semt=sph'/>} />
        <Route path="/about" element={<HomeAbout head='welcome to about page of' btnText='contact here' URL='https://img.freepik.com/free-vector/rocket-background-flat-style_23-2147904992.jpg?semt=sph' />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}