import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-KN98DCR');`}}></script>
        <meta name="description" content="Ivelin Iliev | Front End Web Developer in London" />
        <meta name="contact" content="ivelin.iliev@hotmail.com" />
        <meta name="copyright" content="Copyright (c)2015-2016 Ivelin Iliev. All Rights Reserved." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Head />
        <body>
          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KN98DCR"
            height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
