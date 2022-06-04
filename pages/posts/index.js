import AllPosts from "../../components/posts/all-posts";

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

function AllPostsPage() {
  return <AllPosts posts={DUMMY_DATA} />;
}

export default AllPostsPage;
