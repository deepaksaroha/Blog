// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  let blogsData;
  try {
    // Fetch blogs from the local JSON file
    blogsData = await fetch(`${process.env.API_ORIGIN}/blogs.json`);
  } catch (error) {
    console.error("Error fetching blogs:", error);
  }
  const blogs = await blogsData.json();
  res.status(200).json({ blogs });
}
