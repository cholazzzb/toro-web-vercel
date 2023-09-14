'use client';

import Link from 'next/link';
import { PropsWithChildren, useCallback, useState } from 'react';

import { allBlogs } from 'contentlayer/generated';
import { Glassy } from 'src/components/Glass';
import NavButton from 'src/components/NavButton';
import Show from 'src/components/Show';
import { Text } from 'src/components/Text';

type BlogsProps = {};

function Blogs(_props: PropsWithChildren<BlogsProps>) {
  const [openModal, setOpenModal] = useState(false);
  const toggleModal = useCallback(() => {
    setOpenModal((prev) => !prev);
  }, []);

  return (
    <>
      <Show when={!openModal}>
        {allBlogs.map((blog) => {
          return (
            <Link href={`/blogs/${blog.slug}`} key={blog._id}>
              <Glassy
                direction="column"
                borderColor="white"
                borderWidth="1px"
                padding="20px"
                marginInline="30px"
                marginBlockEnd="15px"
                borderRadius="7px"
                backgroundColor="rgba(255,255,255,0.3)">
                <Text>{new Date(blog.date).toLocaleDateString()}</Text>
                <Text size="lg">{blog.title}</Text>
              </Glassy>
            </Link>
          );
        })}
      </Show>
      <NavButton open={openModal} onClick={toggleModal} />
    </>
  );
}

export default Blogs;
