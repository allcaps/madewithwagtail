[Made with Wagtail](https://madewithwagtail.org) [<img src="https://raw.githubusercontent.com/wagtail/wagtail/main/docs/logo.png" width="83" align="right" alt="Wagtail">](https://wagtail.org/)

> A showcase of sites and apps made with [Wagtail](https://wagtail.org/): an easy to use, open source content management system.

*Check out [Awesome Wagtail](https://github.com/wagtail/awesome-wagtail) for more awesome packages and resources from the Wagtail community.*

## About this project

This repository powers [madewithwagtail.org](https://madewithwagtail.org). It uses [Astro](https://astro.build) to generate the whole site at build time from Markdown content collections.

The content lives in `src/content`, with one Markdown file per site and developer profile. The schema for both collections is defined in [`src/content.config.ts`](src/content.config.ts).

## Quick start

Requirements: Node, `npm`, [`just`](https://github.com/casey/just), and [`prek`](https://prek.j178.dev/).

```sh
git clone git+https://github.com/wagtail/madewithwagtail
cd madewithwagtail

# Install the dependencies.
just install

# Start the development server at http://localhost:4321/madewithwagtail/.
just serve
```

Other useful commands:

```sh
just build            # Build the production site to `dist/`.
just check            # Run the Astro type checker.
just lint             # Run all linters (Biome, Stylelint, prek).
just format           # Run all formatters.
just test-submissions # Run the submission pipeline tests.
just help             # List all the justfile recipes.
```

## Site submissions

See our guidance on [sites management](./docs/sites-management.md) for details about how to submit new sites.

## Contributing

Contributions are welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for installation instructions, how the site works, coding standards, and code review guidelines.

## Deployment

The site is deployed to GitHub Pages on every push to `main`, via GitHub Actions. Dependency updates are automated with [Renovate](https://docs.renovatebot.com/).

## Credits

Thank you to the [contributors](https://github.com/wagtail/madewithwagtail/graphs/contributors) who started the site at a [Springload](https://springload.co.nz) hackathon in [Wellington, New Zealand](https://en.wikipedia.org/wiki/Wellington) back in 2015. And to all other contributors who have helped maintain and improve the site over the years. Thank you to the hundreds of site submitters who have shared their Wagtail projects with the community.
