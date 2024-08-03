import React from "react";
import AnimatedNumber from "./AnimatedNumber";
import EmptyAge from "./EmptyAge";

function Age({ age }) {
  if (!age) return <EmptyAge />;

  const { days, months, years } = age;

  return (
    <div className="mt-8">
      <blockquote className="text-5xl font-extrabold italic transition-all duration-300 sm:text-[4rem]">
        <span className="text-primary-purple">
          <AnimatedNumber value={years || 0} />
        </span>
        {years === 1 ? " year" : " years"}
        <br />
        <span className="text-primary-purple">
          <AnimatedNumber value={months || 0} />
        </span>
        {months === 1 ? " month" : " months"}
        <br />
        <span className="text-primary-purple">
          <AnimatedNumber value={days || 0} />
        </span>
        {days === 1 ? " day" : " days"}
      </blockquote>
    </div>
  );
}

export default Age;
