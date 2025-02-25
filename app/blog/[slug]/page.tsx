import { IBlog } from "@/types/blog"

// Return a list of `params` to populate the [slug] dynamic segment

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  return (
    <>
    {slug}</>
  )
}
export async function generateStaticParams() {
  const blogs = await fetch('http://spaces.kbdev.kooboo.cn/api/blog/').then((res) => res.json())
 
  return blogs.map((blog:IBlog) => ({
    slug: blog._id,
  }))
}
 