import PostHeader from "./post-header";

const DUMMY_POST = {
  slug: "post-1",
  title: "Post 1",
  date: "2020-01-01",
  image: "yoda.jpg",
  content: "# This is a first post",
};

function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
  return (
    <article>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      {DUMMY_POST.content}
    </article>
  );
}

export default PostContent;
