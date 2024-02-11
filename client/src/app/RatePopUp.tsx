import React from "react";
import ratePopUp from "../assets/images/icons/ratePopUp.svg";
import { RatePopUp as Container } from "./Temp.style";

const RatePopUp = () => {
  return (
    <Container>
      <img src={ratePopUp} alt="ratePopUp" />
      <p>
        Did you know that Walter White is not called that, but Bryan Cranston?
        Rate Braking Bad and give your honest opinion!
      </p>
      <button>Rate</button>
    </Container>
  );
};

export default RatePopUp;
