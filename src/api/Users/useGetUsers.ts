import { useQuery } from "@tanstack/react-query"

import { fetchUsers } from "./fetchUsers"
import { DataQueryKey } from "../../queryKeys"


export const useGetUsersQuery = ()=>{
    return useQuery({
        queryKey: [DataQueryKey.users],
        queryFn:fetchUsers,
    })
}