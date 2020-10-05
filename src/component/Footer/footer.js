import { waitForElementToBeRemoved } from "@testing-library/react";
import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <p>
        Album example is © Bootstrap, but please download and customize it for
        yourself!
      </p>
      <a href="#">Back to Top</a>
    </div>
  );
}
