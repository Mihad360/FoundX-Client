import React, { ReactNode } from "react";

const layout = ({
  children,
  posts,
  gets,
}: {
  children: ReactNode;
  posts: ReactNode;
  gets: ReactNode;
}) => {
  return (
    <div>
      {children}
      {posts}
      {gets}
    </div>
  );
};

export default layout;
