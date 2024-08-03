import { useState } from "react";
import Age from "./Age";
import UpdateBirthForm from "./UpdateBirthDateForm";
import { intervalToDuration } from "date-fns";

function Calculator() {
  const [birthDate, setBirthDate] = useState("");
  let age;

  const today = new Date();

  if (birthDate)
    age = intervalToDuration({
      start: birthDate,
      end: today,
    });

  return (
    <div className="mx-auto my-20 max-w-[375px] p-4 sm:max-w-[80%] md:max-w-[700px] lg:max-w-[1000px]">
      <main className="rounded-bl-3xl rounded-br-[30%] rounded-tl-3xl rounded-tr-3xl border bg-neutral-white px-8 py-14 shadow-sm sm:p-14">
        <h1 className="hidden">Calculator, Enter your birhdate</h1>
        <UpdateBirthForm onSetBirthDate={setBirthDate} />
        <Age age={age} />
      </main>
    </div>
  );
}

export default Calculator;
