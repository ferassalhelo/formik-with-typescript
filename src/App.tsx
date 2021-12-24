import { useState } from "react";
import Forms from "./component/formik/Formik";
import Lists from "./component/lists";

export default function App(): JSX.Element {
  let [data, handleData] = useState<{}[] | []>([]);

  let addlist = (list: { id: number }): void => {
    return handleData([...data, list]);
  };

  let deleateItem = (id: number): void => {
    let arr: { id: number }[] = [...data];
    return handleData(
      arr.filter(item => {
        return item.id !== id;
      })
    );
  };

  return (
    <div>
      <Lists data={data} deleateItem={deleateItem} />
      <Forms addData={addlist} />
    </div>
  );
}
