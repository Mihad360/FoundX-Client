import ItemCard from "@/src/components/UI/ItemCard";
import { getRecentPosts } from "@/src/services/recentPosts/RecentPosts";
import { delay } from "@/src/utils/delay";

const RecentPosts = async () => {
  const { data: recentPosts } = await getRecentPosts();
  await delay(3000);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {recentPosts?.map((item: any) => (
        <ItemCard item={item} key={item._id}></ItemCard>
      ))}
    </div>
  );
};

export default RecentPosts;
