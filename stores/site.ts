import { defineStore } from 'pinia'

export const useSiteStore = defineStore('site', {
  state() {
    return {
      topNav: [
        { name: 'Home', url: '/' },
        { name: 'About', url: '/about/' },
        { name: 'Pricing', url: '/pricing/' },
        { name: 'Contact Us', url: '/contact/' },
      ],
      social: [
        { name: 'Instagram', url: 'https://instagram.com/victortolbert', icon: 'fa fa-instagram' },
        { name: 'LinkedIn', url: 'https://linkedin.com/in/victortolbert', icon: 'fa-linkedin' },
        { name: 'Twitter', url: 'https://twitter.com/victortolbert', icon: 'fa fa-twitter' },
        { name: 'GitHub', url: 'https://github.com/victortolbert', icon: 'fa fa-github' },
      ],
      footerNav: {
        categories: [
          {
            name: 'Categories',
            links: [
              { name: 'First', url: '#' },
              { name: 'Second', url: '#' },
              { name: 'Third', url: '#' },
              { name: 'Fourth', url: '#' },
            ],
          },
          {
            name: 'Categories',
            links: [
              { name: 'First', url: '#' },
              { name: 'Second', url: '#' },
              { name: 'Third', url: '#' },
              { name: 'Fourth', url: '#' },
            ],
          },
          {
            name: 'Categories',
            links: [
              { name: 'First', url: '#' },
              { name: 'Second', url: '#' },
              { name: 'Third', url: '#' },
              { name: 'Fourth', url: '#' },
            ],
          },
        ],
      },
    }
  },
  getters: {
    contentEndpoint() {
      return location.hostname.includes('localhost') ? 'http://localhost:8000/api/content' : '/api/content'
    },
  },
})
