import Home from '../pages/index';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

describe('Home Page', () => {
  test("renders at least one link to https://vercel.com in the footer", () => { 
    const { container } = render(<Home />);
    const footer = container.querySelector('footer');
    expect(footer).toBeTruthy();

    const footerLinks = footer.querySelectorAll("a");

    expect(footerLinks.length).toBeGreaterThan(0); // at least one link

    let vercelLinks = 0;

    footerLinks.forEach(link => {
      if(link.href.includes("https://vercel.com"))
        vercelLinks++;
    });

    expect(vercelLinks).toBeGreaterThan(0);

  });

});