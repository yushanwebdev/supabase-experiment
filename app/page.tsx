import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { IPost } from "@/types";

async function getPosts(): Promise<Omit<IPost, "content">[]> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("posts")
    .select("id, title, author, excerpt, date")
    .order("date", { ascending: false });

  if (error) {
    console.error("Error fetching posts:", error);
    return [];
  }

  return data;
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <>
      <ul className="flex flex-col gap-8">
        {posts.map((post) => (
          <li key={post.id} className="border-b-[1px] pb-8">
            <Link className="underline" href={`/posts/${post.id}`}>
              <h2 className="text-2xl">{post.title}</h2>
            </Link>
            <p className="text-sm text-gray-500 mt-5">
              {/* Format date to be month day, year */}
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}{" "}
              | {post.author}
            </p>
            <p className="mt-5">{post.excerpt}</p>
          </li>
        ))}
      </ul>
      <Pagination className="mt-10">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/posts/1">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/posts/2" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}
