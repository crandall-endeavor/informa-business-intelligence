const navigation = require('./navigation');
const dragonForms = require('./dragon-forms');
const leaders = require('./leaders');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  dragonForms,
  leaders,
  identityX: {
    enabled: true,
    appId: '5df0082605aa5695a243fc04',
    comments: { enabled: true },
  },
  homePageSections: [
    { alias: 'business-technology', name: 'Business & Technology' },
    { alias: 'mergers-acquisitions', name: 'Mergers & Acquisitions' },
    { alias: 'news-analysis/headline-news', name: 'Headline News' },
  ],
  logos: {
    navbar: {
      src: 'https://img.rermag.com/files/base/ebm/rermag/image/static/rermag-logo.png?h=30',
      srcset: [
        'https://img.rermag.com/files/base/ebm/rermag/image/static/rermag-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://img.rermag.com/files/base/ebm/rermag/image/static/rermag-logo.png?h=45',
      srcset: [
        'https://img.rermag.com/files/base/ebm/rermag/image/static/rermag-logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/rentalequipmentregister', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/RERmagazine', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/groups/4078580/', target: '_blank' },
  ],
  gam: {
    accountId: process.env.GAM_ACCCOUNT_ID || '3834',
    basePath: 'rermag.home',
    lazyLoad: {
      enabled: true, // set to true to enable lazy loading
      fetchMarginPercent: 100, // fetch ad when one viewport away
      renderMarginPercent: 50, // render ad when half viewport away
      mobileScaling: 2, // double these on mobile
    },
  },
  gtm: {
    containerId: 'GTM-WDNJSMG',
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
    notificationSubject: 'RER Mag has sent you a new sales inquiry.',
    // the subject line of the email sent to the user who submitted the form
    confirmationSubject: 'Your inquiry was received.',
    enabled: true,
    directSend: true, // enable this to directly send to the company
    sendTo: 'notifications@rermag.com',
    sendFrom: 'RERMag.com <noreply@baseplatform.io>',
    sendBcc: 'eActivity@endeavorb2b.com',
    logo: 'https://img.rermag.com/files/base/ebm/rermag/image/static/rermag-logo.png?h=60',
    bgColor: '#ffffff',
  },
};
