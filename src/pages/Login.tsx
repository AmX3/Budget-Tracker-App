import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Card from "../components/Card";
import Form from "../components/Form";

const Login = () => {
    return (
        <>
            <div>
                <FontAwesomeIcon icon={faUser} size="5x" />
            </div>
            <Form></Form>
        </>
    );
};

export default Login;
