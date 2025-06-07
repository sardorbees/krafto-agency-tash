import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/video/videos/';

function VideoUpload() {
    const [videos, setVideos] = useState([]);
    const [title, setTitle] = useState('');
    const [file, setFile] = useState(null);

    useEffect(() => {
        fetchVideos();
    }, []);

    const fetchVideos = async () => {
        const res = await axios.get(API_URL);
        setVideos(res.data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('video_file', file);

        try {
            await axios.post(API_URL, formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            setTitle('');
            setFile(null);
            fetchVideos();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <div className="oigjig">
                {videos.map((video) => (
                    <div key={video.id} className="box-video">
                        <video width="400" controls>
                            <source src={video.video_file} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default VideoUpload;