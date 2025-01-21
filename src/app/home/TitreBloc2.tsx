"use client";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Title from "@/components/title";
import Mountain from "@/components/svgs/mountain";
import Fishing from "@/components/svgs/fishing";
import Crosshair from "@/components/svgs/crosshair";
import MapActivity from "./MapActivity";

type Location = {
  id: number;
  name: string;
  website?: string;
  address?: string;
  phone?: string;
  free_call?: string;
  fax?: string;
  email?: string;
  coordinates?: [number, number];
  activities: string[];
  marker_information?: string[];
};

const TitreBloc2 = () => {
  const { t } = useTranslation();
  const [selectedActivity, setSelectedActivity] = useState("hiking");

  const handleActivityClick = (activity: string) => {
    setSelectedActivity(activity);
  };

  const cartePoints = t("carte_point", { returnObjects: true }) as Location[];
  console.log(111, cartePoints);

  return (
    <div className="w-full p-8 relative bg-[#FFF6F4] flex justify-center items-center">
      <Image
        src="/backgroundmap.png"
        alt="Background"
        fill
        className="absolute inset-0 z-0 opacity-20"
      />
      <div className="max-w-[1240px] w-full relative z-10">
        <Title title={t("bloc_2.title")} className="mt-[60px] mb-4" />
        <div className="flex justify-center items-center flex-wrap mb-4 gap-2">
          <button
            className={` text-[#562C2C] font-semibold py-2 px-4 rounded-full border border-[#F2542D80] flex items-center space-x-2 ${
              selectedActivity === "hiking" ? "bg-orange text-white" : ""
            }`}
            onClick={() => handleActivityClick("hiking")}
          >
            <Mountain
              width={20}
              height={20}
              color={selectedActivity === "hiking" ? "#FFFFFF" : "#562C2C"}
            />
            <span className="text-sm">{t("bloc_2.cases.0")}</span>
          </button>
          <button
            className={`text-[#562C2C] font-semibold py-2 px-4 rounded-full border border-[#F2542D80] flex items-center space-x-2 ${
              selectedActivity === "fishing" ? "bg-orange text-white" : ""
            }`}
            onClick={() => handleActivityClick("fishing")}
          >
            <Fishing
              width={20}
              height={20}
              color={selectedActivity === "fishing" ? "#FFFFFF" : "#562C2C"}
            />
            <span className="text-sm">{t("bloc_2.cases.1")}</span>
          </button>
          <button
            className={` text-[#562C2C] font-semibold py-2 px-4 rounded-full border border-[#F2542D80] flex items-center space-x-2 ${
              selectedActivity === "hunting" ? "bg-orange text-white" : ""
            }`}
            onClick={() => handleActivityClick("hunting")}
          >
            <Crosshair
              width={20}
              height={20}
              color={selectedActivity === "hunting" ? "#FFFFFF" : "#562C2C"}
            />
            <span className="text-sm">{t("bloc_2.cases.2")}</span>
          </button>
        </div>
        <div className="flex justify-center">
          <div className="relative w-full h-[698px]">
            {cartePoints?.length > 0 && (
              <>
                {selectedActivity === "hiking" && (
                  <MapActivity
                    locations={cartePoints?.filter((point) =>
                      point.activities?.includes(
                        t("language") === "en"
                          ? "Online Classes"
                          : "Cours en Ligne"
                      )
                    )}
                    listCoordinates={[
                      {
                        x: 50,
                        y: 50,
                      },
                      {
                        x: 30,
                        y: 30,
                      },
                      {
                        x: 70,
                        y: 70,
                      },
                      {
                        x: 40,
                        y: 60,
                      },
                      {
                        x: 60,
                        y: 40,
                      },
                    ]}
                  />
                )}
                {selectedActivity === "fishing" && (
                  <MapActivity
                    locations={cartePoints?.filter((point) =>
                      point.activities?.includes(
                        t("language") === "en"
                          ? "Ethical Hunting"
                          : "Ateliers Pratiques"
                      )
                    )}
                    listCoordinates={[
                      {
                        x: 35,
                        y: 45,
                      },
                      {
                        x: 65,
                        y: 55,
                      },
                      {
                        x: 45,
                        y: 65,
                      },
                      {
                        x: 75,
                        y: 35,
                      },
                    ]}
                  />
                )}
                {selectedActivity === "hunting" && (
                  <MapActivity
                    locations={cartePoints?.filter((point) =>
                      point.activities?.includes(
                        t("language") === "en"
                          ? "Gastronomic Experiences"
                          : "Expériences Gastronomiques"
                      )
                    )}
                    listCoordinates={[
                      {
                        x: 25,
                        y: 35,
                      },
                      {
                        x: 55,
                        y: 45,
                      },
                      {
                        x: 35,
                        y: 55,
                      },
                      {
                        x: 65,
                        y: 25,
                      },
                    ]}
                  />
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitreBloc2;
