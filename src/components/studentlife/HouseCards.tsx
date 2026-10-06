import { houses } from "../../data/content";

export default function HouseCards() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {houses.map((house) => (
        <div
          key={house.name}
          className="border border-rule rounded-sm p-5 border-t-4"
          style={{ borderTopColor: house.colorHex }}
        >
          <h4 className="text-base mb-1">{house.name}</h4>
          <p className="text-sm m-0">{house.description}</p>
        </div>
      ))}
    </div>
  );
}
