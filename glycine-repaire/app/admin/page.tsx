"use client";
import "./.admin.css";
import {useState, useEffect} from "react";
export default function adminPage() {
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent ] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch("/api/posts")
        .then((res) => res.json())
        .then((setPosts));
    }, []);
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await fetch("/api/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({title, content}),
        });
        const data = await res.json();
        setMessage(data.message);
        setTitle("");
        setContent("");
        setPosts((prev) => [...prev, { title, content}]);

    };
    return (
        
    <div className= "admin-container">
        <h1 className="admin-title">Administration des posts</h1>
        <form className= "admin-form" onSubmit= {handleSubmit}>
            <input 
            className="admin-input"
            type="text"
            placeholder="Titre"
            value={title}
            onChange={(e) => setTitle (e.target.value)}
            />
            <textarea
            className="admin-textarea"
            placeholder="Contenu"
            value={content}
            onChange={(e) => setContent (e.target.value)}
            />
            <button className= "admin-button" type= "submit">
                Enregistrer l'article
            </button>
            </form>
            {message && <p className= "admin-message">{message}</p>}

            <div className= "admin-list">
                <h2 className= "admin-list-title"> liste des articles</h2>
                <ul>
                    {posts.map((p: any) => (
                        <li key={p.id} className="admin-list-item">
                         <strong>{p.title}</strong> - {p.content}
                        </li>
                    ))}
                </ul>
            </div>
            </div>
    );
}
