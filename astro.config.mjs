import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";
import DecapCMS from "astro-decap-cms";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify(),
  integrations: [
    DecapCMS({
      config: {
        local_backend: true,
        backend: {
          name: "git-gateway",
          branch: "main",
          repo: "digthedill/thicc-lizzy-website",
          // base_url: 'https://skh8laxaii.execute-api.us-east-2.amazonaws.com',
          // auth_endpoint: 'dev/auth',
        },
        media_folder: "src/assets/images",
        public_folder: "src/assets/images",

        collections: [
          {
            name: "Video",
            label: "Video",
            folder: "src/content/videos",
            format: "frontmatter",
            create: true,
            editor: {
              preview: false,
            },
            fields: [
              { label: "Youtube", name: "youtube", widget: "string" },
              { label: "Title", name: "title", widget: "string" },
              { label: "Location", name: "location", widget: "string" },
              {
                label: "Featured",
                name: "featured",
                widget: "boolean",
                required: false,
              },
            ],
          },
          {
            name: "Member",
            label: "Member",
            folder: "src/content/members",
            format: "frontmatter",
            create: true,
            editor: {
              preview: false,
            },
            fields: [
              { label: "Title", name: "title", widget: "string" },
              { label: "Description", name: "description", widget: "string" },
              {
                label: "Img",
                name: "image",
                widget: "image",
                choose_url: true,
                required: false,
              },
            ],
          },
          {
            name: "Show",
            label: "Show",
            folder: "src/content/shows",
            format: "frontmatter",
            create: true,
            editor: {
              preview: false,
            },
            fields: [
              { label: "Title", name: "title", widget: "string" },
              { label: "Date", name: "date", widget: "datetime" },
              {
                label: "Link",
                name: "link",
                widget: "string",
                required: false,
              },
            ],
          },
          {
            label: "Pages",
            name: "pages",
            files: [
              {
                label: "Home Page",
                name: "home",
                file: "content/pageData/home.yml",
                fields: [
                  { label: "Title", name: "title", widget: "string" },
                  { label: "Description", name: "intro", widget: "markdown" },
                  {
                    label: "Hero Image",
                    name: "img",
                    widget: "image",
                    choose_url: true,
                  },
                ],
              },
              {
                label: "Contact Page",
                name: "contact",
                file: "content/pageData/contact.yml",
                fields: [
                  { label: "Description", name: "intro", widget: "markdown" },
                ],
              },
              {
                label: "About",
                name: "about",
                file: "content/pageData/about.yml",
                fields: [
                  { label: "Title", name: "title", widget: "string" },
                  { label: "Description", name: "intro", widget: "markdown" },
                ],
              },
            ],
          },
        ],
      },
    }),
  ],
});
