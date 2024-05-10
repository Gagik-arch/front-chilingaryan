import Api from "./api";

class PostApi extends Api {
    getPosts() {
        return this.get({
            url: "https://cloud.codesupply.co/endpoint/react/data.json",
        });
    }
}

const postApi = new PostApi();

export default postApi;
