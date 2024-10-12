import React, { useState, useEffect } from "react";
// import Input from "./Input/Input";
import { db } from "../../Config/dbConfig";
import { addDoc, collection } from "firebase/firestore";
import logo from "../../public/GDGC_logo.png";

export default function PageTwo() {
  const [User, setUser] = useState({ email: "", phone: "", name: "", pos: "" });

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
    const { email, pos } = User;
    if (!email || !pos) {
      console.log("Please fill out all fields and enable location.");
      return;
    }
    try {
      await addDoc(ref, {
        email,
        createdAt: new Date(),
        lat: pos.coords.latitude,
        lon: pos.coords.longitude,
      });
      console.log("User information saved to Firestore!");
    } catch (error) {
      console.error("Error creating user or saving to Firestore:", error);
    }
  };

  return (
    <div className="flex flex-col items-center bg-black h-full w-full">
      <img className="w-[15%]" src={logo} alt="GDGC Logo" />
      <div className="text-white font-silkscreen font-bold text-[35px] text-center w-[60%] my-5">
        COMPLETE THE FORM AND GRAB YOUR{" "}
        <span className="text-[#848EE9] mx-[7px] my-[0px]">CERTIFICATE</span>!
      </div>
      <div className="flex flex-col justify-center items-center p-10 border-[3px] border-[#848EE9] shadow-[10px_10px_0px_#848EE9] rounded-[20px] w-[90%] max-w-[600px] box-border">
        {/* <Input fun={handleUserInput} label="Name:" />
        <Input fun={handleUserInput} label="Phone Number:" />
        <Input fun={handleUserInput} label="E-mail:" /> */}

        {/* Name */}
        <div className="flex flex-col  w-full mb-6">
          <div className="font-chakra-petch font-medium text-[#F0ECCE] text-[32px] mb-2">
            Name:
          </div>
          <div className="flex justify-center items-center w-full max-w-[600px] h-[60px] bg-[#F0ECCE] shadow-lg rounded-[18px] border-[3px] border-[#CCCCCC] box-border">
            <input
              className="bg-transparent border-none w-full h-full text-[36px] outline-none text-black px-2"
              type="text"
              onChange={(e) => handleUserInput("name", e.target.value)}
            />
          </div>
        </div>
        {/* Phone number */}
        <div className="flex flex-col  w-full mb-6">
          <div className="font-chakra-petch font-medium text-[#F0ECCE] text-[32px] mb-2">
            Phone Number:
          </div>
          <div className="flex justify-center items-center w-full max-w-[600px] h-[60px] bg-[#F0ECCE] shadow-lg rounded-[18px] border-[3px] border-[#CCCCCC] box-border">
            <input
              className="bg-transparent border-none w-full h-full text-[36px] outline-none text-black px-2"
              type="tel"
              onChange={(e) => handleUserInput("phone", e.target.value)}
            />
          </div>
        </div>
        {/* Email */}
        <div className="flex flex-col w-full mb-6">
          <div className="font-chakra-petch font-medium text-[#F0ECCE] text-[32px] mb-2">
            E-mail:
          </div>
          <div className="flex  items-center w-full max-w-[600px] h-[60px] bg-[#F0ECCE] shadow-lg rounded-[18px] border-[3px] border-[#CCCCCC] box-border">
            <input
              className="bg-transparent border-none w-full h-full text-[36px] outline-none text-black px-2"
              type="text"
              onChange={(e) => handleUserInput("email", e.target.value)}
            />
          </div>
        </div>
        <div
          className="bg-[#848EE9] rounded-[9px] text-white text-[28px] font-chakra-petch font-medium text-center py-3 px-5 cursor-pointer w-fit"
          onClick={handleSignUp}
        >
          Generate Certificate
        </div>
      </div>
    </div>
  );
}

