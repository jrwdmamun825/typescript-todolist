import React from 'react';
import NewsPage from './NewsPage/NewsPage';

const NewsComponent = () => {

    return (
        <div className="mt-5">
            <h2 className="my-4 text-center">Latest News and Blog website <span className="text-primary">(with TypeScript)</span></h2>
            <NewsPage></NewsPage>
        </div>
    );
};

export default NewsComponent;