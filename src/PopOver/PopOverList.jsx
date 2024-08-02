import React from "react";
import { Link } from "react-router-dom";
import cn from "Utils/cn";

const PopOverList = ({ items = [], className = "" }) => {
  return (
    <ul>
      {items.map((item, val) => (
        <div
          onClick={item?.onClick}
          className={cn("border-b-1 text-[14px] hover:opacity-60", className)}
          key={val}
        >
          <Link to={item?.linkToItem}>
            <span
              className={cn(
                "flex gap-3 items-center py-[9px] px-3 hover:text-primary",
                item?.style,
              )}
            >
              {item?.icon}
              <li className=" hover:text-primary">{item?.name} </li>
            </span>
          </Link>
        </div>
      ))}
    </ul>
  );
};

export default PopOverList;
