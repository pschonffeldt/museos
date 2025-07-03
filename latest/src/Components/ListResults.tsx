// Imports
import { useState } from "react";

type ListResultsProps = {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
};

function ListResults({ items, heading, onSelectItem }: ListResultsProps) {
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1 className="title">{heading}</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item list-text list-group-active-color"
                : "list-group-item list-text"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListResults;
