import ClickCounter from '../components/clickCounter';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';


describe('ClickCounter Component', () => {
  test('increase count by 1 when clicked', async () => {
    const user = userEvent.setup();
    const { container } = render(<ClickCounter />);

    const button = container.querySelector('button');
    expect(button).toBeTruthy();

    expect(button.innerHTML).toContain('0');

    await user.click(button);

    expect(button.innerHTML).toContain('1');

   });


});