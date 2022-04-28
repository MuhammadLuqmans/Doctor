import React from "react";

export default function Banner() {
  return (
    <div className="max-w-[1460px] m-auto">
      <div className="mt-20">
        <h2 className="font-bold text-center text-[24px] md:text-[40px] lg:text-[48px] uppercase">
          Info
        </h2>
        <hr className=" max-w-[400px] mx-auto mt-5" />
        <hr className=" max-w-[400px] mx-auto mt-2" />
      </div>

      <div className="hidden items-center justify-center  mt-20 sm:flex md:flex lg:hidden ">
        <img
          src="/image/doctor.jpg"
          alt="doctor"
          className="rounded-[50%] max-h-[340px] max-w-[300px] shadow-lg"
        />
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-4 mx-auto  gap-7 shadow-lg mt-20 p-2 py-4 border-double border-4 border-[#28a745] rounded-md py-10 ">
        <div className="flex items-center justify-center xs:hidden sm:hidden md:hidden lg:flex ">
          <img
            src="/image/doctor.jpg"
            alt="doctor"
            className="rounded-[50%] max-h-[340px] max-w-[300px] "
          />
        </div>
        <div className=" mt-4 lg:mt-0 mx-auto ">
          <div className="text-center  text-[32px] text-white ">
            <i className="fas fa-university fa-2x  bg-[#28a745] p-5 rounded-[50%] "></i>
          </div>
          <p className="leading-6 text-red font-[900] text-[20px] mt-10 italic">
            Percorso di studio:
          </p>
          <ul className="leading-7 text-[16px] sm:text-[18px] ">
            <li className="-mt-2 flex">
              <p className="ml-2 mr-1">•</p>
              <p>
                Laurea in Medicina e Chirurgia con voto 110/110 e lode, tesi
                sperimentale di Gastroenterologia pediatrica nel 1986.
              </p>
            </li>
            <li className="-mt-2 flex">
              <p className="ml-2 mr-1">•</p>
              <p>
                {" "}
                Specializzazione in Pediatria con voto 70/70 con lode, tesi
                sperimentale Gastrite da Helicobacter Pylori nel 1991.
              </p>
            </li>
            <li className="-mt-2 flex">
              <p className="ml-2 mr-1">•</p>
              <p>
                {" "}
                Diploma di formazione in Gastroenterologia Epatologia e
                Nutrizione pediatrica nel 2017.
              </p>
            </li>
          </ul>
        </div>
        <div className="mx-auto">
          <div className="text-center  text-[32px] text-white ">
            <i className="fas fa-pencil-alt fa-2x  bg-[#28a745] p-5 rounded-[50%] "></i>
          </div>
          <p className="leading-6 text-red font-[900] text-[20px] mt-10 italic ">
            Attività professionale:
          </p>
          <ul className="leading-7 text-[16px] sm:text-[18px] ">
            <li className="-mt-2 flex ">
              <p className="ml-2 mr-1">•</p>
              <p>
                {" "}
                Dal 1991 al 2010 Dirigente Medico presso il Presidio Ospedaliero
                Regina Margherita di Torino struttura complessa di
                Gastroenterologia Pediatrica. Responsabile della Endoscopia
                digestiva e della motilità gastro-intestinale.
              </p>
            </li>
            <li className="-mt-2 flex">
              <p className="ml-2 mr-1">•</p>
              <p> Dal 2010 specialista Pediatra presso ASL TO5</p>
            </li>
          </ul>
        </div>

        <div className="mx-auto">
          <div className="text-center  text-[32px] text-white ">
            <i className="fas fa-book-reader fa-2x  bg-[#28a745] p-5 rounded-[50%] "></i>
          </div>
          <p className="leading-6 text-red font-[900] text-[20px] mt-10 italic ">
            Attività di particolare interesse:
          </p>
          <ul className="leading-7 text-[16px] sm:text-[18px] ">
            <li className="-mt-2 flex ">
              <p className="ml-2 mr-1">•</p>
              <p> Reflusso gastro-esofageo e esofagite</p>
            </li>
            <li className="-mt-2 flex">
              <p className="ml-2 mr-1">•</p>
              <p> Gastrite da Helicobacter pylori e patologia gastrica</p>
            </li>
            <li className="-mt-2 flex">
              <p className="ml-2 mr-1">•</p>
              <p> Stipsi</p>
            </li>
            <li className="-mt-2 flex">
              <p className="ml-2 mr-1">•</p>
              <p>Colon irritabile e patologia funzionale</p>
            </li>
            <li className="-mt-2 flex">
              <p className="ml-2 mr-1">•</p>
              <p>
                {" "}
                Celiachia, intolleranza glutine e lattosio, malattie
                infiammatorie croniche intestinali
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
