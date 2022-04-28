import React from "react";

export default function About() {
  return (
    <div className="max-w-[1460px] m-auto">
        <div className="mt-20">
        <h2 className="font-bold text-center text-[24px] md:text-[40px] lg:text-[48px] uppercase ">Contatti</h2>
        <hr className=" max-w-[400px] mx-auto mt-5" />
        <hr className=" max-w-[400px] mx-auto mt-2" />
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-10  ">
        <div className="mt-20 px-10 py-7 shadow-lg rounded-md border-double border-4 border-[#28a745]">

          <div className="flex items-center mt-5">
            <p className="text-center mr-5  text-[20px] text-white ">
              <i className="fas fa-map-marker-alt fa-2x bg-[#28a745] p-5 rounded-[50%] w-[80px] "></i>
            </p>
            <p className="text-[20px] font-bold ">
              Studi in Torino e Carmagnola
            </p>
          </div>
          
          <div className="flex items-center mt-5">
            <p className="text-center mr-5  text-[20px] text-white ">
              <i className="fas fa-mobile-alt fa-2x bg-[#28a745] p-5 rounded-[50%] w-[80px] "></i>
            </p>
            <p className="text-[20px] font-bold ">
            3392989092
            </p>
          </div>
          <div className="flex items-center mt-5">
            <p className="text-center mr-5  text-[20px] text-white ">
              <i className="far fa-envelope fa-2x bg-[#28a745] p-5 rounded-[50%] w-[80px] "></i>
            </p>
            <p className="text-[20px] font-bold ">
            plerro2001@yahoo.it
            </p>
          </div>
          <div className="flex items-center mt-5">
            <p className="text-center mr-5  text-[20px] text-white ">
              <i className="far fa-clock fa-2x bg-[#28a745] p-5 rounded-[50%] w-[80px] "></i>
            </p>
            <p className="text-[20px] font-bold ">
            Consulenze esclusivamente previo appuntamento
            </p>
          </div>
        </div>


        <div className="mt-20 px-10 py-7 shadow-lg rounded-md border-double border-4 border-[#28a745]">
            <h1 className="text-[40px] font-bold pb-10 border-b-2 border-back ">Per informazioni:</h1>
            <div className=" mt-7">
                <input type='text' placeholder="Nome" className=" outline-none border-[1px] border-gray-200 px-3 py-2 w-full font-bold " />
                <input type='text' placeholder="E-mail" className=" outline-none border-[1px] border-gray-200 px-3 py-2 w-full mt-5 font-bold" />
                <input type='text' placeholder="Telefono" className=" outline-none border-[1px] border-gray-200 px-3 py-2 w-full mt-5 font-bold" />

                <textarea type='text' placeholder="Telefono" className=" outline-none border-[1px] border-gray-200 px-3 py-2 w-full mt-5 font-bold" />

                <div data-netlify-recaptcha="true"></div>
                <div className="mt-12">
                <button className="bg-[#28a745] text-white font-bold w-full p-2 rounded-md tracking-[0.2em] text-[18px] ">Invie</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
