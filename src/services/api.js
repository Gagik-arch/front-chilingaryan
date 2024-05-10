class Api {
    URL;

    constructor(baseUrl = "") {
        this.URL = baseUrl;
    }

    get({ url = "" }) {
        return this.configureRequest({ url });
    }

    post({ url = "", body }) {
        return this.configureRequest({
            url,
            body,
            method: "post",
        });
    }

    async configureRequest({ url, method = "get", body }) {
        url = `${this.URL}${url}`;

        const options = {
            method,
            headers: {
                "Content-Type": "application/json",
            },
        };
        if (body) {
            options.body = JSON.stringify(body);
        }
        return fetch(url, options).then((response) => {
            if (!response.ok) {
                throw new Error(response.status.toString());
            }
            return response.json();
        });
    }
}

export default Api;
