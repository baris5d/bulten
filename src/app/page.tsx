import { getBulletin } from "./services/fetcher";
import { Table } from "./components/Table";
import React from "react";

export default async function Home() {
  const initialData = await getBulletin();
  return <Table initialData={initialData} />;
}
