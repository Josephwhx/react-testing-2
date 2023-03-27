import { render, screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event"

test('checkbox is unchecked by default, and checking it enables button', async () => {

    const user = userEvent.setup();
    
    render(<SummaryForm/>);

    const checkbox = screen.getByRole('checkbox', {name: /I agree to Terms and Conditions/i});
    const button = screen.getByRole('button', {name: /Confirm order/i})

    // expect checkbox to be unchecked by default
    expect(checkbox).not.toBeChecked();
    // expect button to be disabled by default
    expect(button).toBeDisabled();

    // click checkbox
    await user.click(checkbox);
    // expect checkbox to be checked
    expect(checkbox).toBeChecked();
    // expect button to be enabled
    expect(button).toBeEnabled();

    // click checkbox again
    await user.click(checkbox);
    // expect button to be disabled
    expect(button).toBeDisabled();
});

test("popover responds to hover", async () => {
    const user = userEvent.setup();
    render(<SummaryForm/>);

    // popover starts out hidden
    const nullPopover = screen.queryByText(/no ice cream will actually be delivered/i);
    expect(nullPopover).not.toBeInTheDocument();
    
    // popover appears on mouseover of checkbox label
    const termsAndConditions = screen.getByText(/terms and conditions/i);
    await user.hover(termsAndConditions);
    const popover = screen.getByText(/no ice cream will actually be delivered/i);
    expect(popover).toBeInTheDocument();

    // popover disappears when we mouse out
    await user.unhover(termsAndConditions);
    expect(popover).not.toBeInTheDocument();
})