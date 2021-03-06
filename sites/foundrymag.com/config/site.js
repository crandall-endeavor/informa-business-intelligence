const navigation = require('./navigation');
const dragonForms = require('./dragon-forms');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  dragonForms,
  identityX: {
    enabled: true,
    appId: '5df0e8b205aa567ebb43fc35',
    comments: { enabled: true },
  },
  homePageSections: [
    { alias: 'ask-the-expert', name: 'Ask the Expert' },
    { alias: 'molds-cores', name: 'Molds/Cores' },
    { alias: 'simulation-it', name: 'Simulation/IT' },
  ],
  logos: {
    navbar: {
      src: 'https://img.foundrymag.com/files/base/ebm/foundrymag/image/static/foundrymag-logo.png?h=30',
      srcset: [
        'https://img.foundrymag.com/files/base/ebm/foundrymag/image/static/foundrymag-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://img.foundrymag.com/files/base/ebm/foundrymag/image/static/foundrymag-logo.png?h=45',
      srcset: [
        'https://img.foundrymag.com/files/base/ebm/foundrymag/image/static/foundrymag-logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/pages/Foundry-Management-Technology/481245725222286', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/FoundryMag', target: '_blank' },
  ],
  gam: {
    accountId: process.env.GAM_ACCCOUNT_ID || '3834',
    basePath: 'foundry.home',
    lazyLoad: {
      enabled: true, // set to true to enable lazy loading
      fetchMarginPercent: 100, // fetch ad when one viewport away
      renderMarginPercent: 50, // render ad when half viewport away
      mobileScaling: 2, // double these on mobile
    },
  },
  gtm: {
    containerId: 'GTM-59NC7KQ',
  },
  algolia: {
    applicationId: '80YJALCHBD',
    searchApiKey: 'ZWE3YmVlNWYyYmIzN2E5YWNlNTNiNDE2N2FlOGQyZDYyOTQ0OGU5MTQ3MWIyYmZlMjFhMTczNDVhMzMxNmRkN2ZpbHRlcnM9Tk9UJTIwdHlwZSUzQWNvbnRhY3QlMjBBTkQlMjBOT1QlMjB0eXBlJTNBcHJvbW90aW9u',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  newsletterSubscribeLink: dragonForms.getFormUrl('newsletterSubscribe'),
  inquiry: {
    // the subject line of the email sent to the brand and/or the company/advertiser
    notificationSubject: 'FoundryMag.com has sent you a new sales inquiry.',
    // the subject line of the email sent to the user who submitted the form
    confirmationSubject: 'Your inquiry was received.',
    enabled: true,
    directSend: true, // enable this to directly send to the company
    sendTo: 'notifications@foundrymag.com',
    sendFrom: 'FoundryMag.com <noreply@baseplatform.io>',
    sendBcc: 'eActivity@endeavorb2b.com',
    logo: 'https://img.foundrymag.com/files/base/ebm/foundrymag/image/static/foundrymag-logo.png?h=60',
    bgColor: '#ffffff',
  },
};
