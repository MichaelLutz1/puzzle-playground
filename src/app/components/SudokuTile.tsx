export default function SudokuTile({ value, position }: { value: number, position: number }) {
  return (
    <div className="w-12 h-12 bg-blue-600">
      {value === null ? "" : value}
    </div>
  );
}
