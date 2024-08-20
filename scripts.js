
// Checks if document is loaded
const souCienciaPerformWhenDocumentIsLoaded = callback => {
  if (/comp|inter|loaded/.test(document.readyState))
    cb();
  else
  document.addEventListener('DOMContentLoaded', callback, false);
}

function updatePlaceholderFiles() {
  
  wp.hooks.addFilter('tainacan_get_the_mime_type_icon', 'souciencia' , (imageSrc, documentType, size) => {
    console.log('imageSrc', imageSrc);
    switch(documentType) {
      case 'image/png':
      case 'image/jpeg':
      case 'image/gif':
      case 'image/bmp':
      case 'image/webp':
      case 'image/svg+xml':
      imageSrc = 'icon_image.svg';
      break;
      case 'audio/midi':
      case 'audio/mpeg':
      case 'audio/mp3':
      case 'audio/webm':
      case 'audio/ogg':
      case 'audio/wav':
      imageSrc = 'icon_audio.svg';
      break;
      case 'text':
      case 'text/plain':
      case 'text/html':
      case 'text/css':
      case 'text/javascript':
      case 'text/csv':
      imageSrc = 'icon_text.svg';
      break;
      case 'video/webm':
      case 'video/ogg':
      case 'video/mpeg':
      case 'video/mp4':
      imageSrc = 'icon_video.svg';
      break;
      case 'url':
      imageSrc = 'icon_link.svg'; // ??
      break;
      case 'application/pdf':
      imageSrc = 'icon_text.svg'; // ??
      break;
      case 'empty':
      default:
      imageSrc = 'icon_text.svg'; // ??
    }
    return souciencia.assets_directory + '/images/' + imageSrc;
    
  });
};

function updateViewAsLabel() {
  document.addEventListener('tainacan-items-list-is-loading-items', function(event) {
    const viewAsLabel = document.querySelector('#tainacanExposersButton .is-hidden-desktop-only');
    if (viewAsLabel && viewAsLabel.innerHTML !== 'Download')
      viewAsLabel.innerHTML = 'Download';
    
    const viewAsIcon = document.querySelector('#tainacanExposersButton .tainacan-icon-viewas');
    if (viewAsIcon) {
      viewAsIcon.classList.remove('tainacan-icon-viewas');
      viewAsIcon.classList.add('tainacan-icon-download');
    }
  });
}

function deathNumbersRizing() {
  const number = document.getElementById('death-numbers');
  const date = document.getElementById('death-date');
  const totalDeaths = 712781;
  let interval;
  let t = 800;
  let i = 0;
  let increment = 1;
  let stepDate = 0
  const dates = [
    [0, "dezembro de 2019"],
    [1, "março de 2020"],
    [54, "abril de 2020"],
    [200, "maio de 2020"],
    [570, "junho de 2020"],
    [1500, "julho de 2020"],
    [3000, "agosto de 2020"],
    [4900, "setembro de 2020"],
    [5900, "outubro de 2020"],
    [6800, "novembro de 2020"],
    [7000, "dezembro de 2020"],
    [7800, "janeiro de 2021"],
    [12000, "fevereiro de 2021"],
    [33000, "março de 2021"],
    [57000, "abril de 2021"],
    [65000, "maio de 2021"],
    [71000, "junho de 2021"],
    [85000, "julho de 2021"],
    [98000, "agosto de 2021"],
    [100000, "setembro de 2021"],
    [210000, "outubro de 2021"],
    [320000, "novembro de 2021"],
    [430000, "dezembro de 2021"],
    [540000, "janeiro de 2022"],
    [650000, "fevereiro de 2022"],
    [660000, "março de 2022"],
    [670000, "abril de 2022"],
    [680000, "maio de 2022"],
    [690000, "junho de 2022"],
    [700000, "julho de 2022"],
    [710000, "agosto de 2022"],
    [705000, "setembro de 2022"],
    [707000, "outubro de 2022"],
    [710000, "novembro de 2022"],
    [711000, "dezembro de 2022"],
    [712000, "janeiro de 2023"],
  ]
  
  function updateDeathNumber() {
    i+= increment;
    if (i >= totalDeaths) {
      clearInterval(interval);
      number.innerText = totalDeaths.toLocaleString('en-US');
    } else {
      while (i > dates[stepDate][0]) stepDate++  
      number.innerText = Math.round(i).toLocaleString('en-US');
      date.innerText = dates[stepDate][1]
      adjustSpeed();
    }
  }
  
  function adjustSpeed() {
    clearInterval(interval);
    switch (true) {
      case i <= 5 && i < 1000:
      t -= 100
      break
      case i > 5 && i < 1000 && t > 1: 
      t -= 5
      break
      case i > 1000 && i < 100000:
      if (increment < 81 ) increment++
      break
      case i > 650000 && i < totalDeaths - 1200:
      if (increment > 11 ) increment--
      break
      case i >= totalDeaths - 1200:
      if (increment > 1) increment--
      break
      case i > totalDeaths - 800:
      t++
      break
      default:
      break
    }
    interval = setInterval(updateDeathNumber, t);
  }
  
  interval = setInterval(updateDeathNumber, t);
}

souCienciaPerformWhenDocumentIsLoaded(() => {
  updatePlaceholderFiles();
  updateViewAsLabel();
  deathNumbersRizing();
});
