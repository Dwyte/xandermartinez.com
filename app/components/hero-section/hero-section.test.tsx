import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { HeroSection } from "./hero-section";
import { GITHUB_URL, LINKEDIN_URL } from "@/app/constants";

describe("hero section", () => {
  beforeEach(() => {
    render(<HeroSection />);
  });

  it("should render xandermartinez's Github link", () => {
    const githubLink = screen.getByRole("link", { name: "Github" });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute("href", GITHUB_URL);
    expect(githubLink).toHaveAttribute("target", "_blank");
  });

  it("should render xandermartinez's Linkedin link", () => {
    const linkedinLink = screen.getByRole("link", { name: "LinkedIn" });
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute("href", LINKEDIN_URL);
    expect(linkedinLink).toHaveAttribute("target", "_blank");
  });

  it.todo("should render xandermartinez's email pop-over");
});
