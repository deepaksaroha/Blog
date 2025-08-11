import Link from 'next/link';
import styles from './BlogItem.module.css';

const BlogItem = ({ blog }) => {
  return (
    <li className={styles.blogItem}>
      <Link href={`/blogs/${blog.slug}`}>
        <h2>{blog.title}</h2>
        <p>{blog.excerpt}</p>
      </Link>
    </li>
  );
};

export default BlogItem;
