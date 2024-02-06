function isMathPatternPath(pathA: string, pathB: string) {
  const partsA = pathA.split('/')
  const partsB = pathB.split('/')

  if (partsA.length !== partsB.length)
    return false

  const isMatch = partsA.every((part: string, i: number) => {
    return part === partsB[i] || part.startsWith(':')
  })

  return isMatch
}

export function useBreadcrumbs() {
  const router = useRouter()
  const route = useRoute()
  const routes = router.getRoutes()

  // const { data: content } = await useAsyncData(
  //   `content-${route.path}`, () => queryContent().where({ _path: route.path }).findOne(),
  // )

  const HOMEPAGE = { name: 'Home', path: '/dashboard' }

  const breadcrumbs: Ref<Array<{ name: string, path: string }>> = ref([HOMEPAGE])

  function getBreadcrumbs(currentRoute: string): any[] {
    if (currentRoute === '')
      return [HOMEPAGE]

    const paths = getBreadcrumbs(currentRoute.slice(0, currentRoute.lastIndexOf('/')))

    const found = routes.filter(route => isMathPatternPath(route.path, currentRoute))

    const matchRoute = found.length > 1
      ? found.find(route => route.path === currentRoute)
      : found[0]

    return [
      ...paths,
      {
        path: currentRoute,
        name: matchRoute?.meta?.breadcrumb || matchRoute?.name || matchRoute?.path || currentRoute,
      },
    ]
  }

  watch(() => ({
    path: route.path,
    name: route.name,
    meta: route.meta,
    matched: route.matched,
  }), (route) => {
    if (route.path === '/')
      return

    breadcrumbs.value = getBreadcrumbs(route.path)
  }, {
    immediate: true,
  })

  return {
    breadcrumbs,
  }
}
