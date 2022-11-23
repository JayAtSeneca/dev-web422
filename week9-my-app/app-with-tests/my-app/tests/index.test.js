import Home from '../pages/index';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

describe('Home Page', () => {
  test("renders at least one link to https://vercel.com in the footer", () => {
    const { container } = render(<Home />);

    // attempt to fetch the "footer" element
    const footer = container.querySelector('footer');

    // ensure that the "footer" element exists
    expect(footer).toBeTruthy();

    // get all "a" elements within the footer
    const footerLinks = footer.querySelectorAll("a");

    // ensure there is at least 1 "a" element within the footer
    expect(footerLinks.length).toBeGreaterThan(0); // at least one link

    // count the number of links that include "https://vercel.com"
    let vercelLinks = 0;

    footerLinks.forEach(link => {
      if (link.href.includes("https://vercel.com"))
        vercelLinks++;
    });

    // ensure that there is at least one link that includes "https://vercel.com"
    expect(vercelLinks).toBeGreaterThan(0); // at least one vercel link
  });
});