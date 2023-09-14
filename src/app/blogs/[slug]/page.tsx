'use client';

import { allBlogs } from 'contentlayer/generated';
import Content from './Content';

export default function PostLayout({ params }: { params: { slug: string } }) {
  const found = allBlogs.find(
    (bl) => bl._raw.flattenedPath.split('/')?.[1] === params!.slug!,
  );

  try {
    if (!found) throw Error('Not Found');
    return <Content blog={found} />;
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
