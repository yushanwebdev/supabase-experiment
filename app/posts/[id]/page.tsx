import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Post() {
  return (
    <main className="container">
      <Link className="underline flex items-center gap-2" href="/">
        <ArrowLeft className="w-4 h-4" />
        <span className="text-lg">Back</span>
      </Link>
      <h1 className="text-4xl leading-tight mt-8">
        The power of ChatGPT as a cognitive accessibility assistive technology
        for Traumatic Brain Injury survivors
      </h1>
      <div className="flex flex-col md:flex-row items-left md:items-center justify-between mt-8">
        <p>
          <strong>BY:</strong> Yushan Fernando
        </p>
        <p>
          <strong>PUBLISHED:</strong> March 14, 2023
        </p>
      </div>
      <div className="mt-8">
        This essay explores the use of ChatGPT as a cognitive accessibility
        assistive technology for traumatic brain injury (TBI) survivors,
        discussing the impact it has on the disability community. The essay
        outlines the cognitive impairments experienced by TBI survivors, and how
        ChatGPT can provide support in the form of information retrieval, memory
        aids, communication aids, and cognitive training. Traumatic brain injury
        (TBI) is a life-changing injury that can affect people of all ages,
        genders, and backgrounds. TBI can cause a range of physical, cognitive,
        and emotional impairments, making it difficult for people with TBI to
        perform daily activities, engage in social interactions, and access
        information. Cognitive accessibility assistive technology, such as
        ChatGPT, can help TBI survivors overcome some of the cognitive
        challenges they face and improve their quality of life. This essay will
        explore how ChatGPT can be used as a cognitive accessibility assistive
        technology specifically for TBI survivors and how it impacts the
        disability community.
      </div>
    </main>
  );
}
