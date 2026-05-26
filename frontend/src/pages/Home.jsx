import axios from "axios";
import Navbar from "../components/Navbar.jsx"
import RateLimiterUI from "../components/RateLimiterUI.jsx"
import { useEffect, useState } from "react"

function Home() {
    const [isRateLimited, setIsRateLimited]= useState(true);
    const [notes,setNotes] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        const fetchedNotes = async()=>{
            try {
                const res = await axios.get("http://localhost:3000/api/notes");
                console.log(res.data);
            } catch (error) {
                console.log("Error fetching notes",error);
            }
        }
        fetchedNotes();
    },[]);

  return (
    <div className="min-h-screen">
        <Navbar/>
        {isRateLimited && <RateLimiterUI/>}
    </div>
  )
}

export default Home