
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
      [0, 'fevereiro de 2020'],
      [18, 'março de 2020'],
      [1124, 'abril de 2020'],
      [10627, 'maio de 2020'],
      [42720, 'junho de 2020'],
      [71469, 'julho de 2020'],
      [100477, 'agosto de 2020'],
      [131210, 'setembro de 2020'],
      [150198, 'outubro de 2020'],
      [162269, 'novembro de 2020'],
      [181123, 'dezembro de 2020'],
      [202631, 'janeiro de 2021'],
      [238532, 'fevereiro de 2021'],
      [277091, 'março de 2021'],
      [351334, 'abril de 2021'],
      [421316, 'maio de 2021'],
      [486272, 'junho de 2021'],
      [532893, 'julho de 2021'],
      [562752, 'agosto de 2021'],
      [586558, 'setembro de 2021'],
      [600829, 'outubro de 2021'],
      [611222, 'novembro de 2021'],
      [616457, 'dezembro de 2021'],
      [619937, 'janeiro de 2022'],
      [638048, 'fevereiro de 2022'],
      [654945, 'março de 2022'],
      [661220, 'abril de 2022'],
      [664126, 'maio de 2022'],
      [668074, 'junho de 2022'],
      [673554, 'julho de 2022'],
      [681397, 'agosto de 2022'],
      [684817, 'setembro de 2022'],
      [686842, 'outubro de 2022'],
      [688654, 'novembro de 2022'],
      [690747, 'dezembro de 2022'],
      [694806, 'janeiro de 2023'],
      [697674, 'fevereiro de 2023'],
      [700556, 'março de 2023'],
      [701833, 'abril de 2023'],
      [702907, 'maio de 2023'],
      [703719, 'junho de 2023'],
      [704794, 'julho de 2023'],
      [705289, 'agosto de 2023'],
      [705775, 'setembro de 2023'],
      [706142, 'outubro de 2023'],
      [707286, 'novembro de 2023'],
      [708491, 'dezembro de 2023'],
      [708638, 'janeiro de 2024'],
      [709407, 'fevereiro de 2024'],
      [710174, 'março de 2024'],
      [711380, 'abril de 2024'],
      [712205, 'maio de 2024'],
      [712502, 'junho de 2024'],
      [712720, 'julho de 2024'],
      [712889, 'agosto de 2024'],
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
    frame: "6LtheFKOrXPgbqnNhveLNl",
    text: '"Eu não tomei a vacina! Quem quiser seguir meu exemplo que siga...". Coletânea de falas em que Jair Bolsonaro induz a hesitação vacinal, disseminando desinformação acerca das vacinas contra a covid-19.',
  },
  {
    frame: "1g5gg4l3tdLWlLK7AaaCKj",
    text: '"Não tem comprovação científica? Sim, sempre disse que não tinha." Falas de Bolsonaro defendendo a hidroxicloroquina, apesar da falta de evidências científicas que comprovem sua eficácia.',
  },
  {
    frame: "",
    text: '"Em Manaus estava um caos! Não faziam tratamento precoce!". Compilado de falas revelando a resistência ao lockdown em Manaus, incentivada por Bolsonaro, e a propagação de tratamentos sem eficácia comprovada.',
  },
  {
    frame: "",
    text: '"Eu tomei quando passei mal. No dia seguinte estava bom. Coincidência ou não…". Falas de Jair Bolsonaro se contrapõem às falas de especialistas sobre a hidroxicloroquina.',
  },
  {
    frame: "",
    text: '"Chega de frescura, de mimimi... Vão ficar chorando até quando?". Compilado de falas que evidenciam a minimização da gravidade da pandemia de covid-19 por membros do governo federal.',
  },
  {
    frame: "",
    text: '"O efeito colateral do lockdown está sendo mais danoso que o próprio vírus." Compilado de falas do ex-presidente Bolsonaro se posicionando contra o isolamento social.',
  },
  {
    frame: "",
    text: '"Eu achava que a gente ia partir para a autonomia médica, deixar à vontade os médicos." Conjunto de falas que evidenciam embates entre o ex-presidente Jair Bolsonaro e seus ex-ministros da saúde.',
  },
  {
    frame: "",
    text: '"Provavelmente não vai morrer tanta gente de coronavírus." Compilado de falas de pessoas influentes defendendo a imunidade de rebanho por contágio e o tratamento precoce.',
  },
  {
    frame: "",
    text: '"A nossa linda e velha hidroxicloroquina... ela sim consegue reduzir danos da covid-19…". Falas de médicos e aliados de Bolsonaro influenciaram a adoção do tratamento precoce e da imunidade de rebanho por contágio como políticas de saúde.',
  },
  {
    frame: "",
    text: '"Segundo a PGR, os fatos narrados não configuram crimes...". Trechos mostrando que a PGR recomendou arquivamento de denúncia contra Bolsonaro, apesar das evidências de crimes praticados por ele.',
  },
  {
    frame: "",
    text: '"Pandemia fictícia!"... "Não precisamos de vacina pra isso!". Mídia negacionista propaga desinformação, questionando a eficácia da vacina e a realidade da pandemia de covid-19.',
  },
  {
    frame: "",
    text: '"Eu tenho que estar no meio do povo sem máscara, a vida é minha!". Bolsonaro propaga desinformação ao minimizar a pandemia, questionar medidas de prevenção e desencorajar a vacinação.',
  },
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


async function toggleModal(e, n) {
  const modal = document.getElementById("mapModalContainer");
  let frame = document.getElementById('mapIframe')
  let text = document.getElementById('mapFrameText')
  const spotifyEmbedWindow = document.querySelector('iframe[src*="spotify.com/embed"]').contentWindow;
  
  if (n != 99) {
    frame.setAttribute('src', `https://open.spotify.com/embed/episode/${myContent[n].frame}?utm_source=generator`);
    text.innerHTML = myContent[n].text
    await new Promise((resolve) => setTimeout(resolve, 400))
  }

  if (modal.style.display === "none") {
    modal.style.display = "block";
    spotifyEmbedWindow.postMessage({command: 'play'}, '*');
    trapped = trapFocus(modal);
    frame.style.opacity = 1;
    await new Promise((resolve) => setTimeout(resolve, 300))

  } else {
    modal.style.display = "none";
    frame.style.opacity = 0;
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


