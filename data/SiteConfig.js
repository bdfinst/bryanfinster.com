const config = {
  siteTitle: 'Bryan Finster', // Site title.
  siteTitleShort: 'Bryan Finster', // Short site title for home screen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: 'Bryan Finster', // Alternative site title for SEO.
  siteLogo: '/logos/logo-1024.png', // Logo used for SEO and manifest.
  siteUrl: 'https://bryanfinster.com', // Domain of your website without pathPrefix.
  pathPrefix: '', // Prefixes all links.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "A blog about improving developers' lives", // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml', // Path to the RSS file.
  siteRssTitle: "Bryan Finster' blog RSS feed", // Title of the RSS feed
  siteFBAppID: '', // FB Application ID for using app insights
  siteGATrackingID: '', // Tracking code ID for google analytics.
  disqusShortname: '', // Disqus shortname.
  dateFromFormat: 'YYYY-MM-DD', // Date format used in the frontmatter.
  dateFormat: 'YYYY-MM-DD', // Date format for display.
  userName: 'Bryan Finster', // Username to display in the author segment.
  userEmail: 'bryan.finster@gmail.com', // Email used for RSS feed's author segment
  userTwitter: '@bryanfinster', // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: 'Bentonville, AR', // User location to display in the author segment.
  userAvatar: '/logos/avatar.png', // User avatar to display in the author segment.
  userDescription: 'This is me', // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: 'GitHub',
      url: 'https://github.com/bdfinst/bryanfinster.com',
      iconClassName: 'fa fa-github',
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/bryanfinster',
      iconClassName: 'fa fa-twitter',
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/bryan-finster/',
      iconClassName: 'fa fa-linkedin',
    },
    {
      label: 'Email',
      url: 'mailto:bryan.finster@gmail.com',
      iconClassName: 'fa fa-envelope',
    },
  ],
  copyright: `Copyright © 2020. Bryan Finster`, // Copyright string for the footer of the website and RSS feed.
}

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = ''
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/')
  config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/')
  config.siteRss = `/${config.siteRss}`

module.exports = config
