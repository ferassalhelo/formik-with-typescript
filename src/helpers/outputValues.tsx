import { inputs } from "../component/formik/inputs";

type valuesForSchema = [string, string | undefined] | null;

// of initial values of formik
let initialValues = (): object => {
  let values: object = {};

  let arr: object[] = [...inputs];
  arr.forEach((item: { name?: string }) =>
    item.name !== undefined ? (values = { ...values, [item.name]: "" }) : null
  );

  return values;
};

// of output array contains name field and error massige of scnima
let arrayValuesOfSchema = () => {
  let values: valuesForSchema[] = [],
    arr: object[] = [...inputs];

  arr.forEach((item: { name?: string; errorMassige?: string }) =>
    item.name !== undefined
      ? (values = [...values, [item.name, item.errorMassige]])
      : null
  );

  return values;
};

export { initialValues, arrayValuesOfSchema };
