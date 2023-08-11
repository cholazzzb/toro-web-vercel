import { Flex, Text } from '@chakra-ui/react';
import { Blog, allBlogs } from 'contentlayer/generated';
import {
  GetStaticPaths,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from 'next';

import { Layout } from 'components/Layout';
import { useCallback, useState } from 'react';
import NavButton from 'src/components/NavButton';
import Show from 'src/components/Show';

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
  const [openModal, setOpenModal] = useState(false);
  const toggleModal = useCallback(() => {
    setOpenModal((prev) => !prev);
  }, []);

  return (
    <Layout>
      <Show when={!openModal}>
        <Flex marginX="10">
          <article>
            <div>
              <Text fontSize={20} fontWeight="bold">
                {props.blog.title}
              </Text>
              <time dateTime={props.blog.date}>
                <Text fontSize={12}>
                  {new Date(props.blog.date).toLocaleDateString()}
                </Text>
              </time>
            </div>
            <Flex marginTop={10}>
              <div dangerouslySetInnerHTML={{ __html: props.blog.body.html }} />
            </Flex>
          </article>
        </Flex>
      </Show>
      <NavButton open={openModal} onClick={toggleModal} />
    </Layout>
  );
};

export default PostLayout;
