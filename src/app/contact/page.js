function page() {
  return (
    <div className="px-16">
      <div
        className="flex h-[40vh] items-center rounded-3xl bg-cover bg-center bg-no-repeat pl-16"
        style={{ backgroundImage: "url('/contact_2.png')" }}
      >
        <h2 className="w-[40%] text-[52px] font-semibold">
          Get in Touch <br /> <span className="text-[#FFA319]">with</span> Us
        </h2>
      </div>

      <div className="mt-16 flex gap-16">
        <div
          className="h-[50vh] w-[45%] rounded-3xl bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/contact_1.png')" }}
        ></div>

        <div className="w-[55%]">
          <p className="mb-8 text-xl text-gray-500">
            Connect with culinary excellence effortlessly. Whether you have a
            burning question about a recipe or want to share your cooking
            triumphs, our dedicated team is just a message away for our
            food-loving community.
          </p>
          <div className="flex justify-between">
            <div className="flex flex-col rounded-3xl bg-gray-100 px-6 py-8">
              <p className="text-xl text-gray-300">phone</p>
              <span>123-456-789</span>
            </div>
            <div className="flex flex-col">
              <p>email</p>
              <span>example@mail.com</span>
            </div>
          </div>

          <div>
            <p>address</p>
            <span>123 Main Street, City, Country</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
