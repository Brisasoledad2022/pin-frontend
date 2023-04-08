
import React, { useState } from "react";
import image1 from "../../assets/wedding1.jpg";
import image2 from "../../assets/traguitopinkrm2.jpg";
import image3 from "../../assets/breakfast8RM.jpg";
import {
  UilArrowCircleLeft,
  UilArrowCircleRight,
} from "@iconscout/react-unicons";

export default function Products() {
  const images = [image1, image2, image3];

  const [step, setStep] = useState(0);

  const prevStep = () => {
    if (step === 0) {
      setStep(images.length - 1);
    } else {
      setStep((step) => step - 1);
    }
  };

  const nextStep = () => {
    if (step === images.length - 1) {
      setStep(0);
    } else {
      setStep((step) => step + 1);
    }
  };

  return (
    <div className="d-flex w-100 vh-100 position-relative" id="Products">
      <div className="col-8 bg-white h-100"></div>
      <div className="col-4 bg-orange h-100"></div>
      <div
        className="position-absolute top-50 start-50 translate-middle vw-75 vh-75"
        style={{
          background: `transparent url(${images[step]}) 0% 0% no-repeat padding-box`,
        }}
      >
        <div style={{backdropFilter: 'blur(8px)'}} className="d-flex flex-column justify-content-center align-items-start p-5 position-absolute bottom-0 end-0 bg-transparent text-light w-50">
          <p className="m-0 fw-bold text-orange">Sed ut perspiciatis</p>
          <h1 className="mb-4 text-black">Nemo Enim {step}</h1>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam.
          </p>

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