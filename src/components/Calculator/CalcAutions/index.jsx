import { useContext } from "react";
import { CarContext } from "../../../context";
import { Form, Input, InputNumber } from "antd";

import "./styles.css";

export const CalcAuctions = () => {
  const [form] = Form.useForm();

  const { delivery, setDelivery } = useContext(CarContext);
  console.log(delivery);

  const onChange = (value) => {
    console.log("changed", value);
  };

  return (
    <div className="calc-auctions">
      <label htmlFor="">Մեքենայի արժեք</label>
      <InputNumber
        style={{ width: "80%" }}
        min={0}
        type="number"
        defaultValue={delivery.price}
        onChange={onChange}
        controls={false}
      />
    </div>
  );
};
