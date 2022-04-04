import './filter-nav-bar.css'

const FilterNavBar = () => {
    return(
        <div className="filter-nav-bar">
            <div className="search">
                <input type="search" placeholder="Search"/>
            </div>
            <div className="filtres">
                <select className="filtres-select">
                    <option value="Filter-1">Filter 1</option>
                    <option value="filter-2">Filter 2</option>
                    <option defaultValue="filter-3">Filter 3</option>
                    <option value="filter-4">Filter 4</option>
                </select>
                <select className="filtres-select">
                    <option value="Filter-1">Filter 1</option>
                    <option value="filter-2">Filter 2</option>
                    <option defaultValue="filter-3">Filter 3</option>
                    <option value="filter-4">Filter 4</option>
                </select>
                <select className="filtres-select">
                    <option value="Filter-1">Filter 1</option>
                    <option value="filter-2">Filter 2</option>
                    <option defaultValue="filter-3">Filter 3</option>
                    <option value="filter-4">Filter 4</option>
                </select>
                <button className="btn btn-danger" type="submit">Apply</button>
            </div>
        </div>
    );
}

export default FilterNavBar