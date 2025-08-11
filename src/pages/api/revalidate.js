export default function handler(req, res) {
  const path = req.query?.path;
  if (path) {
    res.revalidate(path);
  }
  res.status(200).json({ message: "Revalidation triggered" });
}
