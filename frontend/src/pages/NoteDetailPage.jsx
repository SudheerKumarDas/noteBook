import { useEffect, useState } from "react"
import { LoaderIcon, ArrowLeft, Trash2Icon } from "lucide-react"
import { Link } from "react-router";
import { useNavigate, useParams } from "react-router"
import axiosInstance from "../lib/axios.js";
import toast from "react-hot-toast"

function NoteDetailPage() {
  const [note,setNote]=useState(null);
  const [loading,setLoading]=useState(true);
  const [saving,setSaving]=useState(false);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(()=>{
    const fetchedNote = async () =>{
      try {
        const res = await axiosInstance(`/notes/${id}`);
        setNote(res.data);
      } catch (error) {
        console.error("Error in fetchedNote",error);
        toast.error("Failed to Fetch the Note");
      }finally{
        setLoading(false);
      }
    }
    fetchedNote();
  },[id])

  const handleDelete = async () => {
      if(!window.confirm("Are you sure want to delete the note?")) return;
      try {
        await axiosInstance.delete(`/notes/${id}`)
        toast.success("Note deleted successfully");
        navigate("/")
      } catch (error) {
        console.log("Error deleting the note",error);
        toast.error("Failed to delete the Note");
      }
  }
  const handleSave = async () => {
    if(!note.title.trim() || !note.content.trim()) {
      toast.error("Enter title or content");
      return;
    }
    setSaving(true);
    try {
          await axiosInstance.put(`/notes/${id}`,note);
          toast.success("Note updated successfully")
          navigate("/");
    } catch (error) {
          console.log("Error saving the note",error)
          toast.error("Failed to update the Note");
    }finally{
      setSaving(false);
    }

  }

  if(loading){
    return (
      <div className="min-h-screen bg-base-100 flex items-center justify-center">
          <LoaderIcon className="animate-spin size-10"/>
      </div>
    )
  }
  return (
    <div className="min-h-screen bg-base-200">
        <div className="container mx-auto px-4 py-8"> 
            <div className="max-w-2xl mx-auto">
               <div className="flex items-center justify-between mb-6">
                  <Link to="/" className="btn btn-primary">
                      <ArrowLeft className="h-5 w-5"/>
                         Back to Notes 
                  </Link>
                  <button onClick={handleDelete} className="btn btn-error btn-outline">
                    <Trash2Icon className="h-5 w-5" />
                    Delete Note
                  </button>
               </div>
               <div className="card bg-base-100">
                <div className="card-body">
                  <div className="form-control mb-4 flex flex-col gap-3">
                           <label className="label">
                            <span className="label-text">Title</span>
                           </label>
                           <input type="text"
                              placeholder="Note Title"
                              className="input input-bordered p-4"
                              value={note.title}
                              onChange={(e)=>setNote({...note,title : e.target.value})}
                           />
                        </div>

                        <div className="form-control mb-4 flex flex-col gap-3">
                          <label className="label">
                            <span className="label-text">Content</span>
                          </label>
                          <textarea
                            placeholder="Write your note here..."
                            className="textarea textarea-bordered h-32 p-4"
                            value={note.content}
                            onChange={(e) => setNote({...note,content:e.target.value})}
                          />
                        </div>

                        <div className="card-actions justify-end">
                          <button className="btn btn-primary" disabled={saving} onClick={handleSave}>
                            {saving?"saving...":"save changes"}
                          </button>
                        </div>
                </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default NoteDetailPage