import { useSelectedMatches } from '@/app/context/selectedMatchesContext';

export const SelectedMatches = () => {
  const { selectedMatches } = useSelectedMatches();
  return (
    <div className="fixed bottom-0 right-0 bg-white p-4 text-black">
      <ul>
        {selectedMatches.map((match) => (
          <li key={match.id}>
            Kod: {match.id} Maç: {match.match} Oran: {match.rate}
          </li>
        ))}
      </ul>
      <strong> Toplam Oran: </strong>{' '}
      {selectedMatches
        .reduce((acc, match) => acc * parseFloat(match.rate), 1)
        .toFixed(2)}
    </div>
  );
};
