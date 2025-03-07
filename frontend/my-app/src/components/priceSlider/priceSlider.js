import "./priceSlider.scss";
import React, { useEffect, useRef, useState } from 'react';
import noUiSlider from 'nouislider';
import '../../style/nouislider.scss';

const PriceSlider = () => {
  const sliderRef = useRef(null);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(1000);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      sliderRef.current = noUiSlider.create(containerRef.current, {
        start: [minValue, maxValue],
        connect: true,
        range: {
          min: 0,
          max: 100000
        },
        format: {
          to: value => Math.round(value),
          from: value => Number(value)
        }
      });

      sliderRef.current.on('update', (values) => {
        const [min, max] = values.map(Number);
        setMinValue(min);
        setMaxValue(max);
      });
    }

    return () => {
      if (sliderRef.current) {
        sliderRef.current.destroy();
      }
    };
  }, []);

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxValue);
    setMinValue(value);
    sliderRef.current.set([value, null]);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minValue);
    setMaxValue(value);
    sliderRef.current.set([null, value]);
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="silder">
          <div className="flex flex--column"></div>
          <div className="flex flex--h-center flex--v-center">
            <input
              type="number"
              className="slider__field"
              value={minValue}
              onChange={handleMinChange}
              placeholder="от"
            />
            <span className="slider__separator">-</span>
            <input
              type="number"
              className="slider__field"
              value={maxValue}
              onChange={handleMaxChange}
              placeholder="до"
            />
          </div>
          <div className="slider__self" ref={containerRef}></div>
        </div>
      </div>
    </div>
  );
};

export default PriceSlider;