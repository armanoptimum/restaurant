import Desert from "@/components/Desert";
import { ListHeader, ListItems, ListStyled } from "./styles";

const List = ({ data, setOrders, selectedItems, setSelectedItems }) => {
  return (
    <ListStyled>
      <ListHeader>Desserts</ListHeader>
      <ListItems>
        {data.map((item) => (
          <Desert
            key={item.id}
            {...item}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
            setOrders={setOrders}
          />
        ))}
      </ListItems>
    </ListStyled>
  );
};

export default List;
