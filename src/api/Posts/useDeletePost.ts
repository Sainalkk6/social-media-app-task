import { useMutation, useQueryClient } from "@tanstack/react-query"
import { httpClient } from "../client"
import { DataQueryKey } from "../../queryKeys"

export const useDeletePost = ()=>{
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn:(id:number)=> httpClient.delete(`posts/${id}`),
        onSuccess:()=> queryClient.invalidateQueries({queryKey:[DataQueryKey.posts]})
    })
}