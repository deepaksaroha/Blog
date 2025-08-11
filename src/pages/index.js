import Banner from "@/components/Banner/Banner";
import BlogListMain from "@/components/BlogListMain/BlogListMain";

export async function getStaticProps() {
  const blogsData = await fetch(`${process.env.API_ORIGIN}/api/blogs`);
  const { blogs } = await blogsData.json();

  const trendingBlogs = blogs.slice(0, 4); // Assuming you want the first 4 blogs as trending

  return {
    props: {
      trendingBlogs: trendingBlogs,
    },
    revalidate: 86400, // Revalidate every day
  };
}

export default function Home({ trendingBlogs }) {
  return (
    <>
      <Banner />
      <BlogListMain trendingBlogs={trendingBlogs} />
    </>
  );
}
