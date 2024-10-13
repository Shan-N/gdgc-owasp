import React, { useState, useEffect } from "react";
import { db } from "../../Config/dbConfig";
import { addDoc, collection } from "firebase/firestore";
import { Link } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

export default function PageTwo() {
  const [User, setUser] = useState({ email: "", phone: "", name: "", pos: "" });
  const [canNavigate, setCanNavigate] = useState(false);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }

    function success(position) {
      setUser((prevState) => ({ ...prevState, pos: position }));
    }

    function error() {
      console.log("Unable to retrieve your location");
    }
  }, []);

  const ref = collection(db, "users");

  const handleUserInput = (label, value) => {
    setUser((prevUser) => ({
      ...prevUser,
      [label.toLowerCase()]: value,
    }));
  };

  const handleSignUp = async () => {
    const { email, pos, name, phone } = User;
    if (!name || !email || !phone) {
      toast.error("All fields are required. Please fill out all fields.");
      // setCanNavigate(false)
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      toast.error("Phone number must be exactly 10 digits.");
      return;
    }
    try {
      await addDoc(ref, {
        email,
        createdAt: new Date(),
        lat: pos.coords?.latitude,
        lon: pos.coords?.longitude,
      });
      console.log("User information saved to Firestore!");
      setCanNavigate(true);
    } catch (error) {
      console.error("Error creating user or saving to Firestore:", error);
    }
  };

  return (
    <div className="flex flex-col  justify-center items-center  bg-[#161313] h-screen w-screen px-4">
      <Toaster />

      {/* Background circles for styling */}
      <div className="absolute top-0 right-0 h-24 rounded-full aspect-square bg-green-500 sm:bg-green-500 blur-[110px] sm:blur-[250px]"  style={{height: "100px"}}/>
      <div className="absolute top-0 left-0 h-24 rounded-full aspect-square bg-pink-500 sm:bg-pink-500 blur-[110px] sm:blur-[250px]"  style={{height: "100px"}}/>
      <div className="absolute bottom-0 left-0 h-24 rounded-full aspect-square bg-blue-500 sm:bg-blue-600 blur-[110px] sm:blur-[280px]"  style={{height: "100px"}}/>
      <div className="absolute bottom-0 right-0 h-24 rounded-full aspect-square bg-yellow-500 sm:bg-yellow-600 blur-[110px] sm:blur-[280px]"  style={{height: "100px"}}/>

      <div className="flex flex-col justify-center items-center my-7 md:my-5">
        <img
          aria-hidden="true"
          src="https://www.dscvit.com/newlogo.svg"
          width={150}
          height={150}
          alt="logo-gdgc"
        />
      </div>

      <div className="flex flex-row justify-center md: text-center px-4 w-[90%]">
        <h1 className="text-white text-lg md:text-5xl md:my-8 font-extrabold font-silkscreen my-8 ">
          COMPLETE THE FORM AND GRAB YOUR{" "}
          <span className="text-[#838de9]">CERTIFICATE{" "}</span>
        </h1>
      </div>

      <div className="w-[90%] bg-[#161313] rounded-xl border shadow-custom border-[#6e6e6e] flex flex-col items-center py-12 px-4 md:w-[70%]">
        {/* Name */}
        <div className="flex flex-col w-full my-2">
          <div className="font-chakra-petch font-medium text-white text-lg mb-2">Name:</div>
          <div className="flex justify-center items-center w-full h-[60px] shadow-lg border-[3px] box-border">
            <input
              className="bg-transparent border border-[#838de9] rounded-xl w-full h-full text-lg outline-none text-white px-2"
              type="text"
              onChange={(e) => handleUserInput("name", e.target.value)}
            />
          </div>
        </div>

        {/* Phone number */}
        <div className="flex flex-col w-full my-2">
          <div className="font-chakra-petch font-medium text-white text-lg mb-2">Phone Number:</div>
          <div className="flex justify-center items-center w-full h-[60px] shadow-lg border-[3px] box-border">
            <input
              className="bg-transparent border border-[#838de9] rounded-xl w-full h-full text-lg outline-none text-white px-2"
              type="tel"
              onChange={(e) => handleUserInput("phone", e.target.value)}
            />
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col w-full my-2">
          <div className="font-chakra-petch font-medium text-white text-lg mb-2">E-mail:</div>
          <div className="flex justify-center items-center w-full h-[60px] shadow-lg border-[3px] box-border">
            <input
              className="bg-transparent border border-[#838de9] rounded-xl w-full h-full text-lg outline-none text-white px-2"
              type="text"
              onChange={(e) => handleUserInput("email", e.target.value)}
            />
          </div>
        </div>

        {/* Button with Link */}
        <div
          className="font-semibold rounded-xl py-2 px-4 font-chakra text-white bg-[#6977FD] text-sm my-4"
          onClick={handleSignUp}
        >
           {canNavigate ? (
          <Link to={`/pawned?name=${User.name}&email=${User.email}&phone=${User.phone}&long=${User.longitude}&lat=${User.latitude}`}>
            GENERATE CERTIFICATE
          </Link>
        ) : (
          "GENERATE CERTIFICATE"
        )}
        </div>
      </div>
    </div>
  );
}
