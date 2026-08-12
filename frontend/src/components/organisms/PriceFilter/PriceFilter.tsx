import React, { useState } from "react";
import RangeSlider from "../../atoms/RangeSlider";
import Checkbox from "../../atoms/Checkbox";
import Button from "../../atoms/Button";
import { FiFilter } from "react-icons/fi";
import "./PriceFilter.css";

export interface FilterOption {
  id: string;
  label: string;
  count?: number;
}

export interface PriceFilterProps {
  title?: string;
  minPrice: number;
  maxPrice: number;
  colors?: FilterOption[];
  conditions?: FilterOption[];
  onFilterSubmit?: (data: {
    minPrice: number;
    maxPrice: number;
    selectedColors: string[];
    selectedConditions: string[];
  }) => void;
  className?: string;
}

const PriceFilter: React.FC<PriceFilterProps> = ({
  title = "Fill by price",
  minPrice,
  maxPrice,
  colors = [],
  conditions = [],
  onFilterSubmit,
  className = "",
}) => {
  const [rangeValues, setRangeValues] = useState({
    low: minPrice,
    high: maxPrice,
  });
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);

  const handleSliderChange = (low: number, high: number) => {
    setRangeValues({ low, high });
  };

  const handleCheckboxToggle = (
    id: string,
    list: string[],
    setList: React.Dispatch<React.SetStateAction<string[]>>,
  ) => {
    if (list.includes(id)) {
      setList(list.filter((item) => item !== id));
    } else {
      setList([...list, id]);
    }
  };

  const handleSubmit = () => {
    onFilterSubmit?.({
      minPrice: rangeValues.low,
      maxPrice: rangeValues.high,
      selectedColors,
      selectedConditions,
    });
  };

  return (
    <div className={`price-filter ${className}`.trim()}>
      <div className="price-filter__header">
        <h3 className="price-filter__title">{title}</h3>
        <div className="price-filter__divider" />
      </div>

      <div className="price-filter__section">
        <RangeSlider
          min={minPrice}
          max={maxPrice}
          step={10}
          valueLow={rangeValues.low}
          valueHigh={rangeValues.high}
          onChange={handleSliderChange}
        />
      </div>

      {colors.length > 0 && (
        <div className="price-filter__group">
          <h4 className="price-filter__group-title">Color</h4>
          <div className="price-filter__checkboxes">
            {colors.map((color) => (
              <Checkbox
                key={color.id}
                id={`color-${color.id}`}
                label={color.label}
                count={color.count}
                isChecked={selectedColors.includes(color.id)}
                onChange={() =>
                  handleCheckboxToggle(
                    color.id,
                    selectedColors,
                    setSelectedColors,
                  )
                }
              />
            ))}
          </div>
        </div>
      )}

      {conditions.length > 0 && (
        <div className="price-filter__group">
          <h4 className="price-filter__group-title">Item Condition</h4>
          <div className="price-filter__checkboxes">
            {conditions.map((condition) => (
              <Checkbox
                key={condition.id}
                id={`condition-${condition.id}`}
                label={condition.label}
                count={condition.count}
                isChecked={selectedConditions.includes(condition.id)}
                onChange={() =>
                  handleCheckboxToggle(
                    condition.id,
                    selectedConditions,
                    setSelectedConditions,
                  )
                }
              />
            ))}
          </div>
        </div>
      )}

      <div className="price-filter__action">
        <Button
          variant="primary"
          size="md"
          onClick={handleSubmit}
          className="price-filter__button"
        >
          <FiFilter className="price-filter__button-icon" />
          Filter
        </Button>
      </div>
    </div>
  );
};

export default PriceFilter;
