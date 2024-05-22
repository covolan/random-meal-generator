export default function Button({fetchData}) {
  return (
    <button
      onClick={fetchData}
      className="bg-sky-300 transition ml-auto mr-auto text-stone-800 ease-in-out hover:bg-sky-500 hover:scale-110 hover:-translate-y-1 font-sans text-lg font-medium rounded-md px-4 py-3 mt-10"
    >
      {" "}
      🥘 Generate Random Meal 🍟
    </button>
  );
}
