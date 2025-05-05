import CardSkeleton from "@/src/components/UI/CardSkeleton";
import Container from "@/src/components/UI/Container";
import React from "react";

const loading = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {[...Array(9)].map(() => (
         <CardSkeleton key={1}></CardSkeleton>
        ))}
      </div>
    </Container>
  );
};

export default loading;
