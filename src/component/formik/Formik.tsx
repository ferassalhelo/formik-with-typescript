import { useState } from "react";
import { Formik } from "formik";
import { initialValues } from "../../helpers/outputValues";
import TheForm from "./form";
import { validations } from "../../helpers/validation";

type Iprops = {
  addData: (list: { id: number }) => void;
};

export default function Forms(Props: Iprops) {
  let [data] = useState<object>(initialValues());

  let handleValus = (Valus: object) => {
    let newItem: { id: number } = { ...Valus, id: Math.random() };
    Props.addData(newItem);
  };

  return (
    <div>
      <Formik
        initialValues={data}
        onSubmit={(Valus): any => handleValus(Valus)}
        validationSchema={validations()}
      >
        <TheForm />
      </Formik>
    </div>
  );
}
