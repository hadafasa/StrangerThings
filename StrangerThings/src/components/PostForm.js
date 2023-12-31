import { useState } from 'react';
import PropTypes from 'prop-types';

function PostForm({ onPostSubmit }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onPostSubmit({ title, content });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
            <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Content" required />
            <button type="submit">Post</button>
        </form>
    );
}

PostForm.propTypes = {
    onPostSubmit: PropTypes.func.isRequired,
};

export default PostForm;