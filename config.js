const moment = require('moment')

const currentYear = moment()
  .format('YYYY')

module.exports = {
  url: 'https://bryanfinster.com',
  pathPrefix: '/',
  title: 'Continuous DevOps',
  subtitle: 'Helping developers sleep better, one constraint at a time.',
  copyright: `©${currentYear} Bryan Finster: All rights reserved.`,
  disqusShortname: '',
  postsPerPage: 4,
  googleAnalyticsId: '',
  useKatex: false,
  menu: [
    {
      label: 'Articles',
      path: '/'
    },
    {
      label: 'About me',
      path: '/pages/about'
    },
    {
      label: 'Contact me',
      path: '/pages/contacts'
    }
  ],
  author: {
    name: 'Bryan Finster',
    photo: '/avatar.png',
    bio: 'Technical coach and DevOps Value Stream Architect with a passion for helping developers sleep better at night.',
    contacts: {
      email: 'bryan.finster@gmail.com',
      facebook: '',
      telegram: '',
      twitter: '@bryanfinster',
      github: 'bdfinst',
      rss: '',
      vkontakte: '',
      linkedin: 'bryan-finster/',
      instagram: '',
      line: '',
      gitlab: '',
      weibo: '',
      codepen: '',
      youtube: '',
      soundcloud: '',
    }
  }
};
