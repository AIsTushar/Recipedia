function Step({ number, text }) {
  return (
    <div className="flex w-full gap-8 rounded-2xl bg-gray-100 px-8 py-10">
      <span className="text-4xl font-semibold text-[#FFA319]">0{number}</span>
      <p className="text-xl text-gray-500">{text}</p>
    </div>
  );
}

export default Step;
