export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "PayDexBro",
  description: "Real-time cryptocurrency pair tracking and analytics",
  navItems: [
    {
      label: "Deploy Wallet",
      href: "/deploy-wallet",
    },
    {
      label: "FAQ",
      href: "/faq",
    },
  ],
  navMenuItems: [
    {
      label: "Deploy Wallet",
      href: "/deploy-wallet",
    },
    {
      label: "FAQ",
      href: "/faq",
    },
  ],
  links: {
    github: "https://github.com/paydexbro",
    twitter: "https://twitter.com/paydexbro",
    docs: "https://docs.paydexbro.com",
    discord: "https://discord.gg/paydexbro",
    telegram: "https://t.me/paydexbrocom",
  },
};
