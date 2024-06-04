import NewsList from "@/app/components/news-list";
import { getLatestNews } from "@/lib/news";
import React from "react";

export default async function ArchivePage() {
  const latestNews = await getLatestNews();

  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latestNews} />
    </>
  );
}
