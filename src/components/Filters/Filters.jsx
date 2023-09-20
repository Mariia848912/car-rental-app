import { Form, Formik } from "formik";
import { BRAND } from "../../utils/constant";
import { Select } from "./Select/Select";
import { Input } from "./Input/Input";
import { changeMileage } from "../../utils/changeMileage";

export const Filters = ({ getQuery }) => {
  const handleSubmit = async (values) => {
    const brandQuery = `make=${values.brand}`;
    console.log("query", brandQuery);
    console.log(values);
    getQuery(brandQuery);
  };

  return (
    <>
      <Formik
        initialValues={{
          brand: "",
          prise: "",
          mileageFrom: "",
          mileageTo: "",
        }}
        onSubmit={handleSubmit}
      >
              {() => {
               
          return (
            <Form>
              <div>
                <Select
                  label="Car brand"
                  title="Enter the text"
                  constant={BRAND}
                  name="brand"
                />
                <Select
                  label="Price/ 1 hour"
                  title="To $"
                  constant={BRAND}
                          name="prise"
                      
                />
                <Input
                  type="number"
                  name="mileageFrom"
                  title="From"
                  
                />
                <Input type="number" name="mileageTo" title="To"     />
                <button type="submit"> Search</button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

// onChange={() => {
                //     setFieldValue("mileageFrom", changeMileage(values.mileageFrom));
//   }}
                
//  value={() => setFieldValue(changeMileage(values.mileageTo))}