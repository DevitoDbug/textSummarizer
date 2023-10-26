import React from "react";
import Service from "./Service";
import image1 from "../../public/onlinePayment.png";
import image2 from "../../public/swimming.png";
import image3 from "../../public/restaurant.png";
import image4 from "../../public/creditCard.png";
import image5 from "../../public/house.png";

const Services = () => {
  const services = [
    {
      id: 1,
      name: "Easy Booking",
      logoURL: image1,
      description: "Lorem, ipsum dolor sit amet consectetur elit.",
    },
    {
      id: 2,
      name: "Swimming Pool",
      logoURL: image2,
      description: "Lorem, ipsum dolor sit amet consectetur elit.",
    },
    {
      id: 3,
      name: "Restaurant Home",
      logoURL: image3,
      description: "Lorem, ipsum dolor sit amet consectetur elit.",
    },
    {
      id: 4,
      name: "Mobile Payment",
      logoURL: image1,
      description: "Lorem, ipsum dolor sit amet consectetur elit.",
    },
    {
      id: 5,
      logoURL: image4,
      name: "Bank Card Services",
      description: "Lorem, ipsum dolor sit amet consectetur elit.",
    },
    {
      id: 6,
      logoURL: image5,
      name: "Best Home",
      description: "Lorem, ipsum dolor sit amet consectetur elit.",
    },
  ];

  return (
    <div id="Services" className="text-center flex flex-col  pb-9 ">
      <h1 className="text-gray-800 text-xl p-4 font-bold leading-tight">
        What Services, we give
      </h1>
      <div className="flex flex-wrap gap-6 justify-center items-center p-3">
        {services.map((service) => (
          <Service service={service} key={service.id} />
        ))}
      </div>
    </div>
  );
};

export default Services;
