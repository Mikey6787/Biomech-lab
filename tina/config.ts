import { defineConfig } from 'tinacms';
export default defineConfig({
 branch: 'main',
 clientId: '580c9f37-e71e-4ca1-a82b-09f6ae128c4c',
 token: process.env.TINA_TOKEN,
 build: {publicFolder:'public',outputFolder:'admin'},
 media: {tina:{publicFolder:'public',mediaRoot:'media'}},
 schema: {collections:[{name:'website',label:'Website',path:'',format:'json',match:{include:'site'},ui:{allowedActions:{create:false,delete:false},router:()=> '/'},fields:[
  {
    "name": "hero_eyebrow",
    "label": "Home: small heading",
    "type": "string"
  },
  {
    "name": "headline",
    "label": "Home: headline",
    "type": "string"
  },
  {
    "name": "intro",
    "label": "Home: introduction",
    "type": "string",
    "ui": {
      "component": "textarea"
    }
  },
  {
    "name": "app_name",
    "label": "Software name",
    "type": "string"
  },
  {
    "name": "app_description",
    "label": "Software description",
    "type": "string",
    "ui": {
      "component": "textarea"
    }
  },
  {
    "name": "software_heading",
    "label": "Software section heading",
    "type": "string"
  },
  {
    "name": "roadmap_heading",
    "label": "Roadmap heading",
    "type": "string"
  },
  {
    "name": "roadmap_intro",
    "label": "Roadmap introduction",
    "type": "string",
    "ui": {
      "component": "textarea"
    }
  },
  {
    "name": "about_heading",
    "label": "About heading",
    "type": "string"
  },
  {
    "name": "author_name",
    "label": "Your name",
    "type": "string"
  },
  {
    "name": "author_bio",
    "label": "Your biography",
    "type": "string",
    "ui": {
      "component": "textarea"
    }
  },
  {
    "name": "features",
    "label": "Features",
    "type": "object",
    "list": true, "ui": {itemProps: (item) => ({label: item?.title || "Item"})},
    "fields": [
      {
        "name": "title",
        "label": "Title",
        "type": "string"
      },
      {
        "name": "description",
        "label": "Description",
        "type": "string",
        "ui": {
          "component": "textarea"
        }
      }
    ]
  },
  {
    "name": "roadmap",
    "label": "Roadmap",
    "type": "object",
    "list": true, "ui": {itemProps: (item) => ({label: item?.title || "Item"})},
    "fields": [
      {
        "name": "title",
        "label": "Title",
        "type": "string"
      },
      {
        "name": "description",
        "label": "Description",
        "type": "string",
        "ui": {
          "component": "textarea"
        }
      }
    ]
  },
  {
    "name": "workspace_image",
    "label": "Workspace screenshot",
    "type": "image"
  },
  {
    "name": "signals_image",
    "label": "Signal plotting screenshot",
    "type": "image"
  },
  {
    "name": "scholar_url",
    "label": "Google Scholar URL",
    "type": "string"
  },
  {
    "name": "linkedin_url",
    "label": "LinkedIn URL",
    "type": "string"
  },
  {
    "name": "support_url",
    "label": "Support development URL",
    "type": "string"
  },
  {
    "name": "download_url",
    "label": "Direct DMG download URL (optional)",
    "type": "string"
  }
]}]}
});
