import { createGetInitialProps } from "@mantine/next";
import Document, { Head, Html, Main, NextScript } from "next/document";
import Image from "next/image";
import Script from "next/script";

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  static getInitialProps = getInitialProps;

  render() {
    return (
      <Html>
        <Head>
          {/* Google Tag Manager script */}
          <Script
            id="google-tag-manager-script"
            src="https://www.googletagmanager.com/gtag/js?id=G-EKBBTR5VRM"
            strategy="beforeInteractive"
          />
          <Script
            id="google-tag-manager-inline-script"
            strategy="afterInteractive"
          >
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-EKBBTR5VRM');
            `}
          </Script>

          {/* Facebook Pixel tracking code */}
          <Script
            id="facebook-pixel-script"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s) {
                  if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                  n.queue=[];t=b.createElement(e);t.async=!0;
                  t.src=v;s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)}(window, document,'script',
                  'https://connect.facebook.net/en_US/fbevents.js');
                  fbq('init', '2155365261466671');
                  fbq('track', 'PageView');
              `,
            }}
          />
          <noscript>
            <Image
              src="https://www.facebook.com/tr?id=2155365261466671&ev=PageView&noscript=1"
              height={1}
              width={1}
              alt=""
            />
          </noscript>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
