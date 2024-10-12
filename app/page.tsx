import { ModeToggle } from "@/components/ui/mode-toggle";
import Logo from "@/components/logo";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Link from "next/link";

export default function Home() {
  return (
    <div className="pt-3 md:pt-6 min-h-screen container">
      <header className="flex items-center justify-between border-b-[1px] md:border-b-0 px-6 pt-2 pb-4">
        <Logo />
        <ModeToggle />
      </header>
      <main className="pt-10 p-6">
        <ul className="flex flex-col gap-8">
          <li className="border-b-[1px] pb-8">
            <Link className="underline" href="/about">
              <h2 className="text-2xl">
                The power of ChatGPT as a cognitive accessibility assistive
                technology for Traumatic Brain Injury survivors
              </h2>
            </Link>
            <p className="text-sm text-gray-500 mt-5">
              2024-01-01 | Yushan Fernando
            </p>
            <p className="mt-5">
              This essay explores the use of ChatGPT as a cognitive
              accessibility assistive technology for traumatic brain injury
              (TBI) survivors.
            </p>
          </li>
          <li>
            <a className="underline" href="/posts/1">
              <h2 className="text-2xl">
                The power of ChatGPT as a cognitive accessibility assistive
                technology for Traumatic Brain Injury survivors
              </h2>
            </a>
            <p className="text-sm text-gray-500 mt-5">
              2024-01-01 | Yushan Fernando
            </p>
            <p className="mt-5">
              This essay explores the use of ChatGPT as a cognitive
              accessibility assistive technology for traumatic brain injury
              (TBI) survivors.
            </p>
          </li>
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
      </main>
    </div>
  );
}
