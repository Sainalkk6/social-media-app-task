import { useMutation, useQueryClient } from "@tanstack/react-query"
import { BlogsType } from "../../Types/types"
import { httpClient } from "../client"
import { DataQueryKey } from "../../queryKeys"

export const useCreatePost = ()=>{
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn:(newData:BlogsType)=> httpClient.post(`users/${newData.user_id}/posts`,newData),
        onSuccess:()=> queryClient.invalidateQueries({queryKey:[DataQueryKey.posts]})
    })
}
