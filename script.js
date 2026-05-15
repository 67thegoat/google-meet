const start = document.getElementById("start");
const localVideo = document.getElementById("localVideo");

start.onclick = async () => {
  const stream = await navigator.mediaDevices.getUserMedia({
    video:true,
    audio:true
  });

  localVideo.srcObject = stream;
};
