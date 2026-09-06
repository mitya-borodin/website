import { render } from "@testing-library/svelte";
import { expect } from "chai";
import App from "./App.svelte";

describe("<App>", () => {
  it("renders the current professional title", () => {
    const { getByText } = render(App);
    const titleElement = getByText("Senior Full-stack Developer");
    expect(document.body.contains(titleElement)).to.equal(true);
  });
});
