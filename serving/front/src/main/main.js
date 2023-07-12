import React, { useState } from "react";
import * as s from "./main_css";
import Example from "./example"
import SendImage from "process/sendImage";

function main() {
  const [state, setState] = useState("three")
  const mainState = (state) => {
    setState(state)
  }
  console.log(state)
  console.log(state == "three");

  return (
    <s.mainBackground>
      <Example />
    </s.mainBackground>
  )
}

export default main
