import React from 'react';
import {useContext} from 'react';
import {RoomContext} from '../context';
import Title from "../components/Title";
// get all unique value
const getUnique = (items, value)=>{
    return[...new Set(items.map)]
};

export default function RoomFilter(rooms) {
    const context = useContext(RoomContext)
    const {
        handleChange,
          type, 
          capacity,
          price, 
          minPrice, 
          maxPrice, 
          minSize, 
          maxSize, 
          breakfast, 
          pets
    } = context;
    //get unique types
    let types = getUnique(rooms, 'type');
    //add all
    types = ["all", ...types];
    //map to jsx
    types = types.map((item, index)=>{
        return <option value={item} key={index}>{item}</option>
    })

    let people = getUnique(rooms, 'capacity');
     people = people.map((item, index)=>{
     return <option key= {index} value={item}>{item}</option>
     })
     
    return (
        <section className="filter-container">
            <Title title="search rooms" />
            <form className="filter-form">
                {/* select type*/}
                <div className="form-group">
                    <label htmlFor ="type">room type</label>
                    <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                        
                        <option value="all">all</option>
                        <option value="single">single</option>
                        <option value="double">double</option>
                        <option value="family">family</option>
                        <option value="presidential">presidential</option>

                    </select>

                </div>
                {/*end select type */}
                
                {/* guests */}
                <div className="form-group">
                    <label htmlFor ="capacity">Guests</label>
                    <select 
                        name="capacity" 
                        id="capacity" 
                        value={capacity} 
                        className="form-control" 
                        onChange={handleChange}>
                        
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>

                </div>
                {/*end guests  */}

                {/* room Price */}
            <div className="form-group">
                <label htmlFor="price">
                    room price ${price}
                </label>
                <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control my_class" />
            </div>
                {/* end room price */}

                {/* Size */}
                    <div className="form-control">
                        <label htmlFor="size">room size</label>
                        <div className="size-inputs">
                            <input  name="minSize" id="size"
                            value={minSize} onChange={handleChange} className="size-input" />
                            <input  name="maxSize" id="size"
                            value={maxSize} onChange={handleChange} className="size-input"  />
                        </div>
                    </div>
                {/* end size */}

                {/* extras */}

                    <div className="form-group">
                        {/* breakfast */}
                        <div className="single-extra">
                            <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
                            <label htmlFor>breakfast</label>
                            
                        </div> 
                        
                        {/* end breakfast */}

                        {/* pets */}
                        <div className="single-extra">
                            <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} />
                            <label htmlFor ="pets">pets</label>
                            
                        </div> 
                        {/* end pets */}

                    </div>

                {/* end extras */}

            </form>
        </section>
    )
}
