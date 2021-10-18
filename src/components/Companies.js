import React, { Fragment } from 'react';
import { gql, useQuery } from '@apollo/react-hooks';
/**
 * 2.Create a query to get all companies (name and website URL)
 */
export default function Companies() {

    // variables
    const companiesquery = gql`
        { 
            companies { 
                name,  
                websiteUrl, 
            }
        }
    `;
    const { loading, error, data } = useQuery(companiesquery);

    // conditional rendering
    if (loading) return <p>Loading...</p>;
    if (error) return `Error ${error.message}`;
    return (
        <Fragment>
            <div style={{display: 'flex', flexDirection: 'column'}}>
            <h1>Companies</h1>
            <table>
                <thead>
                <tr>
                    <th>
                    Company
                    </th>
                    <th>
                    Website
                    </th>
                </tr>
                </thead>
                <tbody>
                    {
                    data.companies.map((company, index) => 
                    <tr key={index}>
                        <td>{company.name}</td>
                        <td><a href={company.websiteUrl} style={{fontSize: '12px'}}>{company.websiteUrl}</a></td>
                    </tr>
                    )
                    }
                </tbody>
            </table>
            </div>
        </Fragment>
    );
}
