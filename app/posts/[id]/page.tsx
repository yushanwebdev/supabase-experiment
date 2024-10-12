import { IPost } from "@/types";
import { createClient } from "@/utils/supabase/server";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

async function getPost(id: string): Promise<IPost | null> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error fetching post:", error);
    return null;
  }

  return data;
}

export default async function Post({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);

  return (
    <main className="container">
      <Link className="underline flex items-center gap-2" href="/">
        <ArrowLeft className="w-4 h-4" />
        <span className="text-lg">Back</span>
      </Link>
      <h1 className="text-4xl leading-tight mt-8">{post?.title}</h1>
      <div className="flex flex-col md:flex-row items-left md:items-center justify-between mt-8">
        <p>
          <strong>BY:</strong> {post?.author}
        </p>
        <p>
          <strong>PUBLISHED:</strong>{" "}
          {new Date(post?.date ?? "").toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
      </div>
      <div
        className="mt-8"
        dangerouslySetInnerHTML={{ __html: post?.content ?? "" }}
      />
    </main>
  );
}
