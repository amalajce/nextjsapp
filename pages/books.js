export default function Home(props) {
    return (
        <div>
            <div>
                {props.books.map(book =>
                    <div
                        key={book.id}>
                        <h2>{book.title} - {book.languages} (Pages : {book.pages})</h2>
                    </div>)}
            </div>
        </div>
    )
}
import fsPromises from 'fs/promises';
import path from 'path'
export async function getStaticProps() {
    const filePath = path.join(process.cwd(), '/lib/books.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData);
    return {
        props: objectData
    }
}
