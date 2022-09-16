window.onload = async () => {
  const video = document.querySelector(".video");
  const con = document.querySelector(".con");
  setTimeout(() => {}, 2000);
  await video.play();
  video.onended = () => {
    video.style.height = "50vh";
  };
};
