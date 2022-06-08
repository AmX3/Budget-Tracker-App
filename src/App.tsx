import { ThemeProvider } from "styled-components";
import theme from "./theme/InterfaceStyles";
import GlobalPageStylingProvider from "./theme/GlobalPageStylingProvider";
import { StyledPhone } from "./styles/StyledPhone";
import { StyledPage } from "./styles/StyledPage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Budget from "./pages/Budget";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import WelcomeUser from "./pages/WelcomeUser";
import UsernameProvider from "./context/Username";
// import BudgetsProvider from "./context/Budgets";

function App() {
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <GlobalPageStylingProvider />
                <StyledPage>
                    <StyledPhone>
                        <UsernameProvider>
                            {/* <BudgetsProvider> */}
                            <Routes>
                                <Route path="/" element={<Home />} />
                                {/* <Route path="/login" element={<Login />} /> */}
                                {/* <Route path="/signup" element={<Signup />} /> */}
                                <Route
                                    path="/login"
                                    element={<WelcomeUser />}
                                />
                                <Route path="/budget" element={<Budget />} />
                            </Routes>
                            {/* </BudgetsProvider> */}
                        </UsernameProvider>
                    </StyledPhone>
                </StyledPage>
            </ThemeProvider>
        </Router>
    );
}

export default App;
