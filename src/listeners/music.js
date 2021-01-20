let actualSongId = null;
let myAudio = null;

function playSongMain(target) {
  if (myAudio != new Audio(target.value)) {
    pauseSongMain();
    myAudio = new Audio(target.value);
    $(myAudio).on("ended", function () {
      changePlayButton(true, target);
    });
  }
  actualSongId = target.id;
  myAudio.play();
}

function pauseSongMain() {
    if (myAudio != null) {
        myAudio.pause();
      }
}

function changePlayButton(isPlaying, target) {
  if (isPlaying) {
    $(target).addClass("fa-play");
    $(target).removeClass("fa-pause");
  } else {
    $(target).removeClass("fa-play");
    $(target).addClass("fa-pause");
    if (actualSongId != null && actualSongId != target.id) {
      $(`#${actualSongId}`).addClass("fa-play");
    }
  }
}

export { playSongMain, pauseSongMain, changePlayButton };
