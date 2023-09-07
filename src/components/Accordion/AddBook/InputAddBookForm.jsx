import { InputBox, Label, Input } from "./InputAddBookForm.styled";

export default function InputAddBookForm({
  name,
  label,
  placeholder,
  onChange,
  children,
}) {
  return (
    <InputBox>
      <Label htmlFor={name}>{label}</Label>
      {children ? (
        children
      ) : (
        <Input
          id={name}
          name={name}
          type='text'
          placeholder={placeholder}
          onChange={onChange}
        />
      )}
    </InputBox>
  );
}
