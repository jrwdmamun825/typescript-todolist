import axios from 'axios';
import { useState, useEffect } from 'react';
import NavBar from '../../NavBar/NavBar';
import NewsData from '../NewsData/NewsData';
interface INews {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    title: string;
    url: string;
    urlToImage: string
}


type S = boolean;
const NewsPage = () => {
    const [newsData, setNewsData] = useState<INews[]>([]);
    const [loadMore, setLoadMore] = useState<number>(6);
    const [error, setError] = useState<S>();
    // const apiKey:string = 'ece61fe494ce4e1e8d38df1cc1b6e1de';
    useEffect(() => {
        // Use [] as second argument in useEffect for not rendering each time
        axios.get('https://saurav.tech/NewsAPI/top-headlines/category/health/in.json')
            .then((response) => {
                console.log('checking api workds:', response.data.articles);
                setNewsData(response.data.articles);
            }).catch((err) => {
                console.log('Show error notification!')
                return setError(err)
            });
    }, []);



    return (
        <div className="px-4">
            <NavBar></NavBar>
            {error ?

                <h2 className="text-danger">Something wrong! note found data</h2>
                :
                <h2>Latest News...</h2>
            }
            <div className="row">
                {
                    newsData.slice(0, loadMore).map(data => <NewsData newsData={data} />)
                }
            </div>
            <div className="d-flex flex-row-reverse mb-5">
                {loadMore < newsData.length &&
                    <button onClick={() => setLoadMore(loadMore + 6)} className="btn btn-primary ">check more...</button>

                }


            </div>

            {/* <h2>{newsData.author}</h2> */}
        </div>
    );
};

export default NewsPage;