import {
  ComputedFields,
  defineDocumentType,
  makeSource,
} from 'contentlayer/source-files';
import readingTime from 'reading-time';
import rehypePrism from 'rehype-prism-plus';

const computedFields: ComputedFields = {
  readingTime: {
    type: 'json',
    resolve: (doc) => readingTime(doc.body.raw, { wordsPerMinute: 150 }),
  },
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
  },
};

export const Accomplishments = defineDocumentType(() => ({
  name: 'Accomplishments',
  filePathPattern: `accomplishments/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    icon: { type: 'string', required: true },
    location: { type: 'string', required: true },
  },
  computedFields,
}));

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: `blogs/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
  },
  computedFields,
}));

export const Experiences = defineDocumentType(() => ({
  name: 'Experiences',
  filePathPattern: `experiences/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
  },
  computedFields,
}));

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `projects/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'string', required: true },
  },
  computedFields,
}));

export const Publications = defineDocumentType(() => ({
  name: 'Publications',
  filePathPattern: `publications/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: 'contents',
  documentTypes: [Accomplishments, Blog, Experiences, Project, Publications],
  mdx: {
    rehypePlugins: [rehypePrism],
  },
});
