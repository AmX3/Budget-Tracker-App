import { User, users } from "./userData";

export const findUser = (username: string): User | undefined => {
    const user = users.find((user) => user.username === username);
    return user;
};
