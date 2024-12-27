import Desert from "@/components/Desert";
import { ListHeader, ListItems, ListStyled } from "./styles";

const List = ({ data }) => {
  return (
    <ListStyled>
      <ListHeader>Desserts</ListHeader>
      <ListItems>
        {data.map((item, id) => (
          <Desert key={id} {...item} />
        ))}
      </ListItems>
    </ListStyled>
  );
};

export default List;
