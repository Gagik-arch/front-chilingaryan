export const filterPosts = (posts = [], text = "") => {
    text = text.toLowerCase();
    return posts.filter(
        (post) =>
            post.title?.toLowerCase()?.includes(text) ||
            post.text?.toLowerCase()?.includes(text)
    );
};
