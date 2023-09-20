import { BRAND } from "../../utils/constant";
import { Select } from "./Select/Select";

export const Filters = () => {
  return (
    <>
          <Select label='Car brand' title='Enter the text' constant={BRAND} name='brand'/>
    </>
  );
};
