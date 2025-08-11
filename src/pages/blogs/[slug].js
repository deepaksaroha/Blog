import BlogPage from "@/components/BlogPage/BlogPage";

export async function getStaticPaths() {
  const blogsData = await fetch(`${process.env.API_ORIGIN}/api/blogslist`);
  const {blogs} = await blogsData.json();
  const paths = blogs.map((blog) => ({
    params: { slug: blog.slug },
  }));
  
  return {
    paths,
    fallback: false, // can be true or 'blocking' for dynamic paths
  };
}

export async function getStaticProps({ params }) {
  const blogSlug = params.slug;
  const blogData = await fetch(`${process.env.API_ORIGIN}/api/blogitem/?id=${blogSlug}`);
  const {blog} = await blogData.json();
  return {
    props: {
      blog,
    },    
  };
}

const Blog = ({ blog }) => {
  return <BlogPage blog={blog} />;
};

export default Blog;
