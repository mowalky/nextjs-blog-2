import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts";

import Hero from "../components/home-page/hero";

import { getFeaturedPosts } from "../lib/posts-util";

const DUMMY_DATA = [
  {
    slug: "post-1",
    title: "Post 1",
    date: "2020-01-01",
    excerpt:
      "NextJS is the best framework for building server side applications",
    image: "yoda.jpg",
  },
  {
    slug: "post-2",
    title: "Post 1",
    date: "2020-01-01",
    excerpt:
      "NextJS is the best framework for building server side applications",
    image: "r2d2.jpg",
  },
];

function HomePage(props) {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
