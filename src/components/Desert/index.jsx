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
import { BUTTON_STYLES } from "@/components/Button/constants";
import { BREAKPOINTS } from "@/constants";
import { priceFormat } from "@/utils";

const Desert = ({
  id,
  name,
  category,
  price,
  image,
  setOrders,
  selectedItems,
  setSelectedItems,
}) => {
  const itemCount = selectedItems.find((item) => item.id === id)?.count || 0;

  const selectItem = () => {
    if (itemCount === 0) {
      setSelectedItems((prev) => [...prev, { id, count: 1 }]);
      setOrders((prevOrders) => [...prevOrders, { id, count: 1 }]);
    }
  };

  const incrementItem = () => {
    setSelectedItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item,
      ),
    );
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, count: order.count + 1 } : order,
      ),
    );
  };

  const decrementItem = () => {
    if (itemCount > 1) {
      setSelectedItems((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, count: item.count - 1 } : item,
        ),
      );
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.id === id ? { ...order, count: order.count - 1 } : order,
        ),
      );
    } else {
      setSelectedItems((prev) => prev.filter((item) => item.id !== id));
      setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id));
    }
  };

  return (
    <DesertStyled>
      <ImageContainer>
        <picture>
          <source
            media={`(min-width: ${BREAKPOINTS.desktop})`}
            srcSet={image.desktop}
          />
          <source
            media={`(min-width: ${BREAKPOINTS.tablet})`}
            srcSet={image.tablet}
          />
          <source
            media={`(min-width: ${BREAKPOINTS.mobile})`}
            srcSet={image.mobile}
          />
          <ImageStyled
            srcSet={image.mobile}
            src={image.mobile}
            alt="desert"
            priority
            width={100}
            height={100}
            $selected={itemCount}
          />
        </picture>
        <ButtonContainer>
          <Button
            selectedItemsCount={itemCount}
            selectItem={selectItem}
            incrementItem={incrementItem}
            decrementItem={decrementItem}
            style={BUTTON_STYLES.CART}
          >
            Add to Cart
          </Button>
        </ButtonContainer>
      </ImageContainer>
      <DesertInformation>
        <DesertName>{category}</DesertName>
        <DesertFullName>{name}</DesertFullName>
        <DesertPrice>${priceFormat(price)}</DesertPrice>
      </DesertInformation>
    </DesertStyled>
  );
};

export default Desert;
