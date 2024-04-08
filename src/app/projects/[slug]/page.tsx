'use client';

import { allProjects } from 'contentlayer/generated';
import Content from './Content';

export default function ProjectLayout({
  params,
}: {
  params: { slug: string };
}) {
  const found = allProjects.find(
    (project) => project._raw.flattenedPath.split('/')?.[1] === params!.slug!,
  );

  try {
    if (!found) throw Error('Not Found');
    return <Content project={found} />;
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
