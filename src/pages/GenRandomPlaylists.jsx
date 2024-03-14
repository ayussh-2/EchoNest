import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

const RandomPlaylistGenerator = ({ numberOfSongs }) => {
    const [playlist, setPlaylist] = useState(null);

    useEffect(() => {
        const generateRandomPlaylist = async () => {
            try {
                const audiosSnapshot = await getDocs(collection(db, "audios"));

                const audioIds = audiosSnapshot.docs.map((doc) => doc.id);

                const shuffledIds = shuffleArray(audioIds);

                const selectedIds = shuffledIds.slice(0, 10);

                const randomPlaylist = {
                    title: "Damn, this is a random playlist!",
                    mood: "Dekho dekho!",
                    songs: selectedIds,
                };

                setPlaylist(randomPlaylist);
                uploadRandomPlaylist(randomPlaylist);
            } catch (error) {
                console.error("Error generating random playlist:", error);
            }
        };

        generateRandomPlaylist();
    }, [numberOfSongs]);

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    async function uploadRandomPlaylist(object) {
        try {
            const docRef = doc(db, "echoNestPlaylists", uuidv4());
            await setDoc(docRef, object);
            console.log("uploaded!");
        } catch (e) {
            console.error("Error uploading random playlist:", e);
        }
    }

    return (
        <div>
            {playlist ? (
                <div>
                    <h2>{playlist.title}</h2>
                    <p>Mood: {playlist.mood}</p>
                    <ul>
                        {playlist.songs.map((songId, index) => (
                            <li key={songId}>
                                {index} - {songId}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default RandomPlaylistGenerator;
