import { Footer } from "@/components/Footer";
import Hero from "@/components/Hero";
import { Marketing } from "@/components/Marketing";
import Navbar from "@/components/Navbar";
import Productivity from "@/components/Productivity";
import { ProjectManag } from "@/components/ProjectManag";
import Team from "@/components/Team";
import WorkManagementUi from "@/components/WorkManagementUi";
import Image from "next/image";

export default function Home() {
  return (
    <div>
     <Navbar/>
     <Hero/>
     <WorkManagementUi/>
     <Productivity/>
     <Marketing/>
     <Team/>
     <ProjectManag/>
     <Footer/>
    </div>
  );
}
