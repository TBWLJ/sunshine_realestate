import React, { Fragment } from "react";
import PurposeItem from "../Data/PurposeItem";

import { HiOutlineHome } from "react-icons/hi";
import { FiKey } from "react-icons/fi";
import { FaHandshake } from "react-icons/fa";

const Purpose = () => {
  const purposeData = [
    {
      id: "p1",
      icon: <HiOutlineHome />,
      title: "Buy A Home",
      description: "Find Your Perfect Home Today.",
    },
    {
      id: "p2",
      icon: <FiKey />,
      title: "Rent A Home",
      description: "Your Next Home Is Just a Click Away.",
    },
    {
      id: "p3",
      icon: <FaHandshake />,
      title: "Sell A Home",
      description: "Browse through thousands of listing including houses.",
    },
  ];

  const mappedList = purposeData.map((purpose) => {
    return (
      <PurposeItem
        key={purpose.id}
        id={purpose.id}
        icon={purpose.icon}
        title={purpose.title}
        description={purpose.description}
      />
    );
  });

  return (
    <Fragment>
      <section className="mx-auto bg-silverLite px-10 md:px-16 lg:px-20 py-20 pt-20 md:py-16">
        <div className="px-auto lg:px-32">
          <h1 className="font-Poppins font-bold text-3xl text-center mb-4">
            Our Main <span className="text-blue">Focus</span>
          </h1>
          <p className="text-center text-ash">
            Provide properties on-the-go, anytime, anywhere
            also save time and effort with our streamlined search process.
          </p>
        </div>
        <ul className="flex flex-col lg:flex-row my-6">{mappedList}</ul>
      </section>
    </Fragment>
  );
};

export default Purpose;
