import Container from "@/src/components/UI/Container";
import FoundItemCard from "@/src/components/UI/FoundItemCard";
import { getRecentPosts } from "@/src/services/recentPosts/RecentPosts";
import React from "react";

const FoundItems = async () => {
  const { data: foundItems } = await getRecentPosts();
  console.log(foundItems);

  return (
    <Container>
      <div className="grid grid-cols-3 gap-4 justify-center">
        {foundItems?.map((item) => (
          <FoundItemCard item={item} key={item?._id}></FoundItemCard>
        ))}
      </div>
    </Container>
  );
};

export default FoundItems;
