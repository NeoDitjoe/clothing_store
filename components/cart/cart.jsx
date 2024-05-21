import Image from "next/image";
import { IoTrashBin } from "react-icons/io5";

export default function Cart(props) {
  const { image, name, price, qty } = props;

  const numofOptions = [];

  for (let i = 0; i < 13; i++) {
    numofOptions.push(i);
  }

  return (
    <div>
      <div className="flex justify-between m-2 bg-blue-100 p-1 pl-10 pr-10 border-b border-green-200 items-center rounded">
        <div>
          <Image src={image} alt={name} width="60" height="40" />
        </div>

        <div className="text-right font-bold">
          <h5 className="text-orange-400">{name}</h5>
          <h3>R {(Number(price) * 19).toFixed(2)}</h3>
        </div>

        <div className="flex flex-col gap-5 items-center">
          <select
            name=""
            id=""
            className="cursor-pointer w-20 text-center h-8 rounded"
          >
            <option value="">{qty}</option>
            {numofOptions.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </select>

          <IoTrashBin
            size={20}
            color="red"
            className="cursor-pointer"
            onClick={() => console.log(name)}
          />
        </div>
      </div>
    </div>
  );
}
