import { fireEvent, render, screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

test('checkbox is unchecked by default, and checking it enables button', () => {
    render(<SummaryForm/>);

    const checkbox = screen.getByRole('checkbox', {name: 'checkbox'});
    const button = screen.getByRole('button', {name: 'button'})

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
});