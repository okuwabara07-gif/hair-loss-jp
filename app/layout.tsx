import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: '育毛Lab',
  description: '薄毛・育毛情報メディア',
  openGraph: { title: '育毛Lab', description: '薄毛・育毛情報メディア', type: 'website', locale: 'ja_JP', siteName: '育毛Lab' },
  twitter: { card: 'summary_large_image', title: '育毛Lab', description: '薄毛・育毛情報メディア' },
  robots: { index: true, follow: true },
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <meta name="google-site-verification" content="8c64b1447c588760" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-SVQXY5C3PW"></script>
        <script dangerouslySetInnerHTML={{__html:`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-SVQXY5C3PW');`}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html:`{"@context": "https://schema.org", "@type": "WebSite", "name": "育毛Lab", "description": "薄毛・育毛情報メディア", "url": "https://hair-loss-jp.vercel.app", "publisher": {"@type": "Organization", "name": "AOKAE合同会社"}}`}} />
      </head>
      <body>{children}</body>
    </html>
  )
}