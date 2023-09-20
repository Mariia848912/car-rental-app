import { Link } from "react-router-dom";
import { MdOutlineDiversity3 } from "react-icons/md";
import { BiSolidCar } from "react-icons/bi";
import { FaMedal } from "react-icons/fa";


const Home = () => {
  return (
    <>
      <h1>Car Rental in Ukraine with Address Delivery within an Hour</h1>
      <h2> Why Us </h2>
      <ul>
              <li>
                  <div>
                      <BiSolidCar />
                  </div>
          <h3>Diversity</h3>
          <p>We guarantee that you will find the best car for your trip</p>
        </li>
              <li>
                   <div>
                      <FaMedal />
                  </div>
          <h3>Quality at an affordable price</h3>
          <p>
            We are happy to offer our customers the best prices due to having
            access to discounts provided by rental companies.
          </p>
        </li>
              <li>
                   <div>
                      <MdOutlineDiversity3 />
                  </div>
          <h3>Team of professionals</h3>
          <p>
            We are passionate about providing excellent service and exceeding
            customer expectations.
          </p>
        </li>
      </ul>
      <Link to="catalog"> Go to car selection</Link>
    </>
  );
};
export default Home;
