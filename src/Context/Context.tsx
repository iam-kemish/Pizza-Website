
import { SetStateAction, createContext,Dispatch } from "react";
import { menus } from "../All Components/Menu/Menu";
interface contextValue {
    user: string;
    setUser: Dispatch<SetStateAction<string>>;
    uname: boolean;
    setUname: Dispatch<SetStateAction<boolean>>
    item: menus[],
    setItem: Dispatch<SetStateAction<menus[]>>
}

export const contextApi = createContext<contextValue>({
    user: "",
    setUser: () => {},
    uname: false,
    setUname: () => {},
    item: ([]),
    setItem: () => {}
});