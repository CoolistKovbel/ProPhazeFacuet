"use client";
import { useModal } from "../hooks/use-modal-store";

const ListComponent = () => {
  const { onOpen } = useModal();

  const handleAddToken = () => {
    try {
      console.log("handle click");
      onOpen("addToken");
    } catch (error) {
      console.log("error");
    }
  };

  const handleToggleFavorite = () => {
    try {
      console.log("handle click");
    } catch (error) {
      console.log("Error");
    }
  };

  return (
    <section className="bg-[#222] p-4">
      {/* NAv */}
      <div className="bg-[#111] p-4 flex items-center justify-between  gap-4">
        <button onClick={handleAddToken} className="bg-[#444] p-2 rounded-lg">
          AddToken
        </button>

        <form>
          <input type="text" placeholder="search" className="p-4 bg-[#222] font-bold" />
        </form>

        <button
          onClick={handleToggleFavorite}
          className="bg-[#444] p-2 rounded-lg"
        >
          Fav
        </button>
      </div>

      <div>
        <h2></h2>
      </div>
    </section>
  );
};

export default ListComponent;
