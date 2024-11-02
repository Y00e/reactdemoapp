import axios from 'axios';
import {useEffect, useState} from "react";

const HelloWorld = () => {

    const [meddelande, setMeddelande] = useState<string>('');

    useEffect(() => {
        axios.get('http://localhost:8080/hello')
        .then(response => {
            setMeddelande(response.data);
        });

    },[]);
    return  (
        <div>
            <p>{meddelande}</p>
        </div>
    );
};

export default HelloWorld;