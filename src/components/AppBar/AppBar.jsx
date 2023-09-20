import { Navigation } from "../Navigation/Navigation";
import { PiCarFill } from "react-icons/pi";
import { Box, Header, IconThumb } from "./AppBar.styled";
import { Container } from "../Container/Container";
export const AppBar = () => {
  return (
    <Header>
      <Container>
        <Box>
          <IconThumb>
            <PiCarFill />
          </IconThumb>
          <Navigation />
        </Box>
      </Container>
    </Header>
  );
};
