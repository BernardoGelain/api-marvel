import { forwardRef } from "react";
import {
  ErrorMessageLabel,
  Input,
  InputContainer,
  InputLabel,
} from "./text-input-styles";

type Props = {
  label: string;
  name: string;
  width: string;
  height: string;
  errorMessage?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const TextInput = forwardRef(
  ({ label, name, width, height, errorMessage, ...props }: Props, ref) => {
    return (
      <InputContainer>
        <InputLabel>{label}</InputLabel>
        <Input
          ref={ref as any}
          css={{
            width,
            height,
            border: errorMessage ? "1px solid $primary" : "1px solid $gray",
          }}
          name={name}
          {...props}
        />
        {Boolean(errorMessage) && (
          <ErrorMessageLabel>{errorMessage}</ErrorMessageLabel>
        )}
      </InputContainer>
    );
  }
);

TextInput.displayName = "TextInput";
