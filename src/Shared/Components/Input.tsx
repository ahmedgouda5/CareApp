import { Button } from "../../components/ui/button";
import { Field } from "../../components/ui/field";
import { Input } from "../../components/ui/input";

interface IProps {
  data: {
    placeholder: string;
    buttonText: string;
  };
}
export function InputInline({ data }: IProps) {
  return (
    <Field orientation="horizontal">
      <Input type="search" placeholder={data.placeholder} />
      <Button className="dark:bg-white bg-gray-900">{data.buttonText}</Button>
    </Field>
  );
}
