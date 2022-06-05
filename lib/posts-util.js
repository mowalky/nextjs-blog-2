import fs from "fs";
import path from "path";

import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

function getPostData(fileName) {
  const filePath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  const postSlug = fileName.replace(/\.md$/, "");

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getAllPosts() {
  const postFiles = fs.readdirSync(postsDirectory);

  const allPosts = postFiles.map((fileName) => {
    return getPostData(fileName);
  });

  const sortedPosts = allPosts.sort((a, b) => (a.date < b.date ? 1 : -1));

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}
