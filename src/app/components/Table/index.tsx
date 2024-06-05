'use client';
import React, { useEffect, useMemo, useState } from 'react';
import { useWindowVirtualizer } from '@tanstack/react-virtual';
import { Bulletin } from '@/app/types/bulletin';
import { Row, RowTitle } from './Row';
import { SelectedMatchesProvider } from '@/app/context/selectedMatchesContext';
import { SelectedMatches } from '../SelectedMatches';

export const Table = ({ initialData }: { initialData: Bulletin[] }) => {
  const parentRef = React.useRef<HTMLDivElement | null>(null);

  const rowVirtualizer = useWindowVirtualizer({
    count: initialData.length,
    estimateSize: () => 90,
    overscan: 10,
    scrollMargin: parentRef.current?.offsetTop || 0,
  });

  const totalSize = useMemo(
    () => rowVirtualizer.getTotalSize(),
    [rowVirtualizer]
  );
  const [columnWidths, setColumnWidths] = useState<number[]>([]);

  useEffect(() => {
    if (parentRef.current) {
      const thElements = parentRef.current.querySelectorAll('th');
      const widths = Array.from(thElements).map(
        (th) => th.getBoundingClientRect().width
      );
      setColumnWidths(widths);
    }
  }, []);

  return (
    <SelectedMatchesProvider>
      <div ref={parentRef}>
        <table className="h-800 w-full">
          <thead className="sticky top-0 bg-gray-600">
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
          <tbody className="relative" style={{ height: `${totalSize}px` }}>
            {rowVirtualizer.getVirtualItems().map((virtualRow) => (
              <React.Fragment key={virtualRow.index}>
                <tr
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: `${virtualRow.size / 2}px`,
                    transform: `translateY(${
                      virtualRow.start - rowVirtualizer.options.scrollMargin - 0
                    }px)`,
                  }}
                >
                  <RowTitle
                    data={initialData[virtualRow.index]}
                    columnWidths={columnWidths}
                  />
                </tr>
                <tr
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: `${virtualRow.size / 2}px`,
                    transform: `translateY(${
                      virtualRow.start -
                      rowVirtualizer.options.scrollMargin +
                      virtualRow.size / 2 -
                      14
                    }px)`,
                  }}
                >
                  <Row
                    data={initialData[virtualRow.index]}
                    columnWidths={columnWidths}
                  />
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
      <SelectedMatches />
    </SelectedMatchesProvider>
  );
};
