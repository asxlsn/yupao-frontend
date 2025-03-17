import type {UserType} from "../models/user";

let currentUser: UserType;


const setCurrentUserState = (user) =>{
    currentUser = user;
}
const getCurrentUserState = (): UserType =>{
    return currentUser;
}
export {
    setCurrentUserState,
    getCurrentUserState,
}

