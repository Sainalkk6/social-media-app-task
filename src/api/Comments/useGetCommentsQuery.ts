import { useQuery } from "@tanstack/react-query"
import { DataQueryKey } from "../../queryKeys"
import { fetchComments } from "./useFetchComments"

export const useGetCommentsQuery = (post_id:number)=>{
    return useQuery({
        queryKey: [DataQueryKey.comments],
        queryFn:fetchComments,
        enabled:!!post_id
    })
}