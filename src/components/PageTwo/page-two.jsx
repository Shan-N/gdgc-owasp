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
    <div className="flex flex-col  justify-center items-center  bg-[#161313] h-screen w-screen px-4">


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
        {/* <Input fun={handleUserInput} label="Name:" />
        <Input fun={handleUserInput} label="Phone Number:" />
        <Input fun={handleUserInput} label="E-mail:" /> */}

        {/* Name */}
          <div className="flex flex-col w-full my-2  ">

            <div className="font-chakra-petch font-medium text-white text-lg mb-2">
              Name:
            </div>

            <div className="flex  justify-center items-center w-full h-[60px] shadow-lg  border-[3px]  box-border">
              <input
                className="bg-transparent border border-[#838de9] rounded-xl w-full h-full text-lg outline-none text-white px-2"
                type="text"
                onChange={(e) => handleUserInput("name", e.target.value)}
              />
            </div>
        </div>

        {/* Phone number */}
        <div className="flex flex-col  w-full my-2 ">
          <div className="font-chakra-petch font-medium text-white text-lg mb-2">
            Phone Number:
          </div>
          <div className="flex  justify-center items-center w-full h-[60px] shadow-lg  border-[3px]  box-border">
            <input
               className="bg-transparent border border-[#838de9] rounded-xl w-full h-full text-lg outline-none text-white px-2"
              type="tel"
              onChange={(e) => handleUserInput("phone", e.target.value)}
            />
          </div>
        </div>


        {/* Email */}
        <div className="flex flex-col w-full my-2 ">
          <div className="font-chakra-petch font-medium text-white text-lg  mb-2">
            E-mail:
          </div>
          <div className="flex  justify-center items-center w-full h-[60px] shadow-lg  border-[3px]  box-border" >
            <input
             className="bg-transparent border border-[#838de9] rounded-xl w-full h-full text-lg outline-none text-white px-2"
              type="text"
              onChange={(e) => handleUserInput("email", e.target.value)}
            />
          </div>
        </div>

        <div
          className="font-semibold rounded-xl py-2 px-4 font-chakra text-white bg-[#6977FD] text-sm my-4"
          onClick={handleSignUp}
        >
          GENERATE CERTIFICATE
        </div>
      </div>



      
    </div>
  );
}

