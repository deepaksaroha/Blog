import BlogCard from "../BlogCard/BlogCard";
import styles from "./BlogListMain.module.css";

async function getStaticProps() {
  const trendingBlogs = fetch('https://api.example.com/trending-blogs')

  return {
    props: {
      trendingBlogs: await trendingBlogs.json(),
    },
  };
}

const BlogListMain = ({ trendingBlogs }) => {
  return (
    <div className={styles.blogListMain}>
      <h1 className={styles.mainhead}>Blogs</h1>
      <h2 className={styles.subhead}>Here you can find latest blogs</h2>
      <div className={styles.blogListMainContainer}>
        <div className={styles.blogList}>
          {
            trendingBlogs.map((blogMeta, index) => (
              <BlogCard key={index} blog={blogMeta} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default BlogListMain;
