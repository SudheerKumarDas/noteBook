import axios from "axios";
import Navbar from "../components/Navbar.jsx"
import RateLimiterUI from "../components/RateLimiterUI.jsx"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"

function Home() {
    const [isRateLimited, setIsRateLimited]= useState(false);
    const [notes,setNotes] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        const fetchedNotes = async()=>{
            try {
                const res = await axios.get("http://localhost:3000/api/notes");
                console.log(res.data);
                setNotes(res.data);
                setIsRateLimited(false);
            } catch (error) {
                console.log("Error fetching notes",error);
                if(error.response?.status===429){
                    setIsRateLimited(true);
                }else{
                    toast.error("failed to load notes");
                }
            } finally{
                setLoading(false);
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