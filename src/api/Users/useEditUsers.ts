import { useMutation, useQueryClient } from "@tanstack/react-query"
import { UserType } from "../../Types/types"
import { httpClient } from "../client"
import { DataQueryKey } from "../../queryKeys"


export const useEditUsers = ()=>{
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn:(user:UserType)=>  httpClient.put(`users/${user.id}`,user),
        onSuccess:()=> queryClient.invalidateQueries({queryKey:[DataQueryKey.users]})
    })
}