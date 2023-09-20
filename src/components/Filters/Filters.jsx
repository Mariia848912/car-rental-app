import { Form, Formik } from "formik";
import PropTypes from "prop-types";
import { BRAND, PRICE } from "../../utils/constant";
import { Select } from "./Select/Select";
import { Input } from "./Input/Input";
// import { changeMileage } from "../../utils/changeMileage";
import { Box, Button, InputBox, Title } from "./Filters.styled";

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
          priсe: "",
          mileageFrom: "",
          mileageTo: "",
        }}
        onSubmit={handleSubmit}
      >
        {() => {
          return (
            <Form>
              <Box>
                <Select
                  label="Car brand"
                  title="Enter the text"
                  constant={BRAND}
                  name="brand"
                />
                <Select
                  label="Price/ 1 hour"
                  title="To $"
                  constant={PRICE}
                  name="price"
                />
                <div>
                  <Title>Сar mileage / km</Title>

                  <InputBox>
                    <Input type="number" name="mileageFrom" title="From" />
                    <Input type="number" name="mileageTo" title="To" />
                  </InputBox>
                </div>
                <div>
                  {" "}
                  <Button type="submit">Search</Button>
                </div>
              </Box>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

Filters.propTypes = {
  getQuery: PropTypes.func.isRequired,
};
