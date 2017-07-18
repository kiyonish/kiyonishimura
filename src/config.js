require('babel-polyfill')

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development']

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  app: {
    title: 'Kiyo Nishimura',
    description: 'Front end web developer.',
    head: {
      titleTemplate: 'Kiyo Nishimura: %s',
      meta: [
        {name: 'description', content: 'Front end web developer.'},
        {charset: 'utf-8'}
        // {property: 'og:site_name', content: 'Kiyo Nishimura'},
        // {property: 'og:image', content: 'logo.jpg'},
        // {property: 'og:locale', content: 'en_US'},
        // {property: 'og:title', content: 'React Redux Example'},
        // {property: 'og:description', content: 'All the modern best practices in one example.'},
        // {property: 'og:card', content: 'summary'},
        // {property: 'og:site', content: '@erikras'},
        // {property: 'og:creator', content: '@erikras'},
        // {property: 'og:image:width', content: '200'},
        // {property: 'og:image:height', content: '200'}
      ]
    }
  },

}, environment)
