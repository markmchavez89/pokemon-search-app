import React, { useState } from 'react';
import pokemon from './pokemondata';

function Search() {
    const [searchTerm, setSearchTerm] = useState('');

    function searchText(event) {
        setSearchTerm(event.target.value);
    }
    let dataSearch = pokemon.filter((val) => {
        if(val.name.toLowerCase().includes(searchTerm.toLowerCase()) || val.type.toLowerCase().includes(searchTerm.toLowerCase())){
            return "val";
        }
        });
    return (
        <section className="py-4 container">
            <div className="row justify-content-center">

                <div className="col-12 mb-5">
                    <div className="mb-3 col-4 mx-auto text-center">
                        <input 
                        type="text" 
                        value={searchTerm} 
                        className="form-control"
                        onChange={searchText} 
                        placeholder="Search for a Pokemon..."
                        />
                    </div>
                </div>
                
                {dataSearch.map((pokemon) => {
                return (
                    <div className="col-11 col-md-6 col-lg-4 mx-0 mb-4">
                        <div className="card p-1 overflow-hidden h-100 shadow">
                            <img src={pokemon.img} className="card-image-top" />
                            <div className="card-body">
                                <h5 className="card-title">{pokemon.name}</h5>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Search;