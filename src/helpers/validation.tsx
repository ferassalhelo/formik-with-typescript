import * as Yup from "yup";
import { arrayValuesOfSchema } from "./outputValues";

type Tvalues = () => [string, string | undefined] | null;

// of create schima
let validations = () => {
  let values: [string, string][] = [...arrayValuesOfSchema()];
  let obj: any = {};

  values.map((item: [string, string]) => {
    return (obj[item[0]] = Yup.string().required(item[1]));
  });

  let schema = Yup.object().shape(obj);
  return schema;
};
export { validations };
