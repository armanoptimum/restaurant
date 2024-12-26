import Button from "@/components/Button";
import { CartHeader, CartStyled } from "./styles";
import { BUTTON_STYLES } from "../Button/constants";

const Cart = () => {
  return ( 
  <CartStyled>
      <CartHeader>Your Cart (0)</CartHeader>
      <Button style={BUTTON_STYLES.PRIMARY}>Confirm Order</Button>

  </CartStyled>
  )
};

export default Cart;
