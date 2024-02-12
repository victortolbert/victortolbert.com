function dynamicPropsFn(route) {
  const now = new Date()
  return {
    name: `${now.getFullYear() + Number.parseInt(route.params.years)}!`,
  }
}
export const buyerRoutes = [
  {
    path: '/buyers/avails',
    name: 'buyers-avails',
  },
  {
    path: '/buyers/avails/request',
    name: 'buyers-avails-request',
  },
  {
    path: '/buyers/avails/request/summary',
    name: 'buyers-avails-request-summary',
  },

]

export const morehouse87Routes = [
  {
    path: '/morehouse1987',
    children: [
      {
        path: '',
        name: 'morehouse1987',
      },
      {
        path: 'events',
        name: 'morehouse1987-events',
      },
      {
        path: 'photos',
        name: 'morehouse1987-photos',
      },
      {
        path: 'contact',
        name: 'morehouse1987-contact',
      },
      {
        path: 'resources',
        name: 'morehouse1987-resources',
      },
    ],
  },
  // ,
  // {
  //   path: '/morehouse1987',
  //   name: 'morehouse1987',
  // },
  // {
  //   path: '/morehouse1987/events',
  //   name: 'morehouse1987-events',
  // },
  // {
  //   path: '/morehouse1987/photos',
  //   name: 'morehouse1987-photos',
  // },
  // {
  //   path: '/morehouse1987/contact',
  //   name: 'morehouse1987-contact',
  // },
  // {
  //   path: '/morehouse1987/resources',
  //   name: 'morehouse1987-resources',
  // }
]

export const sellerRoutes = [
  {
    path: '/sellers/order-management/pending-orders',
    name: 'sellers-order-management-pending-orders',
    props: { name: 'world' },
  },
  {
    path: '/sellers/order-management/pending-orders/:id',
    name: 'sellers-order-management-pending-orders-id',
    props: true,
  },
  {
    path: '/sellers/order-management/pending-makegoods',
    name: 'sellers-order-management-pending-makegoods',
  },
  {
    path: '/sellers/order-management/pending-makegoods/:id',
    name: 'sellers-order-management-pending-makegoods-id',
  },
  {
    path: '/sellers/order-management/pending-makegoods/:id/:offer',
    name: 'sellers-order-management-pending-makegoods-id-offer',
  },
  {
    path: '/sellers/order-management/open-preempts',
    name: 'sellers-order-management-open-preempts',
  },
  {
    path: '/sellers/order-management/order-search',
    name: 'sellers-order-management-order-search',
  },
  {
    path: '/sellers/order-management/order-search/:id',
    name: 'sellers-order-management-order-search-id',
  },
  {
    path: '/sellers/reporting/program-revenue',
    name: 'sellers-reporting-program-revenue',
  },
  {
    path: '/sellers/reporting/account-performance',
    name: 'sellers-reporting-account-performance',
  },
  {
    path: '/sellers/reporting/order-reporting',
    name: 'sellers-reporting-order-reporting',
  },
  {
    path: '/sellers/reporting/order-reporting/:id',
    name: 'sellers-reporting-order-reporting-id',
  },
  {
    path: '/sellers/price-guide',
    // children: [
    //   {
    //     path: '',
    //     name: 'sellers-price-guide-id',
    //     props: dynamicPropsFn
    //   } // custom logic for mapping between route and props
    // ]
  },
  {
    path: '/sellers/avails',
    name: 'sellers-avails',
  },
  {
    path: '/sellers/avails/:id',
    name: 'sellers-avails-id',
  },
  {
    path: '/sellers/avails/:id/edit',
    name: 'sellers-avails-id-edit',
  },
  {
    path: '/sellers/campaign-performance',
    name: 'sellers-campaign-performance',
  },
  {
    path: '/sellers/campaign-performance/:id',
    name: 'sellers-campaign-performance-id',
  },
  {
    path: '/settings',
    name: 'settings',
    children: [
      {
        path: 'user',
        name: 'settings-user',
      },
      {
        path: 'specials',
        name: 'settings-specials',
      },
      {
        path: 'premium-advertisers',
        name: 'settings-premium-advertisers',
      },
      {
        path: 'reps',
        name: 'settings-reps',
      },
      {
        path: 'display',
        name: 'settings-display',
      },
    ],
  },

]

export const ticketRoutes = [
  {
    path: '/tickets',
    name: 'tickets',
  },
  {
    path: '/tickets/create',
    name: 'tickets-create',
  },
  {
    path: '/tickets/:id',
    name: 'tickets-id',
  },
]
