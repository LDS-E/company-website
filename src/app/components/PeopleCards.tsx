import Image from "next/image";

const PeopleCards = () => {
  const people = [
    {
      src: "/images/av01.jpg",
      alt: "Person 1",
      name: "John Doe",
      job: "Senior Developer",
    },
    {
      src: "/images/av02.jpg",
      alt: "Person 2",
      name: "Jane Smith",
      job: "Product Manager",
    },
    {
      src: "/images/av03.jpg",
      alt: "Person 3",
      name: "Chris Johnson",
      job: "UX Designer",
    },
    {
      src: "/images/av04.jpg",
      alt: "Person 4",
      name: "Sara White",
      job: "Frontend Developer",
    },
  ];

  return (
    <div className=" grid grid-cols-1 md:grid-cols-4 gap-8 mt-10">
      {people.map((person, index) => (
        <div
          key={index}
          className=" bg-white p-6 rounded-md shadow-lg transition-all hover:scale-105 hover:outline hover:outline-[#63c6ae]"
        >
          <div className=" overflow-hidden rounded-full mx-auto w-20 h-20">
            <Image
              src={person.src}
              alt={person.alt}
              width={80}
              height={80}
              className="w-full h-full object-cover transform transition-transform duration-300 hover:translate-y-[-50%]"
            />
          </div>
          <div className=" text-center pt-10">
            <h3 className=" text-[#737c85] text-xl font-normal">
              {person.name}
            </h3>
            <p className=" text-[#929da5] text-sm">{person.job}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PeopleCards;
