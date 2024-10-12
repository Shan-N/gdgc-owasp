import React from "react";
import { Button } from "../ui/Button";
import './page.css';



export default function PageOne() {
    return (
        <>
        <div className="overflow-y-auto h-screen">
            <main className="bg-[#161313] flex flex-col justify-start items-center">
                <div className="flex flex-col justify-center items-center my-7 md:">
                    <img
                        aria-hidden="true"
                        src="https://www.dscvit.com/newlogo.svg"
                        width={150}
                        height={150}
                        alt="logo-gdgc"
                    />
                </div>
                <div className="flex flex-row justify-center md: text-center px-4 w-[90%]">
                    <h1 className="text-white text-lg md:text-3xl md:my-10 font-extrabold font-silkscreen my-8">
                        WELCOME TO{" "}
                        <span className="text-[#838de9]">GDGC-PCCOE{" "}</span>
                        CERTIFICATE GENERATOR
                    </h1>
                </div>
            </main>
            <section className="bg-[#161313] flex flex-col justify-start items-center mt-8 md: w-full px-4 md:">
                <div className="w-[90%] bg-[#161313] rounded-xl border shadow-custom border-[#6e6e6e] flex flex-col items-center py-12">
                    <div className="text-white text-lg md: font-bold font-chakra pb-8 md: text-center max-w-[70%]">
                        By entering your details, you’ll receive a downloadable certificate featuring your name and session information, recognizing your dedication to cybersecurity education.
                    </div>
                    <div className="w-full flex justify-center">
                        <Button className="font-semibold rounded-xl font-chakra text-white bg-[#6977FD] gen-btn">GENERATE CERTIFICATE</Button>
                    </div>
                </div>
            </section>
        </div>
        </>
    );
}
