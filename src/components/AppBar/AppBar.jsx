import { Navigation } from "../Navigation/Navigation";
import { PiCarFill } from "react-icons/pi";

export const AppBar = () => {

  return (
    <header>
      <p>Loooogo</p>
      <div>
        <PiCarFill />
      </div>
      <Navigation />
    </header>
  );
};
