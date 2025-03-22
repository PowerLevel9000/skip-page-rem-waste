import SkipCard from "./SkipCard";
import { render, screen } from "@testing-library/react";

// test case will be written at the time of development
describe("SkipCard", () => {
    it("renders SkipCard component", () => {
        render(<SkipCard id={12} area={"ahgjh"} description={"hgjhadgfjk"} />);
    });
});