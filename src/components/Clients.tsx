import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import Image from "next/image";

function Clients() {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        Kind words from <span className="text-purple"> satisfied clients</span>
      </h1>

      {/* project cards */}
      <div className="flex flex-col items-center mt-20 max-lg:mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />

        <div className="flex flex-wrap  items-centre justify-center gap-4 md:gap-16  mt-10">
          {companies.map((company) => (
            <div key={company.id} className="flex md:max-w-60 max-w-32 gap2">
              <Image
                src={company.img}
                alt={company.name}
                width={50}
                height={30}
                className="md:w-10 w-5"
              />
              <Image
                src={company.nameImg}
                alt={company.name}
                width={50}
                height={30}
                className="md:w-24 w-20"
              />
            </div>
          ))}
        </div>
      </div>
      {/* ===project cards=== */}
    </div>
  );
}

export default Clients;
