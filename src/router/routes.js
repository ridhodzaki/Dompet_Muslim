
const routes = [
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      { path: 'index', component: () => import('pages/Index.vue') },
      { path: '', component: () => import('pages/home.vue') },
      { path: 'bpjs', component: () => import('pages/bpjs.vue') },
      { path: 'isisal', component: () => import('pages/saldo.vue') },
      { path: 'pulsa', component: () => import('pages/pulsa.vue') },
      { path: 'token', component: () => import('pages/token.vue') },
      { path: 'trimau', component: () => import('pages/terima_uang.vue') },
      { path: 'kirimu', component: () => import('pages/kirim_uang.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
