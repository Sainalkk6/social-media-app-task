import { useQuery } from "@tanstack/react-query"
import { DataQueryKey } from "../../queryKeys"
import { fetchPosts } from "./useFetchPost"

export const useGetPostQuery = ()=>{
    return useQuery({
        queryKey: [DataQueryKey.posts],
        queryFn:fetchPosts
    })
}