export function ResetButton({ onClick }) {
  return (
    <button
      className="cursor-pointer mt-2.5 bg-transparent border border-gray-400 py-1 px-3 rounded"
      onClick={onClick}
    >
      Сбросить
    </button>
  );
}
