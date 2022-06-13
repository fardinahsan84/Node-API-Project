import React, {useState} from 'react';
import data from '../../data';

const SearchBar = () => {
    const [filter, setfilter] = useState('');

    const searchText = (event) => {
        setfilter(event.target.value);
    }
    let dataSearch = data.cardData.filter(item =>{
        return Object.keys(item).some(key =>
                item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
            )
    });

    return (
        <section className='py-4 container'>
            <div className='row justify-content-center'>
                <div className='col-12 mb-5 row justify-content-center'>
                    <div className='col-6'>
                        <input  
                            type="text"
                            className='form-control'
                            value={filter}
                            onChange = {searchText.bind(this)}
                            placeholder = 'Search...'
                        />
                    </div>
                </div>

                {dataSearch.map((item, index) => {
                    return (
                        <div className='col-11 col-md-4 col-lg3 mx-0 mb-4'>
                            <div className='card p-0 overflow-hidden h-100 shadow'>
                                <img src={item.img} className='card-img-top' />
                                <div className='card-body' >
                                    <h5 className='card-title'>{item.title}</h5>
                                    <p className='card-text'>{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    );
};

export default SearchBar;