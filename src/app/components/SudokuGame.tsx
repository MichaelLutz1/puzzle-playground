export default function SudokuGame() {
  const tiles = Array.from({ length: 81 }, (_, i) => i + 1);
  return (
    <div className="w-96 h-96 bg-red-600">
      {tiles.map((tile) => (
        <div key={tile} className="w-12 h-12 bg-blue-600">
          {tile}
        </div>
      ))}
    </div>
  );
}
