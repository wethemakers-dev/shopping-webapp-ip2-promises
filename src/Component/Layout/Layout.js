import React from "react";
import { Content } from "rsuite";

export const Layout = props => (
  <Content className="body-container">{props.children}</Content>
);
