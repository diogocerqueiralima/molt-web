export default function fetchWithAuth(url: string, options: RequestInit = {}) {

    return fetch(url, options)
        .then(response => {

            if (response.status == 401) {
                window.location.href = "http://localhost:9090/oauth2/authorization/molt"
                throw Error("You are not authenticated")
            }

            return response
        })

}