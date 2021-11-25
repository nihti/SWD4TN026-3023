// React on default export, useEffect ja useState export 
import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import Button from '@mui/material/Button';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import AddCar from './AddCar';
import { fetchData } from './Services';
import { Fragment } from 'react';
import EditCar from './EditCar';
import Snackbar from '@mui/material/Snackbar';

export default function Carlist() {
    const [cars, setCars] = useState([]);
    const [open, setOpen] = useState(false);
    const [msg, setMsg] = useState('');
    // Datan viemistä CSV muodossa varten oleva uusi state joka täytetään AgGridReact komponentista löytyvällä datalla myöhemmin
    // https://www.ag-grid.com/react-data-grid/csv-export/#example-csv-export 
    const [gridApi, setGridApi] = useState(null);
    
    // useEffect funktiolla ja  tyhjällä taululla cars staten täyttämiseksi datalla sivun ladatessa ensimmäisen kerran
    useEffect(() => fetchData(setCars), []);

    // default behaviour for columns
    const defaultColDef = {
        sortable: true,
        filter: true
    }

    // actual columns 
    const columns = [
        { field: 'brand' },
        { field: 'model' },
        { field: 'color', width: 120 },
        { field: 'year', width: 120 },
        { field: 'fuel', width: 120 },
        { field: 'price', width: 120 },
        {
            headerName: '',
            field: '_links.self.href',
            sortable: false,
            filter: false,
            width: 120,
            cellRendererFramework: params => <EditCar params={params} uCar={updateCar} editCar={addCar} />
        },
        {  
            headerName: '', 
            field: '_links.self.href', 
            sortable: false, 
            filter: false, 
            width: 120,
            cellRendererFramework: p => (
                <Button 
                    size="small" 
                    onClick={ () => deleteCar(p.value) }
                    color="error" 
                    >
                    Delete
                </Button>
            )
        },
    ];

    const updateCar = (url, uCar) => {
        fetch(url, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(uCar)
        })
        .then(res => {
            if (res.ok) {
                fetchData(setCars)
                setMsg('Muokkaus onnistui!')
                setOpen(true)
            } else {
                alert('Muokkaus epäonnistui')
            }
        })
        .catch(err => console.log(err))
    }

    const deleteCar = (url) => {
        if (window.confirm('Are you sure?')) {
            console.log(url);
            fetch(url, { method: 'DELETE' })
            .then(res => {
                if (res.ok) {  
                    fetchData(setCars)
                    setMsg('Poisto onnistui!')
                    setOpen(true)
                } else {
                    alert('Error')
                }
            })
            .catch(err => console.error(err));
        }
    }

    const addCar = (car) => {
        fetch('https://carstockrest.herokuapp.com/cars', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(car)
        })
        .then(resp => {
            if (resp.ok) {
                fetchData(setCars);
                setMsg('Lisäys onnistui!')
                setOpen(true)
            } else {
                alert('jokin meni vikaan lisäyksessä')
            }
        })
        .catch(err => console.error(err));
    }

    // AgGridReact-komponentin attribuutille onGridReady luotu funktio 
    const onGridReady = (p) => {
        setGridApi(p.api);
    };

    const onBtnExport = () => {
        gridApi.exportDataAsCsv();
      };

    return(
        <Fragment>
            <div className="ag-theme-alpine" style={{ height: 600, width: '80%', margin: 'auto', paddingTop: '80px'}}>
                <Button onClick={() => onBtnExport()}> CSV </Button>
                <AddCar addCar={ addCar } />
                <AgGridReact 
                    rowData={cars}
                    columnDefs={columns}
                    defaultColDef={defaultColDef}
                    pagination={true}
                    paginationPageSize={10} 
                    suppressCellSelection={true}
                    suppressExcelExport={true}
                    onGridReady={onGridReady}
                />
            </div>
            <Snackbar 
                open={open}
                autoHideDuration={3000}
                onClose={() => setOpen(false)}
                message="Car edited succesfully"
            />
        </Fragment>
    )
};