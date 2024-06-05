import { useSelectedMatches } from "@/app/context/selectedMatchesContext";
import { Bulletin } from "@/app/types/bulletin";
import { memo, useEffect } from "react";
const RowComponent = ({ data }: { data: Bulletin }) => {
  const { selectedMatches, toggleSelection } = useSelectedMatches();
  const selectedMatch = selectedMatches.find((match) => match.id === data.C);

  const isSelected = (key: string) =>
    selectedMatch && selectedMatch.selectedKey === key;

  useEffect(() => {
    console.log("Row rendered");
  }, []);
  return (
    <>
      <tr className="text-center w-full">
        <td className="text-left border">
          {data?.D} {data?.DAY} {data?.LN}
        </td>
        <td className="border">Yorumlar</td>
        <td className="border"></td>
        <td className="border">1</td>
        <td className="border">x</td>
        <td className="border">2</td>
        <td className="border">Alt</td>
        <td className="border">Üst</td>
        <td className="border">H1</td>
        <td className="border">1</td>
        <td className="border">x</td>
        <td className="border">2</td>
        <td className="border">H2</td>
        <td className="border">1-X</td>
        <td className="border">1-2</td>
        <td className="border">X-2</td>
        <td className="border">Var</td>
        <td className="border">Yok</td>
        <td className="border">+99</td>
      </tr>
      <tr className="text-center h-16">
        <td className="text-left border">
          {data?.C} {data?.T} {data?.N}
        </td>
        <td className="border">Yorumlar</td>
        <td className="border">{data?.OCG["1"].MBS}</td>
        <td
          className={`border ${
            isSelected("1") ? "bg-yellow-200 text-black" : ""
          }`}
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
          onClick={() =>
            toggleSelection(data.C, "x", data.N, data?.OCG["1"].OC[1].O)
          }
        >
          {data?.OCG["1"].OC[1].O}
        </td>
        <td className="border"></td>
        <td
          className={`border ${
            isSelected("Alt") ? "bg-yellow-200 text-black" : ""
          }`}
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
          onClick={() =>
            toggleSelection(data.C, "Üst", data.N, data?.OCG["5"].OC["26"].O)
          }
        >
          {data?.OCG["5"].OC["26"].O}
        </td>
        <td className="border"></td>
        <td className="border"></td>
        <td className="border"></td>
        <td className="border"></td>
        <td className="border"></td>
        <td
          className={`border ${
            isSelected("1-X") ? "bg-yellow-200 text-black" : ""
          }`}
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
          onClick={() =>
            toggleSelection(data.C, "X-1", data.N, data?.OCG["2"].OC["5"].O)
          }
        >
          {data?.OCG["2"].OC["5"].O}
        </td>
        <td className="border"></td>
      </tr>
    </>
  );
};

export const Row = memo(RowComponent);
