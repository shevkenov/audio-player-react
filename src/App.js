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


function App({tracks}) {
  const [trackNo, setTrackNo] = useState(0);
  const [trackTime, setTrackTime] = useState(0);
  const audioRef = ref(storage);

  useEffect(() => {
    const audio = new Audio(tracks[trackNo].url)
    // fetch('https://console.firebase.google.com/project/audio-palyer/storage/audio-palyer.appspot.com/files').then(data => {
    //   console.log(data)
    // }).catch(err => console.log(err))
    listAll(audioRef).then(res => res.items.forEach(itemRef => 
      getDownloadURL(itemRef).then(metadata => console.log(metadata))
      )
    )
    //setTrackTime(audio.duration);
    //console.log(audio.duration)
  }, [trackNo, tracks])

  return (
    <PageTemplate>
      <TagsTemplate>
        {
          tracks.map(track => <TagItem onClick={() => {}} status="" key={track.title} tag={track.tags[0]}/>)
        }
      </TagsTemplate>
      <Search onChange={() => {}} placeholder="" value=""/>
      <PlayerTemplate>
        <TitleAndTimeBox>
          <Title title={tracks[0].title}/>
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
