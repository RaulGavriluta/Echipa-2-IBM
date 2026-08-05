import { useState } from "react";
import RangeSlider from "../components/atoms/RangeSlider";

function Home() {
  const [low, setLow] = useState(500);
  const [high, setHigh] = useState(1000);

  return (
    <>
      <RangeSlider
        min={0}
        max={5000}
        step={100}
        valueLow={low}
        valueHigh={high}
        onChange={(l, h) => {
          setLow(l);
          setHigh(h);
        }}
      />
    </>
  );
}

export default Home;
