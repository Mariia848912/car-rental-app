import { MdOutlineDiversity3 } from "react-icons/md";
import { BiSolidCar } from "react-icons/bi";
import { FaMedal } from "react-icons/fa";
import { Box, IconThumb, List, MainTitle, Item, ListTitle, CardTitle, Button } from "./Home.styled";


const Home = () => {
  return (
    <>
       <Box>
      <MainTitle>Car Rental in Ukraine with Address Delivery within an Hour</MainTitle>
   
      <ListTitle>Why Us</ListTitle>
      <List>
              <Item>
                  <IconThumb>
                      <BiSolidCar />
                  </IconThumb>
          <CardTitle>Diversity</CardTitle>
          <p>We guarantee that you will find the best car for your trip</p>
        </Item>
              <Item>
                   <IconThumb>
                      <FaMedal />
                  </IconThumb>
          <CardTitle>Quality at an affordable price</CardTitle>
          <p>
            We are happy to offer our customers the best prices due to having
            access to discounts provided by rental companies.
          </p>
        </Item>
              <Item>
                   <IconThumb>
                      <MdOutlineDiversity3 />
                  </IconThumb>
          <CardTitle>Team of professionals</CardTitle>
          <p>
            We are passionate about providing excellent service and exceeding
            customer expectations.
          </p>
        </Item>
      </List>
        <Button to="catalog"> Go to car selection</Button>
        </Box>
    </>
  );
};
export default Home;
