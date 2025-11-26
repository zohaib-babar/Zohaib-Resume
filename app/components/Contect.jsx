// export default function Contect() {
//   return (
//     <section>
//       <h2 className="text-gray-800 text-3xl text-center font-semibold mb-1">
//         Contect me
//       </h2>
//       <p className="text-black text-center">
//         Please contect me directly at zohaibbabar3388@gmail.com or through this
//         <br></br> form.
//       </p>
//       <div className=" text-gray-800 grid gap text-center items-center p-5">
//         <label htmlFor="email">Email Address:</label>
//         <input
//           className="text-gray-900 p-3 bg-gray-500 border-1  h-[40px] w-[300px] items-center justify-center"
//           type="email"
//           id="email"
//           placeholder="Enter your email"
//         />
//         <input className="border-1 p-3" type="text" placeholder="Your message" />
//       </div>
//     </section>
//   );
// };

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
          className="text-blue-400 underline"
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
          className="bg-gray-700 text-white py-2 px-4 rounded-full flex items-center justify-center gap-2 hover:bg-gray-600 transition"
        >
          Submit ✈️
        </button>
      </form>
    </section>
  );
}
