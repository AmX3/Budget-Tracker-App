import { createContext, useState } from "react";
export interface AuthContextInterface {
    token: string;
    userId: number;
    setToken: (token: string) => void;
    setUserId: (id: number) => void;
}

export const AuthContext = createContext<AuthContextInterface>({
    token: "",
    userId: 0,
    setToken: () => {},
    setUserId: () => {},
});

export const AuthProvider = ({ children }: any) => {
    const [token, setToken] = useState("");
    const [userId, setUserId] = useState(0);

    const data: AuthContextInterface = { token, setToken, userId, setUserId };

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthContext;
