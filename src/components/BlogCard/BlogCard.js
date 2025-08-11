import Link from "next/link";
import styles from "./BlogCard.module.css";

const BlogCard = ({ blog }) => {
  return (
    <Link  href={`/blogs/${blog.slug}`} className={styles.blogCard}>
      <img
        src={`/images/blogimages/${blog.image}.jpeg`}
        alt={blog.title}
        className={styles.blogImage}
      />
      <h3 className={styles.blogTitle}>{blog.title}</h3>
      <p className={styles.blogDescription}>{blog.description}</p>
      <div className={styles.authorInfo}>
        <span className={styles.authorName}>{blog.author}</span>
      </div>
    </Link>
  );
};

export default BlogCard;
