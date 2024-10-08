import { httpClient } from "../client"

export const fetchComments = () => httpClient.get("https://gorest.co.in/public/v2/comments")
