import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Category = ({ category, slug }) => {
    const [searchQuery, setSearchQuery] = useState(slug);
    console.log(searchQuery);
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/search?category=${encodeURIComponent(searchQuery)}`);
    };

    return (
        <button
            className="rounded-full bg-amarelo-01 text-medium font-textos text-amarelo-04 py-0.5 px-2.5"
            onClick={handleSearch}
        >
            {category}
        </button>
    );
};

export default Category;
