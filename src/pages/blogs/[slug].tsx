import { Blog, allBlogs } from 'contentlayer/generated';
import {
  GetStaticPaths,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from 'next';

import { Layout } from 'components/Layout';

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: 'blocking',
    paths: allBlogs.map((blog) => ({
      params: {
        slug: blog._raw.flattenedPath,
      },
    })),
  };
};

export const getStaticProps = async (
  staticPropsContext: GetStaticPropsContext,
): Promise<GetStaticPropsResult<{}>> => {
  const { params } = staticPropsContext;

  const found = allBlogs.find(
    (bl) => bl._raw.flattenedPath.split('/')?.[1] === params!.slug!,
  );

  try {
    if (!found) throw Error('Not Found');
    return { props: { blog: found } };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

const PostLayout = (props: { blog: Blog }) => {
  return (
    <Layout>
      <article>
        <div>
          <time dateTime={props.blog.date}>
            Date: {new Date(props.blog.date).toLocaleDateString()}
          </time>
          <h1>{props.blog.title}</h1>
        </div>
        <div dangerouslySetInnerHTML={{ __html: props.blog.body.html }} />
      </article>
    </Layout>
  );
};

export default PostLayout;
