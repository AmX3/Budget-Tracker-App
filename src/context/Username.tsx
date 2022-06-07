import { createContext, useState } from "react";

export interface UsernameContextInterface {
    username: string;
    setUsername: (username: string) => void;
}
// This createContext method returns an object
export const UsernameContext = createContext<UsernameContextInterface>({
    username: "",
    setUsername: () => {},
});

export const UsernameProvider = ({ children }: any) => {
    const [username, setUsername] = useState<string>("");
    // Wrapper
    const data = { username, setUsername };

    return (
        <UsernameContext.Provider value={data}>
            {children}
        </UsernameContext.Provider>
    );
};

export default UsernameProvider;
