import React from "react";
import { educationExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Education = () => {
  return (
    <div className="py-20 w-full" id="education">
      <h1 className="heading">
        My <span className="text-purple">Education</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-1 grid-cols-1 gap-10">
        {educationExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2 h-full">
              <div className="lg:ms-5 flex flex-col w-full">
                <div className="flex justify-between items-start">
                  <h1 className="text-start text-xl md:text-2xl font-bold">
                    {card.title}
                  </h1>
                </div>

                <p className="text-start text-gray-400 mt-1 font-semibold">
                  {card.location}
                </p>

                <p className="text-start text-gray-400 mt-1 font-semibold">
                  {card.date}
                </p>
                
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>

                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.coursework}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Education;
