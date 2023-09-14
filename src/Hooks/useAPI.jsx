import {useState , useEffect} from 'react';
import axios from 'axios'

const useAPI = (url) => {
    const [response, setResponse] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchUsers= async()=>{
        try {
            const res = await axios.get(url);
            return setResponse(res.data)
        } catch (error) {
            console.error(error); 
            setError(error)

        }finally{
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchUsers();
    }, [url]);

    return {response , isLoading , error};
}

export default useAPI;