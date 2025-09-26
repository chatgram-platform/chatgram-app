import { useState,useEffect } from "react";
import React from "react"
import StoryCard from "./StoryCard";
import API from "../../api/api";

export function StoryPage(){
    const [stories, setStories] = useState([]);

  const fetchStories = async () => {
    const res = await API.get("/stories");
    setStories(res.data);
  };

  useEffect(() => {
    fetchStories();
  }, []);
  return(
       <div className="p-4 max-w-xl mx-auto">
         {
          stories.map((story,idx)=>(
            <StoryCard key={idx} story={story}/>
          ))
         }
        </div>
  )
}