import React from 'react';

const layout = ({children, recentPosts}) => {
    return (
        <div>
            {children}
            {recentPosts}
        </div>
    );
};

export default layout;