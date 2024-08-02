function Input({ fieldName, placeholder, register, errors, isValidDate }) {
  return (
    <div className="max-w-[30%] space-y-4 font-bold">
      <label
        className="text-sm uppercase tracking-widest text-neutral-smokey-grey"
        htmlFor={fieldName}
      >
        {fieldName}
      </label>

      <input
        className="w-full rounded-lg p-4 text-xl uppercase ring-1 ring-neutral-off-white placeholder:text-neutral-smokey-grey focus:outline-none focus:ring-primary-purple sm:text-3xl"
        type="text"
        id={fieldName}
        placeholder={placeholder}
        {...register(fieldName, {
          required: "This field is required",
        })}
      />
      <p className="text-sm font-light text-primary-light-red">
        {errors?.[fieldName]?.message ??
          (!isValidDate && "Must be a valid date")}
      </p>
    </div>
  );
}

export default Input;
