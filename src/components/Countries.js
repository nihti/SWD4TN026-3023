/**
 * Use Country GraphQL Api to show list of countries 
 * (code, name and continent) 
 * https://countries.trevorblades.com/
 */
 import React, { Fragment } from 'react';
 import { gql, useQuery } from '@apollo/react-hooks';
 export default function Countries() {

    const countriesquery = gql`
        {
            countries {
                code,
                name,
                continent{name},
            }
        }
    `;
    const { loading, error, data } = useQuery(countriesquery);

    if (loading) return <p>Loading...</p>;
    if (error) return `Error ${error.message}`;
    return (
        <Fragment>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <h1>Countries</h1>
                <table>
                    <thead>
                    <tr>
                        <th>
                            Code
                        </th>
                        <th>
                            Country
                        </th>
                        <th>
                            Continent
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            data.countries.map((country, index) => 
                            <tr key={index}>
                                <td>{country.code}</td>
                                <td>{country.name}</td>
                                <td>{country.continent.name}</td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </Fragment>
    );
}