import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])

    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })
    const [fetchComments, isCommLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        console.log('comm', response)
        setComments(response.data)
    })
    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])

    console.log(params)
    return (
        <div className='post__id__page'>
            <h1>Вы попали на страницу поста с ID = {params.id}</h1>
            {isLoading
                ? <Loader />
                : <div>{post.title}</div>
            }
            <h1>
                Комментарии
            </h1>
            {
                isCommLoading
                    ? <Loader />
                    : <div>
                        {comments.map(comm =>
                            <div style={{ marginTop: 15 }}>
                                <h3>{comm.email}</h3>
                                <div>{comm.body}</div>
                            </div>
                        )}
                    </div>
            }
        </div>
    );
};

export default PostIdPage;