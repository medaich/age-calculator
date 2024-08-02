function formatDigits(num) {
  return num.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
}

function Age({ age }) {
  if (!age)
    return (
      <div className="mt-8">
        <blockquote className="text-5xl font-extrabold italic sm:text-[4rem]">
          <span className="text-primary-purple">--</span> years <br />
          <span className="text-primary-purple">--</span> months <br />
          <span className="text-primary-purple">--</span> days
        </blockquote>
      </div>
    );

  const { days, months, years } = age;

  return (
    <div className="mt-8">
      <blockquote className="text-5xl font-extrabold italic transition-all duration-300 sm:text-[4rem]">
        <span className="text-primary-purple">
          {!years ? "00" : formatDigits(years)}
        </span>
        {years === 1 ? " year" : " years"}
        <br />
        <span className="text-primary-purple">
          {!months ? "00" : formatDigits(months)}
        </span>
        {months === 1 ? " month" : " months"}
        <br />
        <span className="text-primary-purple">
          {!days ? "00" : formatDigits(days)}
        </span>
        {days === 1 ? " day" : " days"}
      </blockquote>
    </div>
  );
}

export default Age;
