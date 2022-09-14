import React from "react"

export const  SinglePage = ({singlePage}) => {

    return <>
        <h3>{singlePage.title}</h3>
        <h3>{singlePage.author.name}</h3>
        <h3>{singlePage.content}</h3>
        <h3>{singlePage.tags}</h3>
        <h3>{singlePage.createdAt}</h3>
       
    </>
    
}