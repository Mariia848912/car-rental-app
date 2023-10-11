import { Img } from "./Placeholder.styled";
import img from "../../../img/noImageFound.jpg";

export const Placeholder = () => {
    return (
        <Img src={img} alt="not available" width='100px' />
    )
}