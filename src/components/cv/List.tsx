import { NewList } from "../../types";

interface Props {
  color?: string;
  nameList?: string;
  capitalize?: boolean;
  lists: NewList[];
  fontSize?: string;
}

const List = ({
  color,
  nameList,
  capitalize = false,
  lists,
  fontSize = "text-sm",
}: Props) => {
  const CAPITALIZE = capitalize && "capitalize";
  return (
    <div className="w-full mb-2">
      {nameList && (
        <h3 className="w-full pl-2 mb-2" style={{ backgroundColor: color }}>
          {nameList}
        </h3>
      )}
      <ul
        className={`w-full pl-4 ${CAPITALIZE} ${fontSize} marker:text-black list-disc text-black`}>
        {lists?.map((item) => (
          <li className="font-normal" key={item.id}>
            {item.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
