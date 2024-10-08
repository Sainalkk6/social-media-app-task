import React from "react";

export type BlogsType = {
    id:number;
    user_id:number;
    title:string;
    body:string
}

export type UserType = {
    email:string;
    gender:string;
    id:number;
    name:string;
    status:string;
}

export type CommentType = {
    body:string;
    email:string;
    id:number;
    name:string;
    post_id:number;
}

export type NewPostFormType = {
    setAddPost:React.Dispatch<React.SetStateAction<boolean>>
}

export type NewCommentType = {
    currentUser:UserType;
    selectedPost:number;
    setShowComments:React.Dispatch<React.SetStateAction<boolean>>
}

export type EditUserFormType = {
    initialValues:UserType;
    setToggleEdit:React.Dispatch<React.SetStateAction<boolean>>
}

export type UserCardType = {
    user:UserType
    handleDeleteUser: (id: number) => void
    handleToggleEdit:(user: UserType) => void
    setCurrentUser:React.Dispatch<React.SetStateAction<UserType>>
    setToggleUserInfo:React.Dispatch<React.SetStateAction<boolean>>
    setClickedUser:React.Dispatch<React.SetStateAction<UserType>>
}

export type CustomSpanType = {
    label:string | number
}

export type BlurryComponentPropType = {
    removeBlur:React.Dispatch<React.SetStateAction<boolean>>;
}

export type DataContextType = {
    users:UserType[];
    setUsers:React.Dispatch<React.SetStateAction<UserType[]>>;
    blogs:BlogsType[];
    setBlogs:React.Dispatch<React.SetStateAction<BlogsType[]>>
    currentUser: UserType;
    setCurrentUser:React.Dispatch<React.SetStateAction<UserType>>
    comments:CommentType[];
    setComments:React.Dispatch<React.SetStateAction<CommentType[]>>
    userUniqueBlogs:UserUniqueBlogs
    setUserUniqueBlogs: React.Dispatch<React.SetStateAction<UserUniqueBlogs>>
}

export type LabelPropsType = {
    label: string;
    labelFor:string;
} 

export type MiniContainerPropType = {
    children:React.ReactNode;
}

export type InputPropType = {
    type:string;
    placeholder:string;
    value:string;
    handleChange: (e: React.ChangeEvent<any>)=> void;
    id:string;
}

export type UserUniqueBlogs = {
    user:string;
    blogs:BlogsType[];
}

export type UserContextType = {
    currentUser: UserType;
    setCurrentUser:React.Dispatch<React.SetStateAction<UserType>>
    userUniqueBlogs:UserUniqueBlogs
    setUserUniqueBlogs: React.Dispatch<React.SetStateAction<UserUniqueBlogs>>
}

export type BlogCardtype = {
    blog:BlogsType
    setShowComments:React.Dispatch<React.SetStateAction<boolean>>
    toggleDeletion:boolean
    massDeletion: (id: number) => void
    setSelectedPost:React.Dispatch<React.SetStateAction<number>>
}

export type UserDetailType = {
    clickedUser: UserType
    setToggleUserInfo:React.Dispatch<React.SetStateAction<boolean>>
}

export type CommentModaltype = {
    selectedPost:number
    setShowComments:React.Dispatch<React.SetStateAction<boolean>>
}