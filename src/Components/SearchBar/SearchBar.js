import React , { useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


const SearchBar = ({category, onChange, categoryValue, keyPress,handleClickEvent,nameForm}) => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const [state, setState] = useState('')
    
    // console.log(category)
    return (
        
        <React.Fragment>
         <section className="filter-search">
                <div className="container">
                    <div className="row">
                         <div className="col-lg-6 col-12">
                        <div className="row">
                            <div className="col-md-4 col-12">
                                <div className="form-group">
                                    <label>From</label>
                                    <DatePicker
                                        selected={startDate}
                                        onChange={date => setStartDate(date)}
                                        selectsStart
                                        startDate={startDate}
                                        endDate={endDate}
                                        showYearDropdown
                                        placeholderText="Select"
                                        className="form-control" 
                                    />
                                </div>
                            </div>
                            <div className="col-md-4 col-12">
                                <div className="form-group">
                                    <label>To</label>
                                    <DatePicker
                                        selected={endDate}
                                        onChange={date => setEndDate(date)}
                                        selectsEnd
                                        startDate={startDate}
                                        endDate={endDate}
                                        minDate={startDate}
                                        showYearDropdown
                                        placeholderText="Select"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                            <div className="col-md-4 col-12">
                                <div className="form-group">
                                    <label>Category</label>
                                    <select className="form-control" defaultValue={categoryValue} onChange={onChange}>
                                    <option value="">All</option>
                                    {category.map(item => (
                                            <option
                                            key={item.id}
                                            value={item.id}
                                            >
                                            {item.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                        <form ref={nameForm} className="col-lg-6 col-md-8 col-12 search-box">
                            <div className="form-group">
                                <label className="sr-only">search</label>
                                <input type="text" 
                                onKeyDown={keyPress}
                                 className="form-control"
                                  placeholder="Search Services"
                                  value={state}
                                  name='search'
                                  onChange={(e) => setState(e.target.value)}
                                   />
                                <button type="button" onClick={handleClickEvent} className="btn btn-light"><i className="fas fa-search"></i></button>
                            </div>
                            <span>Sort by <img src={process.env.PUBLIC_URL + "assets/images/sort.png"} alt="sort" /></span>
                        </form>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default SearchBar;