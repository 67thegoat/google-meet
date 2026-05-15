const localVideo = document.getElementById("localVideo");

const cameraBtn = document.getElementById("cameraBtn");
const muteBtn = document.getElementById("muteBtn");
const shareBtn = document.getElementById("shareBtn");

const sendBtn = document.getElementById("sendBtn");
const messageInput = document.getElementById("messageInput");
const messages = document.getElementById("messages");

let localStream;

async function start(){
  localStream = await navigator.mediaDevices.getUserMedia({
    video:true,
    audio:true
  });

  localVideo.srcObject = localStream;
}

start();

cameraBtn.onclick = () => {
  const videoTrack = localStream.getVideoTracks()[0];

  videoTrack.enabled = !videoTrack.enabled;

  cameraBtn.innerText =
    videoTrack.enabled ? "Camera Off" : "Camera On";
};

muteBtn.onclick = () => {
  const audioTrack = localStream.getAudioTracks()[0];

  audioTrack.enabled = !audioTrack.enabled;

  muteBtn.innerText =
    audioTrack.enabled ? "Mute" : "Unmute";
};

shareBtn.onclick = async () => {
  const screenStream =
    await navigator.mediaDevices.getDisplayMedia({
      video:true
    });

  localVideo.srcObject = screenStream;
};

sendBtn.onclick = () => {
  const text = messageInput.value;

  if(text.trim() === "") return;

  const div = document.createElement("div");

  div.className = "message";
  div.innerText = text;

  messages.appendChild(div);

  messageInput.value = "";
};
