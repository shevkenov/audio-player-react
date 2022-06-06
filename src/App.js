import React, { useState, useEffect } from 'react';
import PageTemplate from "./components/PageTemplate";
import TagsTemplate from "./components/TagsTemplate";
import TagItem from "./components/TagItem";
import Search from "./components/Search";
import PlayerTemplate from './components/PlayerTemplate';
import Title from './components/Title';
import Time from './components/Time';
import TitleAndTimeBox from './components/TitleAndTimeBox';
import Progress from './components/Progress';
import ButtonsAndVolumeBox from './components/ButtonsAndVolumeBox';
import ButtonsBox from './components/ButtonsBox';
import Loop from './components/Loop';
import Previous from './components/Previous';
import Play from './components/Play';
import Next from './components/Next';
import Shuffle from './components/Shuffle';
import Volume from './components/Volume';
import PlaylistTemplate from './components/PlaylistTemplate';
import PlaylistItem from './components/PlaylistItem';
import {storage, app} from "./database/firabseConfig";
import { ref, getMetadata, listAll, getDownloadURL } from "firebase/storage"

import loopCurrent from "./icons/loop_current.png";
import previous from "./icons/previous.png";
import play from "./icons/play.png";
import pause from "./icons/pause.png";
import next from "./icons/next.png";
import shuffle from "./icons/shuffle_all.png";
import { async } from '@firebase/util';


function App({tracks}) {
  const [trackList, setTrackList] = useState([]);
  const [trackNo, setTrackNo] = useState(0);
  const [trackTime, setTrackTime] = useState(0);
  const audioRef = ref(storage);

  useEffect(() => {
    const getAllItemsFromStorage = async() => {
      const allItems = await listAll(audioRef);
      allItems.items.forEach(async(item) => {
        const name = await getMetadata(item);
        const url = await getDownloadURL(item);
        const audio = new Audio(url);
        console.log(audio)
        setTrackList(all => [...all, {title: name.name, url, tags: ["rnb"]}])
      })
    }

    getAllItemsFromStorage();

    console.log(trackList)

    //setTrackTime(audio.duration);
    //console.log(audio.duration)
  }, [])
  
  return (
    <PageTemplate>
      <TagsTemplate>
        {
          trackList.length && trackList.map(track => <TagItem onClick={() => {}} status="" key={track.title} tag={track.tags[0]}/>)
        }
      </TagsTemplate>
      <Search onChange={() => {}} placeholder="" value=""/>
      <PlayerTemplate>
        <TitleAndTimeBox>
          <Title title={trackList[0] && trackList[0].title}/>
          <Time time={trackTime}/>
        </TitleAndTimeBox>
      <Progress value="" onChange={() => {}} onMouseUp={() => {}} onTouchEnd={() => {}} />
      <ButtonsAndVolumeBox >
        <ButtonsBox>
          <Loop src={loopCurrent} onClick={() => {}}/>
          <Previous src={previous} onClick={() => {}}/>
          <Play src={play} onClick={() => {}}/>
          <Next src={next} onClick={() => {}}/>
          <Shuffle src={shuffle} onClick={() => {}}/>
        </ButtonsBox>
        <Volume value="" onChange={() => {}}/>
      </ButtonsAndVolumeBox>
      </PlayerTemplate>
      <PlaylistTemplate>
      {
          tracks.map(track => <PlaylistItem data_key="" src="" onClick={() => {}} status="" key={track.title} title={track.title}/>)
        }
      </PlaylistTemplate>
    </PageTemplate>
  );
}

export default App;
