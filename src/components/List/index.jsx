import Desert from "@/components/Desert";
import { ListHeader, ListItems, ListStyled } from "./styles";

const List = () => {
  return (
    <ListStyled>
      <ListHeader>Desserts</ListHeader>
      <ListItems>
        <Desert />
        <Desert />
        <Desert />
        <Desert />
        <Desert />
        <Desert />
      </ListItems>
    </ListStyled>
  );
};

export default List;
