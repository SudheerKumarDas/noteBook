import Navbar from "../components/Navbar.jsx"
import RateLimiterUI from "../components/RateLimiterUI.jsx"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import NoteCard from "../components/NoteCard.jsx";
import axiosInstance from "../lib/axios.js";

function Home() {
    const [isRateLimited, setIsRateLimited]= useState(false);
    const [notes,setNotes] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        const fetchedNotes = async()=>{
            try {
                const res = await axiosInstance.get("/notes");
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

        <div className="max-w-7xl mx-auto p-4 mt-6">
            {loading && <div className="text-center text-primary py-10"> loading...</div> }

            {notes.length > 0 && !isRateLimited && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {notes.map((note)=>(
                            <div>
                                <NoteCard key={note._id} note={note}/>
                            </div>
                        )
                    )}
                </div>
            )}
        </div>
    </div>
  )
}

export default Home