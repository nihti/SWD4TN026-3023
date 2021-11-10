import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import Button from '@mui/material/Button';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export default function Carlist() {
    const [cars, setCars] = useState([]);
    const [selectedCar, setSelectedCar] = useState({});
    
    // useEffect funktiolla ja  tyhjällä taululla cars staten täyttämiseksi datalla sivun ladatessa ensimmäisen kerran
    useEffect(() => fetchData(), []);

    // fetchData funktio 
    const fetchData = () => {
        fetch('https://carstockrest.herokuapp.com/cars')
        .then(res => res.json())
        .then(data => setCars(data._embedded.cars))
        .catch(err => console.error(err))
    };

    // default behaviour for columns
    const defaultColDef = {
        sortable: true,
        filter: true
    }

    // actual columns 
    const columns = [
        { field: 'brand' },
        { field: 'model' },
        { field: 'color' },
        { field: 'year' },
        { field: 'fuel' },
        { field: 'price' },
        { field: '_links.self.href', checkboxSelection: true, sortable: false, filter: false }
    ];

    // row selection type, single or multiple 
    const rowSelType = 'single';

    // row selection handling
    const onSelectionChanged = (e) => {
        // get event selected row
        // https://www.ag-grid.com/react-data-grid/grid-interface/
        // https://thinkster.io/tutorials/using-ag-grid-with-react-selection/events-selection-api
        const selRow = e.api.getSelectedRows();
        const car = selRow[0]; 
        // const link = car._links.car.href 
        // let id = link.split("https://carstockrest.herokuapp.com/cars/");
        // id = id[1];
        setSelectedCar(car);
    }

    // delete row
    const delRow = () => {  
        if (window.confirm(`Are you sure you want to delete car ${selectedCar.brand} ${selectedCar.model}, year ${selectedCar.year}?`)) {
            const link = selectedCar._links.car.href;
            console.log(link);
            fetch(link, {method: 'DELETE'})
            .then(res => fetchData())
            .catch(err => console.error(err));
        }
    }

    return(
        <div className="ag-theme-alpine" style={{ height: 600, width: '80%', margin: 'auto', paddingTop: '80px'}}>
            <AgGridReact 
                rowData={cars}
                rowSelection={rowSelType}
                columnDefs={columns}
                defaultColDef={defaultColDef}
                pagination={true}
                paginationPageSize={10} 
                onSelectionChanged={onSelectionChanged}
            />
            <Button variant="contained" color="secondary" onClick={delRow} >Delete selected</Button>
        </div>
    )
};