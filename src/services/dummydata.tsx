import { IconProp } from "@fortawesome/fontawesome-svg-core";
export interface User {
    firstName: string;
    email: string;
    password: string;
}

export interface Categories {
    name: string;
    icon: IconProp;
    maximum: number;
}

export interface Expense {
    name: string;
    amount: number;
}

export const expenses: Array<Expense> = [
    {
        name: "Steam",
        amount: 20,
    },
    {
        name: "Spotify Premium",
        amount: 11.99,
    },
    {
        name: "Vivid",
        amount: 20,
    },
];
