import { fireEvent, render, screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

test('checkbox is unchecked by default, and checking it enables button', () => {
    render(<SummaryForm/>);

    const checkbox = screen.getByRole('checkbox', {name: /I agree to Terms and Conditions/i});
    const button = screen.getByRole('button', {name: /Confirm order/i})

    // expect checkbox to be unchecked by default
    expect(checkbox).not.toBeChecked();
    // expect button to be disabled by default
    expect(button).toBeDisabled();

    // click checkbox
    fireEvent.click(checkbox);
    // expect checkbox to be checked
    expect(checkbox).toBeChecked();
    // expect button to be enabled
    expect(button).toBeEnabled();

    // click checkbox again
    fireEvent.click(checkbox);
    // expect button to be disabled
    expect(button).toBeDisabled();
});