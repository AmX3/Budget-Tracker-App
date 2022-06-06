export interface User {
    id: number;
    username: string;
    email: string;
    password: string;
}

export const users: Array<User> = [
    {
        id: 1,
        username: "amelia",
        email: "ameliadeng1@gmail.com",
        password: "ameliadeng",
    },
];
