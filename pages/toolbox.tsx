import { getPageInfo, getToolboxData } from '@/lib/notion';
import { Container } from 'layouts/Container';
import CustomLink from '@/components/CustomLink';
import { GetStaticProps } from 'next';
import { ToolboxCard } from '@/components/ToolboxCard';

export default function Toolbox({ software }) {
  return (
    <Container>
      <h1>
        <span className="block text-base font-semibold tracking-wide text-center text-indigo-500 uppercase dark:text-teal-400">
          Toolbox
        </span>
        <span className="block max-w-2xl mx-auto mt-2 text-4xl font-bold leading-10 text-center sm:text-5xl">
          Software I use every day.
        </span>
      </h1>
      <div className="space-y-24">
        <div className="space-y-12">
          <h2>Software</h2>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
            {software?.map((item, index) => (
              <ToolboxCard key={index} item={item}></ToolboxCard>
            ))}
          </div>
        </div>
        <div className="flex justify-center"></div>
        <p className="text-base">
          Influenced by{' '}
          <CustomLink href="https://www.braydoncoyer.dev/toolbox">
            Braydon Coyer
          </CustomLink>
          .
        </p>
      </div>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  console.log('----------------------------');
  const data = await getPageInfo(process.env.TOOLBOX_PAGE_ID);
  const software = await getToolboxData(process.env.TOOLBOX_PAGE_ID);
  console.log(process.env.TOOLBOX_PAGE_ID);
  return {
    props: {
      toolboxContent: data,
      software
    },
    revalidate: 1800
  };
};
