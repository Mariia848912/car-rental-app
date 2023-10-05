import { BRAND, PRICE } from "../../../utils/constant"
import { SelectCustom } from "../CustomSelect/SelectCustom"
import { Box } from "./CustomFilter.style"

export const CustomFilter = () => {
  return (
    <Box>
      <SelectCustom list={BRAND} label='Car brand' />
       <SelectCustom list={PRICE} label='Price/ 1 hour'/>
    </Box>
  )
}    
    
  