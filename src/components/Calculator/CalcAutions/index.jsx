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

  const nameValue = Form.useWatch("price", form);

  return (
    <div className="calc-auctions">
      <Form form={form} layout="vertical" autoComplete="off">
        <Form.Item name="price" label="Մեքենայի արժեքը">
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>
      </Form>
      <p>{nameValue}</p>
    </div>
  );
};
