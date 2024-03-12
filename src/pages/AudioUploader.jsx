import React, { useState, useEffect } from "react";
import ID3Reader from "react-id3-reader";

const MusicMetadataDisplay = ({ musicFile }) => {
    const [metadata, setMetadata] = useState(null);

    useEffect(() => {
        const fetchMetadata = async () => {
            try {
                const response = await fetch(musicFile);
                const arrayBuffer = await response.arrayBuffer();
                const reader = new ID3Reader(arrayBuffer);
                const tags = reader.getAllTags();
                setMetadata(tags);
            } catch (error) {
                console.error("Error fetching or reading metadata:", error);
            }
        };

        fetchMetadata();
    }, [musicFile]);

    return (
        <div>
            {metadata ? (
                <div>
                    <h2>Music Metadata</h2>
                    <ul>
                        <li>
                            <strong>Title:</strong> {metadata.title}
                        </li>
                        <li>
                            <strong>Artist:</strong> {metadata.artist}
                        </li>
                        <li>
                            <strong>Album:</strong> {metadata.album}
                        </li>
                        {/* Add more metadata properties as needed */}
                    </ul>
                </div>
            ) : (
                <p>Loading metadata...</p>
            )}
        </div>
    );
};

export default MusicMetadataDisplay;
