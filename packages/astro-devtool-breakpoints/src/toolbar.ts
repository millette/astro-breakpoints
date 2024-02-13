export default {
  name: "Breakpoints",
  id: "breakpoints",
  icon: `<svg width="100%" height="100%" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <style>
    text { fill: white; font-family: Arial, sans-serif; font-size: 20px; }
    .text-content { display: none; }
    .text-sm { display: block; }

    @media (min-width: 768px) {
      .text-content { display: none; }
      .text-md { display: block; }
    }

    @media (min-width: 1024px) {
      .text-content { display: none; }
      .text-lg { display: block; }
    }

    @media (min-width: 1280px) {
      .text-content { display: none; }
      .text-xl { display: block; }
    }
  </style>
  <text x="50%" y="50%" class="text-content text-sm" dominant-baseline="middle" text-anchor="middle">sm</text>
  <text x="50%" y="50%" class="text-content text-md" dominant-baseline="middle" text-anchor="middle">md</text>
  <text x="50%" y="50%" class="text-content text-lg" dominant-baseline="middle" text-anchor="middle">lg</text>
  <text x="50%" y="50%" class="text-content text-xl" dominant-baseline="middle" text-anchor="middle">xl</text>
</svg>
  `,
  init(canvas, eventTarget) {
    eventTarget.dispatchEvent(
      new CustomEvent('toggle-notification', {
        detail: {
          state: false,
        },
      })
    );
  }
};
