import React, { useState } from "react";
const Filter = ({ filteration }) => {
    const [filter, setFilter] = useState("");

    const filterHandler = (e) => {
        const name = e.target.value;
        setFilter(name);
        filteration(name);
    };
    return (
        <div >
            <input
                type="text"
                placeholder="filter by name"
                value={filter}
                onChange={filterHandler}
            />
        </div>
    );
};
export default Filter;