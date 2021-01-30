import { render } from "@testing-library/svelte";
import { expect } from "chai";
import App from "./App.svelte";

describe("<App>", () => {
  it("renders Full-stack developer by Typescript text", () => {
    const { getByText } = render(App);
    const linkElement = getByText(/Full-stack developer by Typescript/i);
    expect(document.body.contains(linkElement));
  });
});
