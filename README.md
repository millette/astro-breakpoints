# Astro Breakpoints

![Astro Breakpoints](.github/assets/screenshot.png)

Astro Breakpoints is a dumb little
[Astro Dev Toolbar App](https://docs.astro.build/en/reference/dev-toolbar-app-reference/) that displays the size of the current viewport—as a tailwind class. I always find it helpful when working on a site to be able to quickly see which Tailwind breakpoint is currently active, maybe you do too?

## Installation

To install Astro Breakpoints, run the following command with your preferred
package manager:

```sh
npx astro add astro-devtool-breakpoints
```

## Usage

```ts
import { defineConfig } from "astro/config";

import astroBreakpoints from "astro-devtool-breakpoints";

export default defineConfig({
  integrations: [astroBreakpoints()],
});
```

## Configuration

You get what you get, and you don't get upset.
