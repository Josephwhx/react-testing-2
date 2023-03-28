import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../App';

test('order phases for happy path', async () => {
    const user = userEvent.setup();

    // render app
    const {unmount} = render(<App/>);

    // add ice cream scoops and toppings
    const vanillaInput = await screen.findByRole('spinbutton', {name: 'Vanilla'});
    const cherriesCheckbox = await screen.findByRole('checkbox', {name: 'Cherries'});

    await user.clear(vanillaInput);
    await user.type(vanillaInput, "2");
    await user.click(cherriesCheckbox);

    // find and click order button
    const orderButton = await screen.findByRole('button', {name: /order sundae/i});
    await user.click(orderButton);

    // check summary information based on order
    const summaryHeading = screen.getByRole("heading", {name: "Order Summary"});
    expect(summaryHeading).toBeInTheDocument();

    const scoopsHeading = screen.getByRole("heading", {name: "Scoops: $4.00"});
    expect(scoopsHeading).toBeInTheDocument();

    const optionItems = screen.getAllByRole('listitem');
    const optionItemsText = optionItems.map((item => item.textContent));
    expect(optionItemsText).toEqual(['2 Vanilla', 'Cherries']);

    // accept terms and conditions and click button to confirm order
    const toCheckbox = screen.getByRole('checkbox', {name: /terms and conditions/i});

    await user.click(toCheckbox);

    // confirm order number on confirmation page
    const confirmOrderButton = screen.getByRole('button', {name: /confirm order/i});
    await user.click(confirmOrderButton);

    // expect "loading" to show
    const loading = screen.getByText(/loading/i);
    expect(loading).toBeInTheDocument();

    const thankYouHeader = await screen.findByText(/Thank you/i);
    expect(thankYouHeader).toBeInTheDocument();

    const isLoading = screen.queryByText(/loading/i);
    expect(isLoading).not.toBeInTheDocument();


    // click "new order" button on confirmation page
    const newOrderButton = await screen.findByRole('button', {name: /create new order/i});
    await user.click(newOrderButton);
    
    // check that scooops and toppings subtotals have been reset
    const scoopsTotal = await screen.findByText("Scoops total: $0.00");
    expect(scoopsTotal).toBeInTheDocument();
    const toppingsTotal = await screen.findByText("Toppings total: $0.00");
    expect(toppingsTotal).toBeInTheDocument();

    unmount();
})