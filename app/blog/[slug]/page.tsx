import { RMCBlogLayout } from "@/components/custom/blog/RMCBlogLayout"
import { IBlog } from "@/types/blog"

// Return a list of `params` to populate the [slug] dynamic segment

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default async function Page({
  params,
}: {
  params:any
}) {
  const { slug } = await params
  return (
    <>
     <RMCBlogLayout slug={slug}/> 
    </>
  )
}
