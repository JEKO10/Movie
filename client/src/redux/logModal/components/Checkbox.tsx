import React from "react";
import { FiCheck } from "react-icons/fi";

type CheckboxProps = {
  label: string;
  checked: boolean;
  onChange: () => void;
};

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
  return (
    <label>
      <input type="checkbox" checked={checked} onChange={onChange} />
      {checked && <FiCheck />}
      <span>{label}</span>
    </label>
  );
};

export default Checkbox;
