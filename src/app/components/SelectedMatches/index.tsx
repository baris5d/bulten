import { useSelectedMatches } from "@/app/context/selectedMatchesContext";

export const SelectedMatches = () => {
  const { selectedMatches, toggleSelection } = useSelectedMatches();
  return (
    <div className="fixed right-0 bottom-0 bg-white text-black p-4">
      <ul>
        {selectedMatches.map((match) => (
          <li key={match.id}>
            Kod: {match.id} Maç: {match.match} Oran: {match.rate}
          </li>
        ))}
      </ul>
      <strong> Toplam Oran: </strong>{" "}
      {selectedMatches
        .reduce((acc, match) => acc * parseFloat(match.rate), 1)
        .toFixed(2)}
    </div>
  );
};
