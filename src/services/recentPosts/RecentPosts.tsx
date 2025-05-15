"use server";
export const getRecentPosts = async () => {
  const res = await fetch("http://localhost:5000/api/v1/items", {
    next: { tags: ["posts"] }, // This works with native fetch
  });
  const data = await res.json();
  return data;
};
