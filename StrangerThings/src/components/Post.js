// import { deletePost } from '../services/api';

// function Post({ post, token, onDelete }) {

//     const handleDelete = async () => {
//         const success = await deletePost(post._id, token);
//         if(success) {
//             onDelete(post._id); // propagate the deletion to parent component to remove from the list
//         }
//     };

//     return (
//       <div className="post">
//         <h2>{post.title}</h2>
//         <p>{post.content}</p>
//         {token && post.isAuthor && <button onClick={handleDelete}>Delete</button>} {/* You will handle delete later */}
//         {post.messages && post.messages.map(message => (
//           <div key={message._id}>
//             <p>{message.content}</p>
//           </div>
//         ))}
//       </div>
//     );
//   }

// export default Post;

import PropTypes from 'prop-types';

function Post({ post, token, onDelete }) {
    return (
        <div className="post">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            {token && 
                <button onClick={() => onDelete(post._id)}>Delete</button>
            }
        </div>
    );
}

Post.propTypes = {
    post: PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired,
    }).isRequired,
    token: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
  };
  

export default Post;
