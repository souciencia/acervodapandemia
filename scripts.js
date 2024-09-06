
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

/* Animação de número de óbitos no banner inicial */
function deathNumbersRizing() {
  if (window.location.href === "https://acervopandemia-souciencia.unifesp.br/") {
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
        number.innerText = totalDeaths
      } else {
        while (i > dates[stepDate][0]) stepDate++  
        number.innerText = Math.round(i)
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
        case i > 700000 && i:
        if (increment > 1) increment--
        if (t < 800) t++
        break
        default:
        break
      }
      interval = setInterval(updateDeathNumber, t);
    }
    
    interval = setInterval(updateDeathNumber, t);
  }
}

/* === TEST MODAL === */

const myContent = [
  {
    frame: "https://open.spotify.com/embed/episode/6hALqgc5iDjKe3Wj0hDkTj?utm_source=generator",
    text: "Texto test",
  },
  {
    frame: "https://open.spotify.com/embed/episode/1g5gg4l3tdLWlLK7AaaCKj?utm_source=generator",
    text: "some outro texto test",
  }
]

function trapFocus(element, prevFocusableElement = document.activeElement) {
    const focusableEls = Array.from(
      element.querySelectorAll(
        'a[href]:not([disabled]), button:not([disabled])'
      )
    );
    const firstFocusableEl = focusableEls[0];
    const lastFocusableEl = focusableEls[focusableEls.length - 1];
    let currentFocus = null;

    firstFocusableEl.focus();
    currentFocus = firstFocusableEl;

    const handleFocus = e => {
      e.preventDefault();
      // if the focused element "lives" in your modal container then just focus it
      if (focusableEls.includes(e.target)) {
        currentFocus = e.target;
      } else {
        // you're out of the container
        // if previously the focused element was the first element then focus the last 
        // element - means you were using the shift key
        if (currentFocus === firstFocusableEl) {
          lastFocusableEl.focus();
        } else {
          // you previously were focused on the last element so just focus the first one
          firstFocusableEl.focus();
        }
        // update the current focus var
        currentFocus = document.activeElement;
      }
    };

    document.addEventListener("focus", handleFocus, true);

    return {
      onClose: () => {
        document.removeEventListener("focus", handleFocus, true);
        prevFocusableElement.focus();
      }
    };
  };


function toggleModal(e, n) {
  const modal = document.getElementById("mapModalContainer");
  const spotifyEmbedWindow = document.querySelector('iframe[src*="spotify.com/embed"]').contentWindow;
  
  if (n != 99) {
    let frame = document.getElementById('mapIframe')
    let text = document.getElementById('mapFrameText')
    frame.setAttribute('src', myContent[n].frame);
    text.innerHTML = myContent[n].text
  }

  if (modal.style.display === "none") {
    modal.style.display = "block";
    spotifyEmbedWindow.postMessage({command: 'play'}, '*');
    trapped = trapFocus(modal);
  } else {
    modal.style.display = "none";
    spotifyEmbedWindow.postMessage({command: 'pause'}, '*');
    trapped.onClose();
  } 
}



souCienciaPerformWhenDocumentIsLoaded(() => {
  updatePlaceholderFiles();
  updateViewAsLabel();
  deathNumbersRizing();
  trapFocus();
  toggleModal();
  
});


