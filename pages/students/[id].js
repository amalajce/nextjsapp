import React from "react";
import { useRouter } from 'next/router';
const App = () => {
    const router = useRouter();
    return (
        <div>
            <h1>Student Dynamic - {router.query.id}!</h1>
        </div>
    );
};
export default App;
