import Desert from "@/components/Desert";
import { ListHeader, ListItems, ListStyled } from "./styles";

const List = ({ data }) => {
  return (
    <ListStyled>
      <ListHeader>Desserts</ListHeader>
      <ListItems>
        {data.map((item) => (
          <Desert key={item.id} {...item} />
        ))}
      </ListItems>
    </ListStyled>
  );
};

export default List;
