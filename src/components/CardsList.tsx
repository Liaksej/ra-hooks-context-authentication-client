import { useContext } from "react";
import UserContext from "@/context/UserContext";

export const CardsList = () => {
  const context = useContext(UserContext);

  if (!context.state.cards) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex gap-2">
      {context.state.cards.map((card, index) => {
        return (
          <div key={index} className="bg-gray-200 w-2/3 mx-auto my-6 p-16 ">
            <img src={card.img} alt="Картинка" />
            <h2>{card.title}</h2>
            <p>{card.content}</p>
          </div>
        );
      })}
    </div>
  );
};
