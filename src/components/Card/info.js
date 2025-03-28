function Info({ icon: Icon, title, text }) {
  return (
    <div className="flex items-center gap-4">
      <div className="rounded-full bg-orange-100/50 p-3">
        <Icon className="h-6 w-6 text-[#FFA319]" />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-gray-500">{title}</h3>
        <p className="text-xl font-semibold">{text}</p>
      </div>
    </div>
  );
}

export default Info;
