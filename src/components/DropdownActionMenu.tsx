import React, { useEffect, useRef } from "react";

type MenuItem = {
    label: string;
    onClick: () => void;
    color?: "red" | "green" | "orange" | "default" | "black";
};

type DropdownActionMenuProps = {
    items: MenuItem[];
    isOpen: boolean;
    onClose: () => void;
};

const DropdownActionMenu: React.FC<DropdownActionMenuProps> = ({
    items,
    isOpen,
    onClose,
}) => {
    const menuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                onClose();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [onClose]);

    if (!isOpen) return null;

    return (
        <div
            ref={menuRef}
            className="z-50 absolute mb-1 mt-[-20] right-6 w-45 bg-white rounded-md shadow-lg border border-gray-200 "
        >
            <ul className="z-1 text-sm rounded min-w-max">
                {items.map((item, index) => {
                    // let colorClass = "text-gray-800 hover:bg-gray-100";
                    // if (item.color === "red") colorClass = "text-red-600 hover:bg-red-50";
                    // else if (item.color === "green") colorClass = "text-green-600 hover:bg-green-50";
                    // else if (item.color === "orange") colorClass = "text-orange-500 hover:bg-orange-50";

                    return (
                        <li
                            key={index}
                            onClick={item.onClick}
                            className={`z-99 px-4 py-2 text-sm cursor-pointer hover:bg-gray-200 
    ${item.color === "red" ? "text-red-600" : ""} 
    ${item.color === "green" ? "text-green-600" : ""} 
    ${item.color === "black" ? "text-black" : ""} 
    whitespace-nowrap`}
                        >
                            {item.label}
                        </li>

                    );
                })}
            </ul>
        </div>
    );
};

export default DropdownActionMenu;
