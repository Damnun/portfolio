import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import * as gtag from "../lib/gtag";
import {useRouter} from "next/router";
import {useEffect} from "react";

/**
 * @description SEO를 위해 본인의 정보로 수정해주세요.
 */
const DEFAULT_SEO = {
  title: "이재헌 | Back-End Dev",
  description: "안녕하세요, 백엔드 개발자 홍길동입니다.",
  canonical: "https://github.com/Damnun",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://github.com/Damnun",
    title: "이재헌 | Back-End Dev",
    site_name: "이재헌 | Back-End Dev",
    images: [
      {
        url: "/share.png",
        width: 285,
        height: 167,
        alt: "이재헌 | Back-End Dev",
      },
    ],
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
  ],
  additionalMetaTags: [
    {
      name: "application-name",
      content: "이재헌 | Back-End Dev",
    },
    {
      name: "msapplication-tooltip",
      content: "이재헌 | Back-End Dev",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
  ],
};

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("hashChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("hashChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <DefaultSeo {...DEFAULT_SEO} />
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};



export default App;
