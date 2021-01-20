import { songModal } from '../renders/modalSong.js'
import { artistModal } from '../renders/modalArtist.js'
import { albumModal } from '../renders/modalAlbum.js'
import { videoModal } from '../renders/modalMVideo.js'

const $container = $('.wrapper-main')

function openSongModal(value, object) {
    const song = object.musicTrack[value]
    console.log(object.musicTrack);
    songModal.render($container, song)
  }
  function openArtistModal(value, object) {
    const artist = object.musicArtist[value]
    artistModal.render($container, artist)
  }
  function openAlbumModal(value, object) {
    const artist = object.album[value]
    albumModal.render($container, artist)
  }
  function openVideoModal(value, object) {
    const musicVideo = object.musicVideo[value]
    videoModal.render($container, musicVideo)
  }

  export { openSongModal, openArtistModal, openAlbumModal, openVideoModal }; 