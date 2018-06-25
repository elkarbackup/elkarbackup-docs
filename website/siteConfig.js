/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config.html for all the possible
// site configuration options.

const siteConfig = {
  title: 'Elkarbackup Docs' /* title for your website */,
  tagline: 'Keep your data safe from harm',
  //url: 'https://docs.elkarbackup.org' /* your website url */,
  //baseUrl: '/' /* base url for your project */,
  url: 'https://elkarbackup.github.io',
  baseUrl: '/elkarbackup-docs/',
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',
  editUrl: 'https://github.com/elkarbackup/elkarbackup-docs/edit/master/docs/',

  // Used for publishing and more
  projectName: 'elkarbackup-docs',
  organizationName: 'elkarbackup',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'installation', label: 'Installation'},
    {doc: 'introduction', label: 'Documentation'},
    {doc: 'troubleshooting', label: 'Troubleshooting'},
    {search: true}
  ],

  /* path to images for header/footer */
  /*
  headerIcon: 'img/docusaurus.svg',
  footerIcon: 'img/docusaurus.svg',
  favicon: 'img/favicon.png',
  */

  /* colors for website */
  colors: {
    primaryColor: '#1A2B34',
    secondaryColor: '#808080',
  },

  /* custom fonts for website */
  fonts: {
    elkarbackupFont: [
      "Roboto",
      "sans-serif"
    ]
  },
  /*fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },*/

  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' ElkarBackup',

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags
  scripts: [
    'https://buttons.github.io/buttons.js',
    'https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js',
    '/js/elkarbackup.js'
  ],
  
  algolia: {
    apiKey: process.env.ALGOLIA_PRETTIER_API_KEY,
    indexName: "elkarbackup"
  },

  /* On page navigation for the current documentation page */
  onPageNav: 'separate',

  /* Open Graph and Twitter card images */
  ogImage: 'img/docusaurus.png',
  twitterImage: 'img/docusaurus.png',

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
  ebWebsite: 'https://www.elkarbackup.org',
  ebRepo: 'https://github.com/elkarbackup/elkarbackup',
  ebDocsRepo: 'https://github.com/elkarbackup/elkarbackup-docs',
  ebTwitter: 'https://twitter.com/elkarbackup/',
};

module.exports = siteConfig;
