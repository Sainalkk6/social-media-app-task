import { httpClient } from "../client";

export const fetchPosts = ()=> httpClient.get("https://gorest.co.in/public/v2/posts")
