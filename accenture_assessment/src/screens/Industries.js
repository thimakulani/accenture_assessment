import React, { useEffect, useState } from 'react';
const Industries =()=>{
    const [brands, setBrands] = useState([]);
    const [sorted, setSorted] = useState(false);
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
   useEffect(() => {
        // Fetch data from the API endpoint
        fetch('http://localhost:500')
            .then((response) => response.json())
            .then((data) => setBrands(data))
            .catch((error) => console.error('Error fetching data: ', error));
    }, []);

    const handleSort = () => {
        // Sort the data by a specific property
        const sortedData = [...brands].sort((a, b) => a.name.localeCompare(b.name));
        setBrands(sortedData);
        setSorted(true);
    };
    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);

        const filtered = brands.filter((item) =>
            item.name.toLowerCase().includes(term)
        );
        setFilteredData(filtered);
    };


    //const imagePath = require('../assets/visa-black.svg').default;
    const get_file = (name) => {
        const path = require(`../assets/${name}.svg`).default;
        console.log(path);
        return path;
    };


    return(
        <section className="bottom-panel">
            <section className="bottom-img-text">
                <img className='img-object'/><p id='we_do'>You’ll be in good company</p>
            </section>
            <p id="we_offer" >Trusted by leading brands</p>


            <div className="search-sort-container">
                <input
                    type="text"
                    placeholder="Search by name"
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <button className='btn_style' onClick={handleSort}>Sort by Name</button>
            </div>


            <section>
                <div className="brand-list-container">
                    <div className="brand-list">
                        {brands.map(brand => (
                            <div key={brand.id} className="brand-item">
                                <img src={get_file(brand.name)} alt={brand.name} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </section>

    )
};
export default  Industries;