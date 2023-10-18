import { forwardRef } from "react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface UsernameInputType {
  className?: string;
  placeholder?: string;
  focus: () => void;
}

const UsernameInput = forwardRef<HTMLInputElement, UsernameInputType>(
  ({ focus }, ref) => {
    const [value, setValue] = useState<string>("");

    const changeValue = (e: React.ChangeEvent<HTMLInputElement>) =>
      setValue(e.target.value?.replace(/[^a-zA-Z0-9_\s]/g, ""));

    return (
      <div className="relative">
        <p
          onClick={focus}
          className="absolute dark:text-[#fff] text-sm top-[10px] left-3 select-none"
        >
          scribblify.me/@
        </p>
        <Input
          onChange={changeValue}
          onInput={changeValue}
          value={value}
          required
          ref={ref}
          className="mt-3 pl-[110px]"
          placeholder="username"
          maxLength={30}
        />
      </div>
    );
  }
);

export default UsernameInput;
