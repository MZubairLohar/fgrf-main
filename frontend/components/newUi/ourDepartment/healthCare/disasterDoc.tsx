import Image from "next/image";
import Link from "next/link";
import SliderSectionHealth from "./slider";

const HealthCareDocs = () => {
  return (
    <div className="py-5 px-4 md:py-16 xl:px-0">
      <SliderSectionHealth />

      <p className="capitalize text-sm md:text-lg text-center pt-5  py-3 font-semibold text-gray-900">
        As part of our comprehensive disaster recovery efforts and outreach to
        rural communities, FGRF is dedicated to improving health outcomes for
        those in need. We organize medical camps in affected areas, offering
        free medical consultations and essential healthcare services.
      </p>

      <p className="capitalize text-sm md:text-lg text-center py-3 font-semibold text-gray-900">
        At these camps, individuals receive access to free medication, ensuring
        they have the necessary treatment to address their health concerns.
        Additionally, we arrange free clinical facilities, providing essential
        healthcare services to those who may not have access otherwise.
      </p>
      <p className="capitalize text-sm md:text-lg text-center py-3 pb-5 font-semibold text-gray-900">
        FGRF recognizes the importance of health in building resilient
        communities, and we remain committed to supporting individuals and
        families in their journey towards recovery and well-being.
      </p>
      {/* <div className="flex flex-col justify-center items-center pt-10 pb-20 gap-10">
        <Link
          href={"/"}
          className="px-10 md:px-16 lg:px-24 py-3 bg-teal-500 font-bold lg:text-lg text-white rounded-lg"
        >
          DONATE NOW
        </Link>
      </div> */}
    </div>
  );
};
export default HealthCareDocs;
