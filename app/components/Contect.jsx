export default function Contact() {
  return (
    <section className="bg-[#0d1117] rounded-2xl py-16 px-4">
      <h2 className="text-white text-3xl text-center font-semibold mb-2">
        Contact Me
      </h2>

      <p className="text-gray-300 text-center mb-8">
        Please contact me directly at{" "}
        <a
          href="mailto:zohaibbabar3388@gmail.com"
          className=" hover:text-blue-600 underline"
        >
          zohaibbabar3388@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form className="max-w-md mx-auto flex flex-col gap-4">
        <input
          type="email"
          placeholder="Your email"
          className="bg-gray-700 text-white p-3 rounded-lg outline-none border border-gray-600 focus:border-blue-400 transition"
        />

        <textarea
          placeholder="Your message"
          className="bg-gray-700 text-white p-3 rounded-lg h-40 outline-none border border-gray-600 focus:border-blue-400 transition"
        ></textarea>

        <button
          type="submit"
          className="bg-gray-700 text-white py-2 px-4 rounded-full flex items-center justify-center gap-2 hover: transition"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
