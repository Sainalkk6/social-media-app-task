import { useMutation, useQueryClient } from "@tanstack/react-query"
import { CommentType } from "../../Types/types"
import { httpClient } from "../client"
import { DataQueryKey } from "../../queryKeys"

export const useCreateComment = ()=>{
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn:(newData:CommentType)=> httpClient.post(`posts/${newData.post_id}/comments`,newData),
        onSuccess:()=> queryClient.invalidateQueries({queryKey:[DataQueryKey.comments]})
    })
}

