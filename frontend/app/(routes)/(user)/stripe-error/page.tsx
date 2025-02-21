import Link from "next/link";

export default function Error() {
  return (
    <div className="bg-gray-200">
      <div
        className="max-w-5xl mx-auto flex justify-center items-center"
        style={{
          height: `calc(100vh - 20vh)`,
        }}
      >
        <div>
          <h2 className="text-red-500 font-bold text-xl md:text-3xl py-10 px-5 text-center">
            Sorry! Your stripe Payment has Failed.
          </h2>
          <div className="flex gap-5 justify-center">
            <Link
              href={"/"}
              className="relative overflow-hidden group bg-sky-800 py-3 px-4 text-white rounded-xl hover:shadow-2xl"
            >
              {" "}
              <span className="absolute w-40 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-16 bg-gray-100 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span className="relative group-hover:text-teal-500">Home</span>
            </Link>
            <Link
              href={"/donation"}
              className="relative overflow-hidden group bg-teal-500 py-3 text-white px-4 rounded-xl hover:shadow-2xl"
            >
              {" "}
              <span className="absolute w-40 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-16 bg-gray-100 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span className="relative group-hover:text-teal-500">
                Donation
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
