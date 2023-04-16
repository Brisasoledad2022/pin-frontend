import useWindowInfo from "../../hooks/useWindowInfo";
import React, { useState } from "react";
import image1 from "../../assets/wedding1.jpg";
import image2 from "../../assets/traguitopinkrm2.jpg";
import image3 from "../../assets/breakfast8RM.jpg";
import {
  UilArrowCircleLeft,
  UilArrowCircleRight,
} from "@iconscout/react-unicons";

export default function Products() {
  const { mobileDesign } = useWindowInfo();
  const data = [
    {
      image: image1,
      title: "Wedding Reception",
      subTitle: "Service",
      content: "Receptions/ Floral arrangement/catering.",
    },
    {
      image: image2,
      title: "Fine Cocktails",
      subTitle: "Products",
      content: "Cocktail display & Tasting.",
    },
    {
      image: image3,
      title: "Bruch & Breakfast",
      subTitle: "Service/Products",
      content: "Bruch and breakfast display & catering.",
    },
  ];

  const [step, setStep] = useState(0);

  const prevStep = () => {
    if (step === 0) {
      setStep(data.length - 1);
    } else {
      setStep((step) => step - 1);
    }
  };

  const nextStep = () => {
    if (step === data.length - 1) {
      setStep(0);
    } else {
      setStep((step) => step + 1);
    }
  };

  return (
    <div
      id="Products"
      className={`d-flex w-100 ${
        mobileDesign ? "vh-40" : "vh-100"
      } position-relative`}
    >
      {!mobileDesign && (
        <>
          <div className="col-8 bg-white h-100"></div>
          <div className="col-4 bg-orange h-100"></div>
        </>
      )}
      <div
        className={`${
          mobileDesign
            ? "w-100 h-100 position-relative"
            : "vw-75 vh-75 position-absolute top-50 start-50 translate-middle"
        }`}
        style={{
          backgroundImage: `url(${data[step].image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          style={{ backdropFilter: "blur(8px)" }}
          className="d-flex flex-column justify-content-center align-items-start p-5 position-absolute bottom-0 end-0 w-50"
        >
          {!mobileDesign && (
            <>
              <p className="m-0 fw-bold">{data[step].subTitle}</p>
              <h1 className="mb-4 text-black fw-bold fs-1">
                {data[step].title}
              </h1>
              <p className="text-orange neon fw-bold">{data[step].content}</p>
            </>
          )}

          <div className="d-flex justify-content-end align-items-center w-100">
            <UilArrowCircleLeft
              className="cursor-pointer"
              color="#222"
              size={35}
              onClick={() => prevStep()}
            />
            <UilArrowCircleRight
              className="cursor-pointer"
              color="#222"
              size={35}
              onClick={() => nextStep()}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
