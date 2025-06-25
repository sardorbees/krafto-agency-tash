import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommentSection = ({ postId }) => {
    const [comments, setComments] = useState([]);
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/comment/posts/${postId}/comments/`)
            .then(res => setComments(res.data))
            .catch(err => console.error(err));
    }, [postId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post(`http://127.0.0.1:8000/api/comment/posts/${postId}/comments/`, {
            author,
            content
        });
        setAuthor('');
        setContent('');
        const res = await axios.get(`http://127.0.0.1:8000/api/comment/posts/${postId}/comments/`);
        setComments(res.data);
    };

    return (
        <div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <h3>Comments</h3>
            {comments.map((c) => (
                <div key={c.id}>
                    <strong>{c.author}</strong>: {c.content}
                </div>
            ))}
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Comment"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
                <button type="submit">Add Comment</button>
            </form>
        </div>
    );
};

export default CommentSection;