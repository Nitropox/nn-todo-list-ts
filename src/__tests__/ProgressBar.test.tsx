import { ProgressBar } from "../components/ProgressBar";
import React from "react";
import { shallow } from "enzyme";

describe("ProgressBar component", () => {
  it("Renders ProgressBar component", () => {
    expect(shallow(<ProgressBar progress="20%" />).length).toEqual(1);
  });

  it("Matches the snapshot", () => {
    expect(shallow(<ProgressBar progress="20%" />)).toMatchSnapshot();
  });
});
