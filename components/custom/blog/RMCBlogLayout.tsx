"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { TracingBeam } from "../../ui/tracing-beam";
import { IBlog } from "@/types/blog";

export function RMCBlogLayout({ slug }: { slug: string }) {
  const [blog, setBlog] = useState<IBlog | null>(null); // Adjust type accordingly

  useEffect(() => {
    const getSingleBlog = async () => {
      try {
        const response = await fetch(`http://spaces.mycode.kooboo.cn/api/blog/${slug}`);
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const json = await response.json();
        setBlog(json);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    getSingleBlog();
  }, [slug])
  return (
    blog && (
      <TracingBeam className="px-6 mt-20">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
            <div  className="mb-10">
              <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                React
              </h2>
  
              <p className="text-xl mb-4">{blog.title}</p>
  
              <div className="text-sm prose prose-sm dark:prose-invert">
                {blog.image && (
                  <Image
                    src={blog.image}
                    alt="blog thumbnail"
                    height="1000"
                    width="1000"
                    className="rounded-lg mb-10 object-cover"
                  />
                )}
                <div dangerouslySetInnerHTML={{ __html: blog.content }} />
              </div>
            </div>
        </div>
      </TracingBeam>
    )
  );
  
}

