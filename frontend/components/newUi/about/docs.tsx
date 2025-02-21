import Image from "next/image";

const AboutDocs = () => {
  return (
    <div className="bg-gray-200 py-5">
      <div className="relative max-w-7xl mx-auto px-5 h-full">
        <p className="text-center font-bold text-teal-500 text-xl md:text-2xl lg:text-3xl py-3">
          We take small change and make a big difference with it.
        </p>
        <p className="text-center text-sm md:text-base py-3">
          Faizan Global Relief Foundation (FGRF), a non-governmental
          organization, is dedicated to fostering community-led, holistic
          solutions for long-term impact at a global scale. The foundation
          engages in diverse initiatives such as Environmental Pollution
          Prevention, tree planting, food donations, Education and Advanced
          Technical Skills, Healthcare, and Training for Mentally and Physically
          Handicapped Children. Operating in emergency relief, hard-to-reach
          areas, and helping in disaster relief situations, FGRF functions as a
          comprehensive solutions ecosystem. The organization&#39;s multifaceted
          development approach is designed to empower communities and
          individuals, enabling self-reliance and sustainable progress.
        </p>
        <div className="py-5 md:py-8">
          <Image
            src={"/GalleryNew/41.jpg"}
            alt="about image"
            width={2000}
            height={2000}
            className="h-[200px] md:h-[400px] lg:h-[580px] w-full md:w-10/12 mx-auto"
          />
        </div>
        <p className=" text-sm md:text-base  text-center py-3">
          FGRF&#39;s approach to charity is straightforward and impactful within
          Sharia guidelines. Our method makes giving affordable and rewarding,
          enabling everyone to assist the less fortunate by donating just a few
          pennies daily.
        </p>
      </div>
    </div>
  );
};

export default AboutDocs;
