import React from "react";
import { pricing } from "../constants";
import Button from "./Button";
import { check } from "../assets";
const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-10 even:!pb-16 even:border-n-3 odd:py-10  [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-6"
        >
          <h4 className="h4 mb-4">{item.title}</h4>
          <p className="body-2 text-n-1/50 min-h-[4rem] mb-3">
            {item.description}
          </p>
          <div className="flex gap-2 items-center justify-center h-[5.5rem] mb-6">
            {item.price && (
              <>
                <div className="h3">$</div>
                <div className="text-[3.5rem] leading-none font-bold">
                  {item.price}
                </div>
              </>
            )}
          </div>
          <Button
            className="w-full mb-6"
            href={item.price ? "/pricing" : "mailto:aidamirzapour1@gmail.com"}
            white={!!item.price}
          >
            {item.price ? "Get Started" : "Contact us"}
          </Button>
          <ul>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-2 py-5 border-t border-t-n-6"
              >
                <img src={check} width={24} height={24} alt="check" />
                <p className="body-2">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
