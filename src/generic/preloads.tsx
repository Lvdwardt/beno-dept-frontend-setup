import site from '../data/site'

export function Preloads() {
  const preconnect = 'preconnect' in site && Array.isArray(site.preconnect) ? site.preconnect : []
  const preload = 'preload' in site && Array.isArray(site.preload) ? site.preload : []
  const modulepreload =
    'modulepreload' in site && Array.isArray(site.modulepreload) ? site.modulepreload : []

  return (
    <>
      {preconnect.map(item => (
        <link rel="preconnect" href={item.url} />
      ))}
      {preload.map(item => (
        <link rel="preload" href={item.url} as={item.as} />
      ))}
      {modulepreload.map(item => (
        <link rel="modulepreload" href={item.url} />
      ))}
    </>
  )
}
