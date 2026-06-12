import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://xvscreations.com",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://xvscreations.com/about",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: "https://xvscreations.com/services",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://xvscreations.com/work",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://xvscreations.com/agency",
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: "https://xvscreations.com/terms-and-conditions",
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: "https://xvscreations.com/privacy-policy",
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: "https://xvscreations.com/cookies-policy",
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: "https://xvscreations.com/contact",
      lastModified: new Date(),
      priority: 0.5,
    },
  ];
}
