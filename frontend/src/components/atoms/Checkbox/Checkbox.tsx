import React from "react";
import "./Checkbox.css";

export interface CheckboxProps {
  id?: string;
  label?: string;
  count?: number;
  isChecked?: boolean;
  isDefaultChecked?: boolean;
  isDisabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Checkbox = ({
  id,
  label,
  count,
  isChecked,
  isDefaultChecked,
  isDisabled = false,
  onChange,
  className = "",
}: CheckboxProps) => {
  return (
    <label
      htmlFor={id}
      className={`checkbox-wrapper ${isDisabled ? "checkbox-wrapper--disabled" : ""} ${className}`.trim()}
    >
      <input
        type="checkbox"
        id={generatedId}
        checked={isChecked}
        defaultChecked={isDefaultChecked}
        disabled={isDisabled}
        onChange={onChange}
        className="checkbox-input"
      />
      <span className="checkbox-custom" />

      {(label || count !== undefined) && (
        <span className="checkbox-label">
          {label}
          {count !== undefined && (
            <span className="checkbox-count"> ({count})</span>
          )}
        </span>
      )}
    </label>
  );
};

export default Checkbox;
