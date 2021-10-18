import React, { Fragment } from 'react';
import { gql, useQuery } from '@apollo/react-hooks';
/**
 * 1.Create a query to get all cities (name and country field).
 */
export default function Places() {

    const placesquery = gql`
        {
            cities {
                name,
                country{name},
            }
        }
    `;
    const { loading, error, data } = useQuery(placesquery);

    if (loading) return <p>Loading...</p>;
    if (error) return `Error ${error.message}`;
    return (
        <Fragment>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <h1>Places</h1>
                <table>
                    <thead>
                    <tr>
                        <th>
                        City
                        </th>
                        <th>
                        Country
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            data.cities.map((city, index) => 
                            <tr key={index}>
                                <td>{city.name}</td>
                                <td>{city.country.name}</td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </Fragment>
    );
}