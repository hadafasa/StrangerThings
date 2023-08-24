import { useState } from 'react';
import PropTypes from 'prop-types';

function MessageForm({ onMessageSubmit }) {
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onMessageSubmit(message);
        setMessage('');
    };

    return (
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            value={message} 
            onChange={e => setMessage(e.target.value)} 
            placeholder="Send a message..." 
            required 
          />
          <button type="submit">Send</button>
        </form>
      );
}

MessageForm.propTypes = {
    onMessageSubmit: PropTypes.func.isRequired,
};

export default MessageForm;