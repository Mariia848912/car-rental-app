import PropTypes from "prop-types";
import { useState } from "react";
import { BRAND, PRICE } from "../../../utils/constant";
import { SelectCustom } from "../CustomSelect/SelectCustom";
import { Box, Button, InputBox } from "./CustomFilter.style";
import { CustomInput } from "../CustomInput/CustomInput";

export const CustomFilter = ({ getQuery, resetQuery }) => {
  const [brand, setBrand] = useState("Enter the text");
  const [price, setPrice] = useState("");
  const [mileageFrom, setMileageFrom] = useState("");
  const [mileageTo, setMileageTo] = useState("");
  const handelReset = () => {
    setBrand("Enter the text");
    setPrice("");
    setMileageFrom("");
    setMileageTo("");
    resetQuery();
  };

  const handelSubmit = () => {
    let query = {};
    if (brand !== "Enter the text") {
      query = {
        ...query,
        brand,
      };
    }
    if (price) {
      {
        query = {
          ...query,
          price,
        };
      }
    }
    if (mileageFrom) {
      {
        query = {
          ...query,
          mileageFrom,
        };
      }
    }
    if (mileageTo) {
      {
        query = {
          ...query,
          mileageTo,
        };
      }
    }
    getQuery(query);
  };
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
          min="0"
          inputStyle={styleMileageFrom}
          getValue={setMileageFrom}
          values={mileageFrom}
        />
        <CustomInput
          name="mileageTo"
          text="To"
          type="text"
          min="0"
          inputStyle={stylemileageTo}
          getValue={setMileageTo}
          values={mileageTo}
        />
      </InputBox>
      <Button type="button" onClick={handelSubmit}>
        Search
      </Button>
      <Button type="reset" onClick={handelReset}>
        Reset
      </Button>
    </Box>
  );
};

CustomFilter.propTypes = {
  getQuery: PropTypes.func.isRequired,
  resetQuery: PropTypes.func.isRequired,
};
