import styles from "./BlogCard.module.css";

const BlogCard = ({
  blog = { title: "A tech blog", description: "This is a tech blog" },
}) => {
  return (
    <div className={styles.blogCard}>
      <img
        src={`/images/blogimages/banner1.jpeg`}
        alt={blog.title}
        className={styles.blogImage}
      />
      <h3 className={styles.blogTitle}>{blog.title}</h3>
      <p className={styles.blogDescription}>{blog.description}</p>
      <div className={styles.authorInfo}>
        <img
          src={`/images/blogimages/banner1.jpeg`}
          alt="Author"
          className={styles.authorImage}
        />
        <span className={styles.authorName}>Author Name</span>
      </div>
    </div>
  );
};

export default BlogCard;
