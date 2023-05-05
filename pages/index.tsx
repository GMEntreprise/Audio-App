import { InferGetStaticPropsType } from "next";
import { NextPage } from "next";
import { useState } from "react";
import Song from "../components/Song/Song";
import Audio from "../components/Audio/Audio";
import styles from "../styles/Home.module.css";

const SONGS: Song[] = [
  {
    id: 0,
    title: "After All These Years",
    artist: "BRIAN & JENN JOHNSON",
    file: "songs/For the One -  Brian.mp3",
    image: "/covers/after-these.jpeg",
  },
  {
    id: 1,
    title: "The Undoing",
    artist: "STEFFANY GRETZINGER",
    file: "songs/Out-of-Hiding.mp3",
    image: "/covers/the-undoing.jpeg",
  },
];

export const getStaticProps = async () => {
  const allSongs: Song[] = SONGS;
  return {
    props: {
      songs: allSongs,
    },
    revalidate: 3600,
  };
};

const Home: NextPage<{ songs: Song[] }> = ({ songs }) => {
  const [trackPlaying, setTrackPlaying] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <div className={styles.songPlaying}>
        <Song
          isPlaying={isPlaying}
          trackPlaying={trackPlaying}
          song={songs[trackPlaying]}
        />
      </div>
      <Audio
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        songs={songs}
        trackPlaying={trackPlaying}
        setTrackPlaying={setTrackPlaying}
      />
    </div>
  );
};

export default Home;
