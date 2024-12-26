import Button from "@/components/Button";
import {
  ButtonContainer,
  DesertFullName,
  DesertInformation,
  DesertName,
  DesertPrice,
  DesertStyled,
  ImageContainer,
  ImageStyled,
} from "./styles";
import desertDesktopImg from "@/assets/images/image-waffle-desktop.jpg";
import desertTabletImg from "@/assets/images/image-waffle-tablet.jpg";
import desertMobileImg from "@/assets/images/image-waffle-mobile.jpg";
import { BUTTON_STYLES } from "@/components/Button/constants";
import { BREAKPOINTS } from "@/constants";

console.log(desertDesktopImg, desertTabletImg, desertMobileImg)

const Desert = () => {
  return (
    <DesertStyled>
      <ImageContainer>
        <ImageStyled $desktop={desertDesktopImg} $tablet={desertTabletImg} $mobile={desertMobileImg}/>
        <ButtonContainer>
          <Button style={BUTTON_STYLES.CART}>Add to Cart</Button>
        </ButtonContainer>
      </ImageContainer>
      <DesertInformation>
        <DesertName>Waffle</DesertName>
        <DesertFullName>Waffle with Berries</DesertFullName>
        <DesertPrice>$6.50</DesertPrice>
      </DesertInformation>
    </DesertStyled>
  );
};

export default Desert;
