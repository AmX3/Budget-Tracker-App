import React, { createContext, useState } from "react";

//  export interface BudgetsContextInterface {
//     budgets: [];
//     expenses: [];
//     getBudgetExpenses: () => void;
//     addExpense: () => void;
//     addBudget: () => void;
//     deleteBudget: () => void;
//     deleteExpense: () => void;
// }
// export const BudgetsContext = createContext<BudgetsContextInterface>({
//     budgets: [],
//     expenses: [],
//     getBudgetExpenses: () => {},
//     addExpense: () => {},
//     addBudget: () => {},
//     deleteBudget: () => {},
//     deleteExpense: () => {},
// });

// export const BudgetsProvider = ({ children }: any) => {
//     const [username, setUsername] = useState<string>("");
//     // Wrapper
//     const data = { username, setUsername };
//     return (
//         <BudgetsContext.Provider value={data}>
//             {children}
//         </BudgetsContext.Provider>
//     );
// };

// export default BudgetsProvider;
