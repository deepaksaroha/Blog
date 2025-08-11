import styles from './BlogPage.module.css';

const BlogPage = ({ blog }) => {
  return (
    <div className={styles.blogPage}>
      <h1 className={styles.heading}>{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
};

export default BlogPage;
