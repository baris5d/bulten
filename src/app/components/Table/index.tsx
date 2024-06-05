"use client";
import React, { useEffect, useMemo } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { getBulletin } from "@/app/services/fetcher";
import { Bulletin } from "@/app/types/bulletin";
import { useQuery } from "@tanstack/react-query";
import { Row } from "./Row";
import {
  SelectedMatchesProvider,
  useSelectedMatches,
} from "@/app/context/selectedMatchesContext";
import { SelectedMatches } from "../SelectedMatches";

export const Table = ({ initialData }: { initialData: Bulletin[] }) => {
  const { data, isLoading, error } = useQuery<Bulletin[], Error>({
    queryKey: ["posts"],
    queryFn: getBulletin,
    refetchOnWindowFocus: false,
    initialData,
  });

  const memoizedData = useMemo(() => data || [], [data]);

  const parentRef = React.useRef<HTMLDivElement | null>(null);

  const rowVirtualizer = useVirtualizer({
    count: memoizedData.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 50,
    measureElement:
      typeof window !== "undefined" &&
      navigator.userAgent.indexOf("Firefox") === -1
        ? (element) => element?.getBoundingClientRect().height
        : undefined,
    overscan: 5,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  useEffect(() => {
    console.log("Rendered");
  }, []);

  return (
    <SelectedMatchesProvider>
      <div ref={parentRef}>
        <table className="w-full">
          <thead className="sticky top-0">
            <tr className="h-16">
              <th className="border">Event Count</th>
              <th className="border">Yorumlar</th>
              <th className="border"></th>
              <th className="border">1</th>
              <th className="border">x</th>
              <th className="border">2</th>
              <th className="border">Alt</th>
              <th className="border">Üst</th>
              <th className="border">H1</th>
              <th className="border">1</th>
              <th className="border">x</th>
              <th className="border">2</th>
              <th className="border">H2</th>
              <th className="border">1-X</th>
              <th className="border">1-2</th>
              <th className="border">X-1</th>
              <th className="border">Var</th>
              <th className="border">Yok</th>
              <th className="border">+99</th>
            </tr>
          </thead>
          <tbody>
            {rowVirtualizer.getVirtualItems().map((virtualRow, index) => (
              <Row data={memoizedData[virtualRow.index]} key={index} />
            ))}
          </tbody>
        </table>
      </div>
      <SelectedMatches />
    </SelectedMatchesProvider>
  );
};
