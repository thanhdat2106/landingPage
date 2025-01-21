"use client";
import Header from "./home/Header";
import dynamic from "next/dynamic";

const TitreBloc1 = dynamic(() => import("./home/TitreBloc1"), { ssr: false });
const TitreBloc2 = dynamic(() => import("./home/TitreBloc2"), { ssr: false });
const TitreBloc3 = dynamic(() => import("./home/TitreBloc3"), { ssr: false });
const TitreBloc4 = dynamic(() => import("./home/TitreBloc4"), { ssr: false });
const TitreBloc5 = dynamic(() => import("./home/TitreBloc5"), { ssr: false });
const TitreBloc6 = dynamic(() => import("./home/TitreBloc6"), { ssr: false });
const Footer = dynamic(() => import("./home/Footer"), { ssr: false });
const Actitvity = dynamic(() => import("./home/Actitvity"), { ssr: false });
import "@/i18n";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center">
        <TitreBloc1 />
        <TitreBloc2 />
        <Actitvity />
        <TitreBloc3 />
        <TitreBloc4 />
        <TitreBloc5 />
        <TitreBloc6 />
      </div>
      <Footer />
    </div>
  );
}
