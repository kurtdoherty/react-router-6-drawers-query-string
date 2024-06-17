function useGetDrawerPath (path) {
  const url = new URL(path, 'http://example.com');
  const params = new URLSearchParams(url.search);
  const drawerPath = params.get('d') || ''
  return drawerPath
}

export default useGetDrawerPath
