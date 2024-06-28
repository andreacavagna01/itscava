import { ButtonType } from '@/lib/types';
import { convertToArticleList, getPublishedArticles } from '@/lib/notion';
import profileImage from 'public/assets/headerImage.jpg';

import { ArticleList } from '@/components/ArticleList';
import { Button } from '@/components/Button';
import { Container } from 'layouts/Container';
import { GetStaticProps } from 'next';
import Image from 'next/legacy/image';
import { generateRssFeed } from 'scripts/generate-rss';
import { useRouter } from 'next/router';
import { Appointment } from '@/components/Appointment';
import GithubCalendar from '@/components/GitHubCalendar';

export default function Home({ recentArticles }) {
  const { push } = useRouter();
  return (
    <Container>
      <div>
        <div>
          <div className="grid items-center grid-cols-1 mt-12 text-center md:mt-24 md:text-left md:grid-cols-6">
            <h1 className="order-2 col-span-5 text-4xl leading-tight md:leading-normal md:order-1 sm:text-5xl">
              I'm{' '}
              <span className="text-teal-500 dark:text-teal-400">Andrea</span>.
              I'm a developer by night, Product Manager by day and I like to
              write blog posts.
            </h1>
            <div className="order-1 md:order-2">
              <Image
                alt="Andrea Cavagna"
                height={220}
                width={220}
                src={profileImage}
                placeholder="blur"
                className="col-span-1 rounded-full"
                layout="fixed"
              />
            </div>
          </div>
          <div className="space-y-6 text-center md:text-left md:space-y-0 md:space-x-4">
            <Button
              buttonType={ButtonType.PRIMARY}
              onButtonClick={() => push('/blog')}
            >
              Read the blog
            </Button>
            <Button
              buttonType={ButtonType.SECONDARY}
              onButtonClick={() => push('/about')}
            >
              More about me
            </Button>
          </div>
        </div>
        <hr className="hr"></hr>
        <div>
          <h2>I love to share my knowledge through writing.</h2>
          <p>Check out a few of my most recent publishings.</p>
          <ArticleList articles={recentArticles} />
          <div className="my-16">
            <Button
              buttonType={ButtonType.PRIMARY}
              onButtonClick={() => push('/blog')}
            >
              See all articles
            </Button>
          </div>
          <div className="mt-16">
            <h2>Open-source is a big part of my life in the past years</h2>
            <p>
              There are so many ways to contribute to the OSS community. Here
              you can see just a few of them:
            </p>
            <GithubCalendar username={'andreacavagna01'}></GithubCalendar>
          </div>
          <div className="mt-16">
            <h2>Share a moment with me</h2>
            <p>How I can help you?</p>
            <Appointment></Appointment>
          </div>
        </div>
      </div>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getPublishedArticles(process.env.BLOG_DATABASE_ID);
  const { articles } = convertToArticleList(data);
  await generateRssFeed();

  return {
    props: {
      recentArticles: articles.slice(0, 3)
    },
    revalidate: 30
  };
};
