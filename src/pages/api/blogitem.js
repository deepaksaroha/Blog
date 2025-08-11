// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const blogSlug = req.query.id;
  let blogData;
  try {
    // Fetch blogs from the local JSON file
    const blogsData = await fetch(`${process.env.API_ORIGIN}/blogs.json`);
    const blogs = await blogsData.json();
    blogData = blogs.find(blog => blog.slug === blogSlug);
  } catch (error) {
    console.error("Error fetching blogs:", error);
  }
  res.status(200).json({ blog: blogData });
}
