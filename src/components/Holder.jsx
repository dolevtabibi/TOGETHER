import HolderItem from "./HolderItem.jsx";
import { HOLDER_ITEMS } from "../data.js";

export default function Holder({ selectedTopic }) {
  return (
    <div id="tab-content">
      <HolderItem
        key={HOLDER_ITEMS[selectedTopic].description}
        image={HOLDER_ITEMS[selectedTopic].image}
        description={HOLDER_ITEMS[selectedTopic].description}
      />
    </div>
  );
}
