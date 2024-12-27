import Desert from "@/components/Desert";
import { ListHeader, ListItems, ListStyled } from "./styles";
import { useState } from "react";

const List = ({ data, setOrders, selectedItems, setSelectedItems }) => {
  return (
    <ListStyled>
      <ListHeader>Desserts</ListHeader>
      <ListItems>
        {data.map((item) => (
          <Desert
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
            key={item.id}
            {...item}
            setOrders={setOrders}
          />
        ))}
      </ListItems>
    </ListStyled>
  );
};

export default List;
