function CountryList({ countries }) {
    return (
        <div>
            <h1> List of Books </h1>
            <table>
                <tr> 
                    <th>Code</th>
                    {/* <th>Country</th>
                    <th>Currency</th>
                    <th>Population</th> */}
                </tr>
                {countries.map(country => {
                    return (
                        <tr>
                            <td>{country.title}</td>
                            {/* <td>{country.countryName}</td>
                            <td>{country.currencyCode}</td>
                            <td>{country.population}</td> */}
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default CountryList

export async function getStaticProps() {
    const response = await fetch('http://localhost:3000/api/hello')
    const data = await response.json()
    return {
        props: {
            countries: data.books
        }
    }
}
