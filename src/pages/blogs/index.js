import BlogItem from "@/components/BlogItem/BlogItem";

export async function getStaticProps() {
  const blogsData = await fetch(`${process.env.API_ORIGIN}/api/blogslist`);
  const { blogs: allBlogs } = await blogsData.json();

  return {
    props: {
      allBlogs: await allBlogs,
    },
  };
}

const Blog = ({ allBlogs }) => {
  return (
    <div>
      <h1>Blogs</h1>
      {allBlogs && allBlogs.length > 0 ? (
        <ul>
          {allBlogs.map((blog) => (
            <BlogItem key={blog.slug} blog={blog} />
          ))}
        </ul>
      ) : (
        <p>No blogs available at the moment.</p>
      )}
    </div>
  );
};

export default Blog;
