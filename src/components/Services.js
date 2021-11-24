/**
 * Ideoitu tämän blogin pohjalta:
 * https://www.robinwieruch.de/react-folder-structure/
 * 
 */

// hae data funktio 
export const fetchData = (cars) => {
    fetch('https://carstockrest.herokuapp.com/cars')
    .then(res => res.json())
    .then(data => cars(data._embedded.cars))
    .catch(err => console.error(err))
}

/*
// row selection handling
export const onSelectionChanged = (selectedCar) => {
    // get event selected row
    // https://www.ag-grid.com/react-data-grid/grid-interface/
    // https://thinkster.io/tutorials/using-ag-grid-with-react-selection/events-selection-api
    const selRow = selectedCar.api.getSelectedRows();
    const car = selRow[0]; 
    // const link = car._links.car.href 
    // let id = link.split("https://carstockrest.herokuapp.com/cars/");
    // id = id[1];
    selectedCar(car);
}
*/