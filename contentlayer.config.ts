import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Accomplishments = defineDocumentType(() => ({
  name: 'Accomplishments',
  filePathPattern: `accomplishments/**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    icon: { type: 'string', required: true },
    location: { type: 'string', required: true },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (accomplishment) =>
        `accomplishments/${accomplishment._raw.flattenedPath}`,
    },
  },
}));

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: `blogs/**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (blog) => `blogs/${blog._raw.flattenedPath}`,
    },
  },
}));

export const Experiences = defineDocumentType(() => ({
  name: 'Experiences',
  filePathPattern: `experiences/**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (experience) => `experiences/${experience._raw.flattenedPath}`,
    },
  },
}));

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `projects/**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'string', required: true },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (project) => `projects/${project._raw.flattenedPath}`,
    },
  },
}));

export const Publications = defineDocumentType(() => ({
  name: 'Publications',
  filePathPattern: `publications/**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (publication) =>
        `publications/${publication._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: 'contents',
  documentTypes: [Accomplishments, Blog, Experiences, Project, Publications],
});
