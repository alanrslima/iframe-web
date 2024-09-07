"use client";
import { useState } from "react";
import { SelectButton } from "../molecules";

export type SelectGroupButtonsProps = {
  options: { id: string; title: string; value?: string }[];
  defaultValue?: string;
};

export function SelectGroupButtons(props: SelectGroupButtonsProps) {
  const [value, setValue] = useState(props.defaultValue);

  return (
    <div className="flex flex-col gap-2">
      {props?.options.map((option) => (
        <SelectButton
          onClick={() => setValue(option.id)}
          key={option.id}
          selected={value === option.id}
        />
      ))}
    </div>
  );
}
