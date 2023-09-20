import { Form, Formik } from "formik";
import { BRAND } from "../../utils/constant";
import { Select } from "./Select/Select";

export const Filters = ({getQuery}) => {
    const handleSubmit = async(values) => {
        const brandQuery = `make=${values.brand}`;
        console.log('query', brandQuery);
        console.log(values);
     getQuery(brandQuery)
       
  };

  return (
    <>
      <Formik
        initialValues={{
          brand: "",
          prise: "",
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
                <button type="submit"> Search</button>
              </div>
            </Form>
          );
        }}
      </Formik>
      
    </>
  );
};
