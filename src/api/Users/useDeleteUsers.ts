import { useMutation, useQueryClient } from "@tanstack/react-query"
import { httpClient } from "../client"
import { DataQueryKey } from "../../queryKeys"


export const useDeleteUsers = ()=>{
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn:(id:number)=> httpClient.delete(`users/${id}`),
        onSuccess:()=> queryClient.invalidateQueries({queryKey:[DataQueryKey.users]})
    })
}