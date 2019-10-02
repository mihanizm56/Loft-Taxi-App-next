import React from "react";
import { CredentialsPageApp } from "../src/streams";
import { withTranslation } from "../i18n";

const CredentialsPage = () => <CredentialsPageApp />;

export default withTranslation("common")(CredentialsPage);
