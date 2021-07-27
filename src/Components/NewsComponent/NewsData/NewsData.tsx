import React from 'react';
import { Button, Card, CardBody, CardGroup, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import './newsData.css'


interface INewsPage {
    newsData: {
        author: string;
        content: string;
        description: string;
        publishedAt: string;
        title: string;
        url: string;
        urlToImage?: string
    }
}


const NewsData = ({ newsData }: INewsPage) => {
    const { author, content, description, title, url, urlToImage, publishedAt } = newsData;



    return (

        <div className="col-lg-4 col-md-4 px-3 my-3">
            <CardGroup className="border-0 my-2">
                <Card className="border-0 ">
                    <CardImg className="img-fluid" top width="100%" src={urlToImage} alt="Card image cap" />
                    <CardBody className="border-bottom">
                        <CardTitle tag="h5" className="border-top border-dark text-primary fs-4">{title.slice(0, 55)}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">{content}</CardSubtitle>
                        <CardText className="text-secondary">{description}</CardText>
                        <p className=" fw-bolder ">written by: <span className="fw-normal text-danger">{author}</span></p>
                        <Button outline color="primary" className="">
                            <a className="more text-decoration-none" href={url}>more details</a>
                        </Button>
                    </CardBody>
                    <div className="card-footer text-muted bg-light d-flex flex-row-reverse">
                        publish: {publishedAt}
                    </div>
                </Card>
            </CardGroup>
            {/* <h1>{author}</h1>
            <h2>{content}</h2>
            <p>{description}</p>
            <div></div> */}

        </div>
    );
};

export default NewsData;