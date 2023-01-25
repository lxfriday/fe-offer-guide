import React, { useEffect, useRef } from 'react'
import './App.css'

function log(...args: any[]) {
  console.log(...args)
}

function App() {
  const audioRef = useRef<HTMLMediaElement>(null)
  const src =
    'http://qiniu-test.lxfriday.xyz/audio/Lake%20Arrowhead%20(Radio%20Mix)_1650086029327_413a4898-086b-40e9-8fdf-3410eb05cef9.mp3'
  useEffect(() => {
    const player = audioRef.current as HTMLMediaElement

    player.onloadedmetadata = () => {log('onloadedmetadata')} // 元数据加载完成
    player.onloadeddata = () => {log('onloadeddata')} // 媒体的第一帧加载完成
    player.onseeking = () => {log('onseeking')} // 切换进度开始
    player.ontimeupdate = () => {log('ontimeupdate')} // currentTime 播放进度发生变化时触发，高频调用
    player.onseeked = () => {log('onseeked')} // 切换进度完成
    player.onplay = () => {log('onplay')} // 开始播放
    player.onpause = () => {log('onpause')} // 播放暂停
    player.onended = () => {log('onended')} // 播放结束触发
    player.onratechange = () => {log('onratechange')} // 播放速度发生变化
    player.onvolumechange = () => {log('onvolumechange')} // 音量变化
    player.onwaiting = () => {log('onwaiting')} // 因为暂时性缺少数据，播放暂停

    
  }, [])
  return (
    <audio ref={audioRef} crossOrigin="anonymous" controls src={src}></audio>
  )
}

export default App
