function CountryList({ countries }) {
    return (
        <div>
            <h1> List of countries </h1>
            <table>
                <tr> 
                    <th>Code</th>
                    <th>Country</th>
                    <th>Currency</th>
                    <th>Population</th>
                </tr>
                {countries.map(country => {
                    return (
                        <tr>
                            <td>{country.countryCode}</td>
                            <td>{country.countryName}</td>
                            <td>{country.currencyCode}</td>
                            <td>{country.population}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default CountryList

export async function getStaticProps() {
    const response = await fetch('https://cdn.jsdelivr.net/gh/amalajce/nextjs@main/countries.json')
    const data = await response.json()
    return {
        props: {
            countries: data.countries.country
        }
    }
}
