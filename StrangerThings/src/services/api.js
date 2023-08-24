const BASE_URL = "https://strangers-things.herokuapp.com";

export const fetchPosts = async () => {
    try {
        const response = await fetch(`${BASE_URL}/api/posts`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
};

export const registerUser = async (credentials) => {
    try {
        const response = await fetch (`${BASE_URL}/api/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error during registration:", error);
    }
};

export const loginUser = async (credentials) => {
    try {
        const response = await fetch(`${BASE_URL}/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error during login:", error);
    }
};

export const createPost = async (post, token) => {
    try {
        const response = await fetch(`${BASE_URL}/api/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` // changed to template literals
            },
            body: JSON.stringify(post),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error during post creation:", error);
    }
};

// export const fetchPosts = async (token = null) => {
//     try {
//         const headers = token
//         ? { 'Authorization': `Bearer ${token}` }
//         : {};

//         const response = await fetch(`${BASE_URL}/api/posts`, {
//             method: 'GET',
//             headers: headers
//           }); 

//           const data = await response.json();
//           return data;
//     } catch (error) {
//         console.error("Error fetching posts:", error);
//     }
// };

export const deletePost = async (postId, token) => {
    try {
        const response = await fetch(`${BASE_URL}/api/posts/${postId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if(response.status === 204) return true; // success
        const data = await response.json();
        throw new Error(data.error);
    } catch (error) {
        console.error("Error deleting post:", error);
        return false;
    }
};

export const fetchCurrentUser = async (token) => {
    try {
        const response = await fetch(`${BASE_URL}/api/users/me`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching current user:", error);
    }
};