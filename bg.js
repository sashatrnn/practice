const images = [
    'url("https://picsum.photos/id/1015/1920/1080")',
    'url("https://picsum.photos/id/1018/1920/1080")',
    'url("https://picsum.photos/id/1025/1920/1080")'
  ];
  const body = document.body;
  setInterval(changeBackground,5000);
  let imageNum = 0;

  function changeBackground(){
    body.style.backgroundImage = images[imageNum];
    imageNum += 1;
    if(images.length === imageNum){
        imageNum = 0;
    }
  };