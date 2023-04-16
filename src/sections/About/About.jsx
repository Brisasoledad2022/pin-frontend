import useWindowInfo from "../../hooks/useWindowInfo";
import React from "react";

export default function About() {
  const {mobileDesign} = useWindowInfo()  
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center w-100 p-5 mt-4 position-relative"
      id="About"
    >
      <div className="d-flex flex-column align-items-start font-poppins mb-5 w-50">
        <h1 className="m-0 fw-bold text-black">The Bloom</h1>
        <h1 className="m-0 fw-bold text-orange neon">-Drinks & Brunch-</h1>

      </div>
      <p className={`m-0 ${mobileDesign ? "w-100" : "w-50"} lh-lg text-gray-300 lh-1 text-justify`}>
      "The Bloom" is a luxurious bar that offers a unique and elegant experience to its patrons. The bar is adorned with beautiful flower arrangements that create a vibrant and inviting atmosphere. The menu features a range of exquisite cocktails and drinks that are expertly crafted by skilled mixologists. The staff are friendly and attentive, providing exceptional service to ensure that guests feel pampered and indulged. Whether you're looking for a sophisticated night out or a relaxing after-work drink, "The Bloom" is the perfect destination for anyone who appreciates fine decor, exquisite drinks, and exceptional service.
      </p>

      {/* Orange line on the left */}
      <div className={`bg-orange position-absolute start-0 h-80 vw-2 ${!mobileDesign && "d-none"}`}></div>
      {/* Orange line on the left */}
    </div>
  );
}


