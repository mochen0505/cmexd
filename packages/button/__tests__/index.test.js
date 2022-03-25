import { render } from '@testing-library/svelte';
import { Button } from "../lib/index";

describe('Button', () => {
  it('props', async () => {
    const { getByRole } = render(Button, { props: { primary: true, label: 'test', backgroundColor: '#fff' } });
    const button = getByRole('button');
    // console.log(button.outerHTML)
    expect(button.innerHTML).toBe('test')
  });
});
