import { useContext } from "react";
import UserContext from "@/context/UserContext";

export const CardsList = () => {
  const context = useContext(UserContext);

  if (!context.state.cards) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex gap-2 pt-6 flex-wrap justify-center">
      {context.state.cards.map((card, index) => {
        return (
          <div key={index} className="bg-gray-200 w-1/3 p-8">
            <img src={card.image} alt="Картинка" />
            <h2 className="text-2xl font-medium">{card.title}</h2>
            <p>{card.content}</p>
          </div>
        );
      })}
    </div>
  );
};
