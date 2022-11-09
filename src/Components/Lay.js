import React from "react";
import Toolbar from "./Navigation/Toolbar/Toolbar";
const Lay = (props) => {
  return (
    <div style={{marginTop:"72px"}}>
      <Toolbar />
      <main>{props.children}</main>
    </div>
  );
};

export default Lay;
