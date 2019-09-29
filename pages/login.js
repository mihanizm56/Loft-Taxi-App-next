import React from "react";
// import { handleAuthSSR } from "./utils/authSSR";
import { LoginPageApp } from "../src/streams";

const Login = () => <LoginPageApp />;

export default Login;

// static getInitialProps = async ctx => {
// TODO enable when add redirect and normal service apis
// await handleAuthSSR(ctx);

// return {};
// };
