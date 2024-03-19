'use client';

import { allExperiences } from 'contentlayer/generated';
import Content from './Content';

export default function PostLayout({ params }: { params: { slug: string } }) {
  const found = allExperiences.find(
    (exp) => exp._raw.flattenedPath.split('/')?.[1] === params!.slug!,
  );

  try {
    if (!found) throw Error('Not Found');
    return <Content exp={found} />;
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
