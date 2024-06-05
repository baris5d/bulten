import { useSelectedMatches } from "@/app/context/selectedMatchesContext";
import { Bulletin } from "@/app/types/bulletin";
import { memo, useEffect } from "react";

const RowTitleComponent: React.FC<
  {
    data: Bulletin;
    columnWidths: number[];
  } & React.HTMLAttributes<HTMLDivElement>
> = ({ data, columnWidths, ...rest }) => {
  return (
    <tr className="text-center w-full" {...rest}>
      <td className="text-left border" style={{ width: columnWidths[0] }}>
        {data?.D} {data?.DAY} {data?.LN}
      </td>
      <td className="border" style={{ width: columnWidths[1] }}>
        Yorumlar
      </td>
      <td className="border" style={{ width: columnWidths[2] }}></td>
      <td className="border" style={{ width: columnWidths[3] }}>
        1
      </td>
      <td className="border" style={{ width: columnWidths[4] }}>
        x
      </td>
      <td className="border" style={{ width: columnWidths[5] }}>
        2
      </td>
      <td className="border" style={{ width: columnWidths[6] }}>
        Alt
      </td>
      <td className="border" style={{ width: columnWidths[7] }}>
        Üst
      </td>
      <td className="border" style={{ width: columnWidths[8] }}>
        H1
      </td>
      <td className="border" style={{ width: columnWidths[9] }}>
        1
      </td>
      <td className="border" style={{ width: columnWidths[10] }}>
        x
      </td>
      <td className="border" style={{ width: columnWidths[11] }}>
        2
      </td>
      <td className="border" style={{ width: columnWidths[12] }}>
        H2
      </td>
      <td className="border" style={{ width: columnWidths[13] }}>
        1-X
      </td>
      <td className="border" style={{ width: columnWidths[14] }}>
        1-2
      </td>
      <td className="border" style={{ width: columnWidths[15] }}>
        X-2
      </td>
      <td className="border" style={{ width: columnWidths[16] }}>
        Var
      </td>
      <td className="border" style={{ width: columnWidths[17] }}>
        Yok
      </td>
      <td className="border" style={{ width: columnWidths[18] }}>
        +99
      </td>
    </tr>
  );
};
const RowComponent: React.FC<
  {
    data: Bulletin;
    columnWidths: number[];
  } & React.HTMLAttributes<HTMLDivElement>
> = ({ data, columnWidths, ...rest }) => {
  const { selectedMatches, toggleSelection } = useSelectedMatches();
  const selectedMatch = selectedMatches.find((match) => match.id === data.C);

  const isSelected = (key: string) =>
    selectedMatch && selectedMatch.selectedKey === key;

  return (
    <tr className="text-center h-16" {...rest}>
      <td className="text-left border" style={{ width: columnWidths[0] }}>
        {data?.C} {data?.T} {data?.N}
      </td>
      <td className="border" style={{ width: columnWidths[1] }}>
        Yorumlar
      </td>
      <td className="border" style={{ width: columnWidths[2] }}>
        {data?.OCG["1"].MBS}
      </td>
      <td
        className={`border ${
          isSelected("1") ? "bg-yellow-200 text-black" : ""
        }`}
        style={{ width: columnWidths[3] }}
        onClick={() =>
          toggleSelection(data.C, "1", data.N, data?.OCG["1"].OC[0].O)
        }
      >
        {data?.OCG["1"].OC[0].O}
      </td>
      <td
        className={`border ${
          isSelected("x") ? "bg-yellow-200 text-black" : ""
        }`}
        style={{ width: columnWidths[4] }}
        onClick={() =>
          toggleSelection(data.C, "x", data.N, data?.OCG["1"].OC[1].O)
        }
      >
        {data?.OCG["1"].OC[1].O}
      </td>
      <td className="border" style={{ width: columnWidths[5] }}></td>
      <td
        className={`border ${
          isSelected("Alt") ? "bg-yellow-200 text-black" : ""
        }`}
        style={{ width: columnWidths[6] }}
        onClick={() =>
          toggleSelection(data.C, "Alt", data.N, data?.OCG["5"].OC["25"].O)
        }
      >
        {data?.OCG["5"].OC["25"].O}
      </td>
      <td
        className={`border ${
          isSelected("Üst") ? "bg-yellow-200 text-black" : ""
        }`}
        style={{ width: columnWidths[7] }}
        onClick={() =>
          toggleSelection(data.C, "Üst", data.N, data?.OCG["5"].OC["26"].O)
        }
      >
        {data?.OCG["5"].OC["26"].O}
      </td>
      <td className="border" style={{ width: columnWidths[8] }}></td>
      <td className="border" style={{ width: columnWidths[9] }}></td>
      <td className="border" style={{ width: columnWidths[10] }}></td>
      <td className="border" style={{ width: columnWidths[11] }}></td>
      <td className="border" style={{ width: columnWidths[12] }}></td>
      <td
        className={`border ${
          isSelected("1-X") ? "bg-yellow-200 text-black" : ""
        }`}
        style={{ width: columnWidths[13] }}
        onClick={() =>
          toggleSelection(data.C, "1-X", data.N, data?.OCG["2"].OC["3"].O)
        }
      >
        {data?.OCG["2"].OC["3"].O}
      </td>
      <td
        className={`border ${
          isSelected("1-2") ? "bg-yellow-200 text-black" : ""
        }`}
        style={{ width: columnWidths[14] }}
        onClick={() =>
          toggleSelection(data.C, "1-2", data.N, data?.OCG["2"].OC["4"].O)
        }
      >
        {data?.OCG["2"].OC["4"].O}
      </td>
      <td
        className={`border ${
          isSelected("X-1") ? "bg-yellow-200 text-black" : ""
        }`}
        style={{ width: columnWidths[15] }}
        onClick={() =>
          toggleSelection(data.C, "X-1", data.N, data?.OCG["2"].OC["5"].O)
        }
      >
        {data?.OCG["2"].OC["5"].O}
      </td>
      <td className="border" style={{ width: columnWidths[16] }}></td>
      <td className="border" style={{ width: columnWidths[17] }}></td>
      <td className="border" style={{ width: columnWidths[18] }}></td>
    </tr>
  );
};

export const Row = memo(RowComponent);
export const RowTitle = memo(RowTitleComponent);
