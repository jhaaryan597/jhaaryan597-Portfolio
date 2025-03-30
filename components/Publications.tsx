import React from "react";
import Image from "next/image";
import { PublicationData } from "@/data";
import { Button } from "./ui/MovingBorders";

const Publication = () => {
  return (
    <div className="py-20 w-full px-4 sm:px-6 md:px-10" id="Publication">
      <h1 className="heading text-center text-2xl md:text-3xl lg:text-4xl font-bold">
        My first Publication on <span className="text-purple"> Leveraging Pathfinding Algorithms for Efficient Metro Routing and Scheduling</span>
      </h1>

      <div className="w-full mt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10">
        {PublicationData.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem * 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex flex-col items-center p-4 sm:p-5 md:p-6 lg:p-10 gap-3">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="w-24 sm:w-80 md:w-36 lg:w-full h-auto object-contain"
              />
              <div className="text-center">
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-white-100 mt-2 text-sm sm:text-base font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Publication;