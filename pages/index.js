import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts";

import Hero from "../components/home-page/hero";

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

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_DATA} />
    </Fragment>
  );
}

export default HomePage;
