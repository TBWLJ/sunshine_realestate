import React, { Fragment } from "react";

import FAQsItem from "../Data/FAQsItem";

const faqsData = [
  {
    id: "q1",
    que: "Where is Kwolity Groups",
    ans: "Kwolity Group is an Nigerian Real Estate company located in the northern part of Ogbomoso. Isale general",
  },
  {
    id: "q2",
    que: "How can I meet Kwolity Group for consultation",
    ans: "At Kwolity Groups, We are open at our office 9am - 5pm daily. You can also get to us via all our social media platforms. We offer 24hours services on all our platforms.",
  },
  {
    id: "q3",
    que: "If I will need to purchase a land, do you have the service?",
    ans: "At Kwolity Groups, We are specialized in selling of properties including lands, houses and a host of others",
  },
];

const FAQs = () => {
  const mappedList = faqsData.map((item) => (
    <FAQsItem key={item.id} id={item.id} que={item.que} ans={item.ans} />
  ));

  return (
    <Fragment>
      <section className="mx-auto bg-silver px-10 md:px-16 lg:px-20 py-20 pt-20 md:py-16">
        <h1 className="font-Poppins font-bold text-3xl text-center mb-10">
          Frequently Asked <span className="text-blue">Questions</span>
        </h1>
        <div className="lg:mx-28 mx-0">{mappedList}</div>
      </section>
    </Fragment>
  );
};

export default FAQs;
