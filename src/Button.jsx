function Button() {
  return (
    <button
      aria-label="calculate"
      className="absolute z-10 m-auto block w-16 rounded-full bg-primary-purple p-5 text-center hover:bg-neutral-off-black focus:outline-none focus:ring-2 focus:ring-primary-purple focus:ring-offset-2 focus:hover:ring-neutral-off-black max-md:left-1/2 max-md:-translate-x-1/2 max-md:transform md:right-0"
    >
      <svg
        className="w-full rounded-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 46 44"
      >
        <g
          fill="none"
          className="stroke-current text-neutral-white"
          strokeWidth="3"
        >
          <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
        </g>
      </svg>
    </button>
  );
}

export default Button;
