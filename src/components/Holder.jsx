import HolderItem from "./HolderItem.jsx";
import {HOLDER_ITEMS} from "../data.js";

export default function Holder()
{
    return (
         <ul>
            {HOLDER_ITEMS.map(holderItem => <HolderItem key={holderItem.description} {...holderItem} />)}
         </ul>
    );
}