import site from '../data/site'

/**
 * Google Tag Manager script component (for head)
 */
export function GTMScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer', '${site.gtm}');`,
      }}
    />
  )
}

/**
 * Google Tag Manager noscript component (for body)
 */
export function GTMNoscript() {
  return (
    <noscript>
      <iframe
        src={`//www.googletagmanager.com/ns.html?id=${site.gtm}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
        title="Google Tag Manager"
      />
    </noscript>
  )
}
