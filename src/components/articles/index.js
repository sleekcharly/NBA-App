import React, {useState, useEffect } from 'react'
import { URL_BLOCKS } from '../utils/paths';
import axios from 'axios';


const Article = (props) => {

    let [article, setArticle] = useState([null])

    useEffect(() => {
        const fetchArticle = async ()=>{
            const response = await axios.get(`${URL_BLOCKS}?id=${props.match.params.id}`);
            setArticle(...response.data)
        }
        fetchArticle()
    }, [props]);

    console.log(article);

    return (
        <>
            <div className="container article_post">
                { article ?
                    <div className="top">
                        <div 
                            className="block_image"
                            style={{
                                background: `url(/images/blocks/${article.image}) no-repeat`
                            }}
                        >

                        </div>
                        <h1>{article.title}</h1>
                        <span></span>
                        <div
                            className="article_content"
                            dangerouslySetInnerHTML={{
                                __html: article.content
                            }}>
                            
                        </div>
                    </div>
                    : null
                }
            </div>
        </>
    )
}

export default Article