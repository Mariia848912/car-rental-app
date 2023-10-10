import { useState } from "react";
import { BRAND, PRICE } from "../../../utils/constant";
import { SelectCustom } from "../CustomSelect/SelectCustom";
import { Box, InputBox } from "./CustomFilter.style";
import { CustomInput } from "../CustomInput/CustomInput";

export const CustomFilter = () => {
  const [brand, setBrand] = useState("Enter the text");
  const [price, setPrice] = useState(null);
  const [mileageFrom, setMileageFrom] = useState('');
  const [mileageTo, setMileageTo] = useState('');

  const stylePrice = {
    width: " 125px",
  };
  const styleMileageFrom = {
    paddingLeft: "68px",
    borderRadius: "14px 0px 0px 14px",
    borderRight: "1px solid rgba(138, 138, 137, 0.20)",
  };

  const stylemileageTo = {
    paddingLeft: "46px",
    borderRadius: "0px 14px 14px 0px",
  };
  return (
    <Box>
      <SelectCustom
        value={brand}
        list={BRAND}
        label="Car brand"
        getValue={setBrand}
      />
      <SelectCustom
        value={price}
        list={PRICE}
        label="Price/ 1 hour"
        getValue={setPrice}
        textFirstPart="To"
        textSecondPart="$"
        wrapperStyle={stylePrice}
      />
      <InputBox>
        <CustomInput
          name="mileageFrom"
          text="From"
          type="text"
          title="Сar mileage / km"
          min='0'
          inputStyle={styleMileageFrom}
          getValue={setMileageFrom}
          values={mileageFrom}
        />
        <CustomInput
          name="mileageTo"
          text="To"
          type="text"
          min='0'
          inputStyle={stylemileageTo}
          getValue={setMileageTo}
          values={mileageTo}
        />
      </InputBox>
    </Box>
  );
};
