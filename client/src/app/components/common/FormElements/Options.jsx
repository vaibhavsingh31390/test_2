/* eslint-disable react/prop-types */
import { forwardRef, useState } from "react";

export const OptionInput = forwardRef(
  ({ className, type, disabled, ...props }, ref) => {
    return (
      <div className="w-[80%]">
        <label className="" htmlFor={props.id}>
          {props.label || ""}
        </label>
        <div className="">
          <input
            ref={ref}
            type={type}
            disabled={disabled}
            className={`input ${className}`}
            {...props}
          />
        </div>
      </div>
    );
  }
);

OptionInput.displayName = "OptionInput";

export const ActionButton = forwardRef(
  ({ className, type, disabled = false, ...props }, ref) => {
    return (
      <>
        <div>
          {props.label ? (
            <label className="me-3" htmlFor={props.id}>
              {props.label || ""}
            </label>
          ) : (
            ""
          )}

          <button
            ref={ref}
            className={`px-3 py-2 ${className || ""}`}
            type={`${type}`}
            disabled={disabled}
            {...props}
          >
            {props.value}
          </button>
        </div>
      </>
    );
  }
);

ActionButton.displayName = "ActionButton";

function Options({ options, setInput }) {
  const [newOption, setNewOption] = useState("");

  const handleAddOption = () => {
    setInput((prev) => ({
      ...prev,
      options: [...prev.options, newOption],
    }));
    setNewOption("");
  };

  const handleRemoveOption = (index) => {
    setInput((prev) => ({
      ...prev,
      options: prev.options.filter((_, i) => i !== index),
    }));
  };

  return (
    <>
      <div className="options--add">
        <OptionInput
          label="Enter Option Value*"
          name=""
          type="text"
          value={newOption}
          placeholder="Enter an option"
          className="m-0 w-full"
          onChange={(e) => setNewOption(e.target.value)}
        />
        <ActionButton type="button" value="ADD" onClick={handleAddOption} />
      </div>
      <div className="mt-5">
        {options.map((data, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "8px",
            }}
          >
            <OptionInput type="text" value={data} className="m-0" readOnly />
            <ActionButton
              type="button"
              value="Remove"
              onClick={() => handleRemoveOption(index)}
              className="ms-4"
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Options;
