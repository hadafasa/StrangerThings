const BASE_URL = "https://strangers-things.herokuapp.com/api/"

export const fetchPosts = async () => {
    try {
        const response = await fetch(`${BASE_URL}/api/posts`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
};