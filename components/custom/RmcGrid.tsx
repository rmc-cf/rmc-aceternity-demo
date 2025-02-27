'use client'
import React, { useEffect, useState } from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { IBlogList } from "@/types/blog";

function RmcGrid() {
    const [blogs, setBlogs] = useState<IBlogList>([]); // Adjust type accordingly
  
    useEffect(() => {
      const getAllBlogs = async () => {
        try {
          const response = await fetch(`http://spaces.mycode.kooboo.cn/api/blog/`);
          if (!response.ok) {
            throw new Error("Failed to fetch blogs");
          }
          const json = await response.json();
          setBlogs(json);
        } catch (error) {
          console.error("Error fetching blogs:", error);
        }
      };
  
      getAllBlogs();
    }, []);
  return (
    <BentoGrid className="max-w-4xl mx-auto ">
      {blogs.map((item:any, i:number) => (
        <BentoGridItem
        href={`/blog/${item._id}`}
          key={i}
          title={item.title}
          description={item.description}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}

export  default RmcGrid