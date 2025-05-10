export const getRecentPosts = async () => {
  const res = await fetch("http://localhost:5000/api/v1/items");
  const data = await res.json()
  return data
};
