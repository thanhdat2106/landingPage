"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import MapPinFishing from "@/components/svgs/mapPinFishing";
import MapPinCrosshair from "@/components/svgs/mapPinCrosshair";
import MapPinMountain from "@/components/svgs/mapPinMountain";

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

const MapActivity = ({
  locations,
  listCoordinates,
}: {
  locations: Location[];
  listCoordinates: { x: number; y: number }[];
}) => {
  const [selectedLocationId, setSelectedLocationId] = useState<string | null>(
    null
  );

  const getMarkerIcon = (activities: string[]) => {
    if (
      activities.includes("Online Classes") ||
      activities.includes("Cours en Ligne")
    ) {
      return <MapPinMountain />;
    } else if (
      activities.includes("Ethical Hunting") ||
      activities.includes("Chasse Ethique")
    ) {
      return <MapPinFishing />;
    } else {
      return <MapPinCrosshair />;
    }
  };
  return (
    <div className="relative w-full h-[600px]">
      <div className="relative w-full h-full rounded-lg shadow-lg overflow-hidden">
        <div
          style={{
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
            position: "relative",
          }}
          onClick={() => setSelectedLocationId(null)}
        >
          <Image
            src="/map.png"
            alt="Map"
            fill
            className="object-cover z-20"
            style={{
              position: "absolute",
              userSelect: "none",
            }}
            draggable="false"
          />
          {/* Markers positioned based on listCoordinates */}
          <div className="absolute inset-0" style={{ zIndex: 1000 }}>
            {locations.map((location, index) => {
              const coordinates =
                listCoordinates[index % listCoordinates.length];
              return (
                <Marker
                  key={`${location.id}-${index}`}
                  position={{
                    left: `${coordinates.x}%`,
                    top: `${coordinates.y}%`,
                  }}
                  location={location}
                  getMarkerIcon={getMarkerIcon}
                  isSelected={selectedLocationId === location?.name}
                  onSelect={(e) => {
                    e.stopPropagation();
                    setSelectedLocationId(location?.name);
                  }}
                  onClose={(e) => {
                    e.stopPropagation();
                    setSelectedLocationId(null);
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
      {/* Centered popup with backdrop */}
      {selectedLocationId &&
        locations.map((location) => {
          if (location.name === selectedLocationId) {
            return (
              <div
                key={location.name}
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[2000]"
                onClick={(e) => {
                  if (e.target === e.currentTarget) {
                    setSelectedLocationId(null);
                  }
                }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-[500px] relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  <h3 className="text-xl font-bold mb-4">{location.name}</h3>
                  <div className="relative w-full h-48 mb-4">
                    <Image
                      src="https://storage.googleapis.com/a1aa/image/aueXaoCHx7TzfEDPns9VzLsnpZKiWVZsf1bJzmPBqHUxIYOoA.jpg"
                      alt={location.name}
                      fill
                      className="object-cover rounded-lg text-brown text-md"
                    />
                  </div>
                  <p className="mb-2 text-sm text-brown">
                    Address: {location?.address}
                  </p>
                  <p className="mb-4 text-sm text-brown">
                    Tel: {location?.phone}
                  </p>
                  <div className="space-y-1 mb-4">
                    <p className="font-semibold">Activities:</p>
                    <ul className="list-disc pl-5">
                      {location.activities.map((activity, index) => (
                        <li key={index}>{activity}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col gap-2">
                    <a
                      href={location?.website}
                      target="_blank"
                      className="text-blue-500 hover:underline"
                    >
                      {location?.website}
                    </a>
                  </div>
                  <button
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
                    onClick={() => setSelectedLocationId(null)}
                  >
                    ✕
                  </button>
                </motion.div>
              </div>
            );
          }
          return null;
        })}
    </div>
  );
};

const Marker = ({
  position,
  location,
  getMarkerIcon,
  onSelect,
}: {
  position: { left: string; top: string };
  location: Location;
  getMarkerIcon: (activities: string[]) => React.ReactNode;
  isSelected: boolean;
  onSelect: (e: React.MouseEvent) => void;
  onClose: (e: React.MouseEvent) => void;
}) => {
  return (
    <div
      key={location.name}
      className="absolute cursor-pointer"
      style={{
        ...position,
        transform: "translate(-50%, -50%)",
      }}
      onClick={onSelect}
    >
      <div className="relative">{getMarkerIcon(location.activities)}</div>
    </div>
  );
};

export default MapActivity;
