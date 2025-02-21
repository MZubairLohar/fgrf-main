import Image from "next/image";
import Link from "next/link";

import SliderSectionDisaster from "./slider";

const DisasterDocs = () => {
  return (
    <div className="py-5 md:py-16 px-4 xl:px-0">
      <SliderSectionDisaster />

      <p className="capitalize text-sm md:text-lg text-center py-3 pt-5 font-semibold text-gray-900">
        Our extensive reach and robust infrastructure, we ensure no one is left
        behind in times of crisis.
      </p>
      <p className="capitalize text-sm md:text-lg text-center py-3 font-semibold text-gray-900">
        Our dedicated team stands ready to spring into action, leveraging the
        power of Dawat-e-Islami&#39;s vast follower base to provide immediate
        aid and relief wherever it&#39;s needed most. From natural disasters to
        humanitarian emergencies, we are equipped to handle any challenge with
        efficiency and compassion.
      </p>
      <p className="capitalize text-sm md:text-lg text-center py-5 font-semibold text-gray-900">
        Through our website, you can stay updated on our latest relief efforts,
        learn about our proactive approach to disaster management, and discover
        how you can support our mission to make a difference in the lives of
        those affected by adversity.
      </p>
      <p className="capitalize text-sm md:text-lg text-center py-5 font-semibold text-gray-900">
        Join us in our journey to serve humanity and build a better world.
        Together, we can make a meaningful impact and spread hope in times of
        need. Explore FGRF today and be a part of our global movement for
        change.&quot;
      </p>
      {/* <div className="flex flex-col justify-center items-center pt-4 md:pt-10 pb-8">
        <Link
          href={"/"}
          className="px-10 md:px-16 lg:px-24 py-3 bg-teal-500 font-bold lg:text-sm md:text-lg text-white rounded-lg"
        >
          DONATE NOW
        </Link>
      </div> */}
    </div>
  );
};
export default DisasterDocs;
