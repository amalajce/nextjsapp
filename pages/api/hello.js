export default function handler(req, res) { 
    res.status(200).json(
        {
            "books": [
                {
                    "id": 1,
                    "title": "Things fall apart",
                    "pages": 209,
                    "languages": "English"
                },
                {
                    "id": 2,
                    "title": "Fairy tails",
                    "pages": 784,
                    "languages": "Danish"
                },
                {
                    "id": 3,
                    "title": "The book of Job",
                    "pages": 176,
                    "languages": "Hebrew"
                },
                {
                    "id": 4,
                    "title": "Pride and Prejudice",
                    "pages": 443,
                    "languages": "French"
                },
                {
                    "id": 5,
                    "title": "Book 5",
                    "pages": 123,
                    "languages": "English"
                }
            ]
        }
    ); 
} 
