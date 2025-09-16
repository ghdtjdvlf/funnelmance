import React from "react";
import { Header } from "@/components/Section/Header";

import { Section01 } from "@/components/Section/Section01";
import { Section02 } from "@/components/Section/Section02";
import { Section03 } from "@/components/Section/Section03";
import { Section04 } from "@/components/Section/Section04";


import { Sparkles } from "@/components/Section/Sparkles";
import { WobbleCard1 } from "@/components/Section/WobbleCard";



const App = () => (
   <>
      <Header />
     <Sparkles />
     <Section02 />
     <Section03 />
      <WobbleCard1 />
     <Section04 />

   </>
)

export default App
