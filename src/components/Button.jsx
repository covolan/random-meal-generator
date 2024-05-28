export default function Button({fetchData}) {
  return (
    <button
      onClick={fetchData}
      className="bg-teal-900 transition ml-auto mr-auto text-white ease-in-out hover:bg-teal-950 hover:scale-110 hover:-translate-y-1 font-sans text-lg font-medium rounded-md px-4 py-3 mt-10"
    >
      {" "}
      🥘 Generate Random Meal 🍟
    </button>
  );
}
