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
      <div>
        <p className="font-bold text-pink-700 text-2xl md:text-8xl leading-tight m-24 ">
          Our Clients
        </p>
      </div>

      <div className="grid grid-rows-1 grid-flow-col gap-1 ml-40">
        <div className="row-span-3">
          <img src={mercedes} className="mb-12" />
          <img src={matc} className="mb-12" />
          <img src={ambrosia} className="mb-12" />
          <img src={rockford} className="mb-12" />
          <img src={scc} className="mb-12" />
        </div>

        <div className="row-span-3 mb-12 container">
          <img src={wendy} className="mb-12" />
          <img src={reskill} className="mb-12" />
          <img src={willis} className="mb-12" />
          <img src={cep} className="mb-12" />
          <img src={ds} className="mb-12" />
        </div>

        <div className="row-span-3">
          <img src={iheart} className="mb-12" />
          <img src={wis} className="mb-12" />
          <img src={iconic} className="mb-12" />
          <img src={wwbic} className="mb-12 w-20" />
          <img src={kbs} className="mb-12" />
        </div>

        <div>
          <img src={wacker} className="mb-12" />
          <img src={tenderness} className="mb-12" />
          <img src={viking} className="mb-12" />
          <img src={donut} className="mb-12" />
          <img src={bistro} className="mb-12" />
        </div>
      </div>
    </>
  )
}
