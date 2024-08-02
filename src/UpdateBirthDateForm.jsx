import { useForm } from "react-hook-form";
import Button from "./Button";
import Input from "./Input";
import { isExists, isPast } from "date-fns";
import { useState } from "react";

function UpdateBirthForm({ onSetBirthDate }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isValidDate, setIsValidDate] = useState(true);

  function onSubmit({ day, month, year }) {
    const isValid =
      isExists(Number(year), Number(month) - 1, Number(day)) &&
      isPast(new Date(Number(year), Number(month) - 1, Number(day)));

    if (isValid) {
      onSetBirthDate(new Date(Number(year), Number(month) - 1, Number(day)));

      setIsValidDate(true);
    } else setIsValidDate(false);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-between md:max-w-[70%]">
        <Input
          fieldName="day"
          placeholder="DD"
          register={register}
          errors={errors}
          isValidDate={isValidDate}
        />
        <Input
          fieldName="month"
          placeholder="MM"
          register={register}
          errors={errors}
          isValidDate={isValidDate}
        />
        <Input
          fieldName="year"
          placeholder="YYYY"
          register={register}
          errors={errors}
          isValidDate={isValidDate}
        />
      </div>

      <div className="relative my-16 flex items-center">
        <div className="absolute h-[2px] w-full bg-neutral-off-white"></div>
        <Button />
      </div>
    </form>
  );
}

export default UpdateBirthForm;
