const config = [{
  title: 'Navigation',
  items: [{
    key: '1',
    icon: 'appstore',
    title: 'Dashboard',
    path: '/dashboard',
    importer: () => import('../containers/Dashboard')
  },
  {
    key: '2',
    icon: 'rocket',
    title: 'My Campaigns',
    path: '/my-campaigns',
    importer: () => import('../containers/MyCampaigns')
  },
  {
    key: '3',
    icon: 'flag',
    title: 'Brands',
    path: '/brands',
    importer: () => import('../containers/Brands')
  }]
}, {
  title: 'Subscriptions',
  items: [{
    key: '4',
    icon: 'bars',
    title: 'Orders',
    path: '/orders',
    importer: () => import('../containers/Orders')
  },
  {
    key: '5',
    icon: 'schedule',
    title: 'Subscriptions Plans',
    path: '/subscriptions-plans',
    importer: () => import('../containers/SubscriptionsPlans')
  }]
}, {
  title: 'Settings',
  items: [{
    key: '6',
    icon: 'user',
    title: 'Profile',
    path: '/profile',
    importer: () => import('../containers/Profile')
  },
  {
    key: '7',
    icon: 'global',
    title: 'Company',
    path: '/company',
    importer: () => import('../containers/Company')
  },
  {
    key: '8',
    icon: 'team',
    title: 'Manage Team',
    path: '/manage-team',
    importer: () => import('../containers/ManageTeam')
  },
  {
    key: '9',
    icon: 'notification',
    title: 'Notifications',
    path: '/notifications',
    importer: () => import('../containers/Notifications')
  }]
}]

export default config
