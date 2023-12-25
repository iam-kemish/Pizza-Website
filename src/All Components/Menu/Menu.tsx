import { useLoaderData } from "react-router-dom";
import { getMenu } from "../Url/FetchUrl";
import MenuItem from "./MenuItem";
export interface menus {
  id: number;
  imageUrl: string;
  ingredients: string[];
  name: string;
  soldOut: boolean;
  unitPrice: number;
}

const Menu: React.FC = () => {
  const menu = useLoaderData() as menus[];
  return (
    <ul className="sm:grid grid-cols-2 ml-5 divide-x divide-y px-3 py-3">
      {menu.map((pizza) => {
        return <MenuItem pizza={pizza} key={pizza.id} />;
      })}
    </ul>
  );
};
export async function MenuLoader() {
  const menu = await getMenu();
  return menu;
}
export default Menu;
