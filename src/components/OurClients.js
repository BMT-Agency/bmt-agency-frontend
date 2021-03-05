import React from "react"

import mercedes from "../images/clients/01_mercedesbenz.svg"
import matc from "../images/clients/05_matc.svg"
import ambrosia from "../images/clients/09_ambrosia.svg"
import rockford from "../images/clients/13_rockford.svg"
import scc from "../images/clients/17_SCC.svg"
import wendy from "../images/clients/02_wendys.svg"
import reskill from "../images/clients/06_reskill.svg"
import willis from "../images/clients/10_willis.svg"
import cep from "../images/clients/14_cep.svg"
import ds from "../images/clients/18_draftsmith.svg"
import iheart from "../images/clients/03_iheart.svg"
import wis from "../images/clients/07_universityofwisconsin.svg"
import iconic from "../images/clients/11_iconicenergy.svg"
import wwbic from "../images/clients/15_WWBIC.svg"
import kbs from "../images/clients/19_kbs.svg"
import wacker from "../images/clients/04_wackerneuson.svg"
import tenderness from "../images/clients/08_tenderness.svg"
import viking from "../images/clients/21_vikingcommunication.svg"
import donut from "../images/clients/16_donutmonster.svg"
import bistro from "../images/clients/22_bistroOntheglen.svg"

export default function OurClients() {
  return (
    <>
      <div className="">
        <p className="text-primary text-6xl mt-32 ml-4 mb-4 md:text-   ">
          our clients
        </p>
      </div>

      <div className="grid grid-cols-4 p-1 md:grid grid-cols-4 md:p-20 md:ml-96 ">
        <div className=" ">
          <img src={mercedes} alt="client" className="mb-12" />
          <img src={matc} alt="client" className="mb-12" />
          <img src={ambrosia} alt="client" className="mb-12" />
          <img src={rockford} alt="client" className="mb-12" />
          <img src={scc} alt="client" className="mb-12" />
        </div>
        <div className="">
          <img src={wendy} alt="client" alt="client" className="mb-12" />
          <img src={reskill} alt="client" alt="client" className="mb-12" />
          <img src={willis} alt="client" alt="client" className="mb-12" />
          <img src={cep} alt="client" alt="client" className="mb-12" />
          <img src={ds} alt="client" alt="client" className="mb-12" />
        </div>

        <div className="">
          <img src={iheart} alt="client" className="mb-12" />
          <img src={wis} alt="client" className="mb-12" />
          <img src={iconic} alt="client" className="mb-12" />
          <img src={wwbic} alt="client" className="mb-12 w-20" />
          <img src={kbs} alt="client" className="mb-12" />
        </div>

        <div className="">
          <div className="">
            <img src={wacker} alt="client" className="mb-12" />
            <img src={tenderness} alt="client" className="mb-12" />
            <img src={viking} alt="client" className="mb-12" />
            <img src={donut} alt="client" className="mb-12" />
            <img src={bistro} alt="client" className="mb-12" />
          </div>
        </div>
      </div>
    </>
  )
}
