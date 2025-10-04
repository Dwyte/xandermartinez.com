import { render, screen } from "@testing-library/react";
import { EmailPopover } from "./email-popover";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { EmailPopoverContent } from "./email-popover-content";
import { EMAIL } from "@/app/constants";

describe("email popover", () => {
  beforeEach(() => {
    render(<EmailPopover />);
  });

  it("should not show popover content by default", () => {
    const popoverContent = screen.queryByRole("dialog");
    expect(popoverContent).not.toBeInTheDocument();
  });

  it.todo("should show popover content on trigger");
});

describe("email popover content", () => {
  beforeEach(() => {
    render(<EmailPopoverContent />, { container: document.body });

    // Mock Clipboard API
    Object.assign(navigator, {
      clipboard: {
        writeText: jest.fn(),
      },
    });
  });

  it("should have a button containing the EMAIL that copies the EMAIL to clipboard on click", async () => {
    const emailButton = screen.getByRole("button", { name: EMAIL });

    await userEvent.click(emailButton);

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(EMAIL);
  });

  it("should have a link to mailto:EMAIL for sending an email", () => {
    const sendEmailLink = screen.getByRole("link");

    expect(sendEmailLink).toHaveAttribute("href", `mailto:${EMAIL}`);
    expect(sendEmailLink).toHaveAttribute("target", "_blank");
  });
});
