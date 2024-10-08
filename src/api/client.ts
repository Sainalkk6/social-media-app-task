import axios from "axios";

export const httpClient = axios.create({ baseURL:'https://gorest.co.in/public/v2/', headers: { Authorization: `Bearer 3bdbac8571933d6c5ae404f8f6d64a8a45a0c3c0fa3c252e5329f2622e614afe` } })

