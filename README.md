# Next.js & HeroUI Template

This is a template for creating applications using Next.js 14 (pages directory) and HeroUI (v2).

[Try it on CodeSandbox](https://githubbox.com/heroui-inc/next-pages-template)

> Note: Since Next.js 14, the pages router is recommend migrating to the [new App Router](https://nextjs.org/docs/app) to leverage React's latest features
>
> Read more: [Pages Router](https://nextjs.org/docs/pages)

## Technologies Used

- [Next.js 14](https://nextjs.org/docs/getting-started)
- [HeroUI](https://heroui.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org)
- [Framer Motion](https://www.framer.com/motion)
- [next-themes](https://github.com/pacocoursey/next-themes)

## How to Use

To create a new project based on this template using `create-next-app`, run the following command:

```bash
npx create-next-app -e https://github.com/heroui-inc/next-pages-template
```

### Install dependencies

You can use one of them `npm`, `yarn`, `pnpm`, `bun`, Example using `npm`:

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

### Setup pnpm (optional)

If you are using `pnpm`, you need to add the following code to your `.npmrc` file:

```bash
public-hoist-pattern[]=*@heroui/*
```

After modifying the `.npmrc` file, you need to run `pnpm install` again to ensure that the dependencies are installed correctly.

## License

Licensed under the [MIT license](https://github.com/heroui-inc/next-pages-template/blob/main/LICENSE).

# OnlyTism - AI Facial Transformation

OnlyTism is an AI-powered platform that transforms faces in videos with unique characteristics. This repository contains the website code for the OnlyTism project.

## Features

- AI video transformation
- Token-based ecosystem
- Responsive design

## Technologies

- Next.js
- React
- Tailwind CSS
- HeroUI components

## Deployment

The site is configured for deployment to onlytism.com.

To deploy:
1. Run `./deploy.sh` to build the static site
2. Upload the `out` directory to your hosting provider
3. Ensure your DNS settings point to your hosting

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Visit [onlytism.com](https://onlytism.com) to see the live site.
