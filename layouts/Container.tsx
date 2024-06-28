import BottomRays from 'public/footer_rays.png';
import { Footer } from '@/components/Footer';
import Head from 'next/head';
import Image from 'next/legacy/image';
import { NavMenu } from '@/components/NavMenu';
import { PageTransition } from '@/components/PageTransition';
import { PageType } from '@/lib/types';
import Background from 'public/assets/Parabolic Pentagon.svg';
import siteMetadata from '@/data/siteMetadata';
import { useRouter } from 'next/router';
import { NextUIProvider } from '@nextui-org/react';

export function Container(props) {
  const { children, ...customMeta } = props;
  const router = useRouter();

  const meta = {
    title: siteMetadata.title,
    description: siteMetadata.description,
    imageUrl: null,
    type: PageType.WEBSITE,
    twitterHandle: siteMetadata.twitterHandle,
    canonicalUrl: customMeta.sponsoredArticle
      ? customMeta.sponsoredUrl
      : `${siteMetadata.siteUrl}${router.asPath}`,
    date: null,
    isArticle: false,
    ...customMeta
  };

  return (
    <NextUIProvider>
      <div className={`bg-white dark:bg-dark min-h-screen overflow-hidden`}>
        <Head>
          <title>{meta.title}</title>
          <meta name="robots" content="follow, index" />
          <meta content={meta.description} name="description" />
          <meta
            property="og:url"
            content={`${siteMetadata.siteUrl}${router.asPath}`}
          />
          <meta name="application-name" content="&nbsp;" />
          <meta name="msapplication-TileColor" content="#FFFFFF" />
          <meta
            name="msapplication-TileImage"
            content="/assets/mstile-144x144.png"
          />
          <meta
            name="msapplication-square70x70logo"
            content="/assets/mstile-70x70.png"
          />
          <meta
            name="msapplication-square150x150logo"
            content="/assets/mstile-150x150.png"
          />
          <meta
            name="msapplication-wide310x150logo"
            content="/assets/mstile-310x150.png"
          />
          <meta
            name="msapplication-square310x310logo"
            content="/assets/mstile-310x310.png"
          />
          <link rel="canonical" href={meta.canonicalUrl} />
          <meta property="og:type" content={meta.type} />
          <meta property="og:site_name" content="Andrea Cavagna" />
          <meta property="og:description" content={meta.description} />
          <meta property="og:title" content={meta.title} />
          <meta
            property="og:image"
            content={`${siteMetadata.siteUrl}/api/og?title=${encodeURIComponent(
              meta.title
            )}${meta.isArticle ? '&article' : ''}${
              meta.imageUrl ? `&imgSrc=${meta.imageUrl}` : ''
            }&description=${encodeURIComponent(meta.description)}`}
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content={meta.twitterHandle} />
          <meta name="twitter:title" content={meta.title} />
          <meta name="twitter:description" content={meta.description} />
          <meta
            name="twitter:image"
            content={`${siteMetadata.siteUrl}/api/og?title=${encodeURIComponent(
              meta.title
            )}${meta.isArticle ? '&article' : ''}${
              meta.imageUrl ? `&imgSrc=${meta.imageUrl}` : ''
            }&description=${encodeURIComponent(meta.description)}`}
          />
          {meta.date && (
            <meta property="article:published_time" content={meta.date} />
          )}

          <script
            defer
            src="https://cloud.umami.is/script.js"
            data-website-id="a7b7390c-2103-4434-afa1-1fe80ccbd3bc"
          ></script>
        </Head>
        <div className="absolute overflow-hidden bg-white dark:bg-dark ">
          <Image className="opacity-30 bottom-80" src={Background} alt="" />
        </div>
        <NavMenu />
        <main
          className={`flex flex-col mx-auto max-w-6xl justify-center px-4 prose prose-lg dark:prose-dark relative pt-24`}
        >
          <div className="z-10">
            <PageTransition>{children}</PageTransition>
            <Footer />
          </div>
        </main>
      </div>
    </NextUIProvider>
  );
}
