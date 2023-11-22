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
        // Sort the data by a specific property (e.g., 'name')
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

    const imagePath = require('../assets/visa-black.svg').default;
    console.log('the path: ' + imagePath);
    const brnds = [
        { "id": 1, "name": "visa-black", "icon": null },
        { "id": 2, "name": "tyme-bank-black", "icon": null},
        { "id": 3, "name": "distell-black", "icon": null },
        { "id": 4, "name": "spotify-black", "icon": null },
        { "id": 5, "name": "microsoft-black", "icon": null },
        { "id": 6, "name": "engen-black", "icon": null },
        { "id": 7, "name": "engen-black", "icon": null },
        { "id": 8, "name": "nike-black", "icon": null },
        { "id": 9, "name": "wesgrow-black", "icon": null },
        { "id": 10, "name": "multichoice-black", "icon": null },
        { "id": 11, "name": "pnp-black", "icon": null },
        { "id": 12, "name": "liquid-black", "icon": null },
        { "id": 13, "name": "tfg-black", "icon": null },
        { "id": 14, "name": "sanlam-black", "icon": null },
        { "id": 15, "name": "santam-black", "icon": null }
    ];

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
                        {brnds.map(brand => (
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