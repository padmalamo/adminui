import { READ } from "app/config/services/ServerClient"
const authorizationHeader={tokenAuthorization:true}
const getUsersMe=(id)=>{
    return READ(`/users/me`,{},authorizationHeader)
}
const getAllUsers=(id)=>{
    return READ(`/users`,{},authorizationHeader)
} 
const getGroups=(id)=>{
    return READ(`/groups`,{},authorizationHeader)
} 

export const UserAPIDataService={
    getUsersMe,
    getAllUsers,
    getGroups
}