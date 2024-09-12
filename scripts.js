
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
    dates = [
      ['2020-02-23', 0],
      ['2020-03-01', 0],
      ['2020-03-08', 0],
      ['2020-03-15', 18],
      ['2020-03-22', 114],
      ['2020-03-29', 432],
      ['2020-04-05', 1124],
      ['2020-04-12', 2347],
      ['2020-04-19', 4016],
      ['2020-04-26', 6724],
      ['2020-05-03', 10627],
      ['2020-05-10', 15633],
      ['2020-05-17', 22013],
      ['2020-05-24', 28834],
      ['2020-05-31', 35930],
      ['2020-06-07', 42720],
      ['2020-06-14', 49976],
      ['2020-06-21', 57070],
      ['2020-06-28', 64265],
      ['2020-07-05', 71469],
      ['2020-07-12', 78735],
      ['2020-07-19', 86449],
      ['2020-07-26', 93563],
      ['2020-08-02', 100477],
      ['2020-08-09', 107232],
      ['2020-08-16', 114250],
      ['2020-08-23', 120452],
      ['2020-08-30', 126069],
      ['2020-09-06', 131210],
      ['2020-09-13', 136240],
      ['2020-09-20', 141406],
      ['2020-09-27', 145985],
      ['2020-10-04', 150198],
      ['2020-10-11', 153675],
      ['2020-10-18', 156903],
      ['2020-10-25', 159883],
      ['2020-11-01', 162269],
      ['2020-11-08', 165658],
      ['2020-11-15', 168989],
      ['2020-11-22', 172561],
      ['2020-11-29', 176628],
      ['2020-12-06', 181123],
      ['2020-12-13', 186205],
      ['2020-12-20', 190795],
      ['2020-12-27', 195725],
      ['2021-01-03', 202631],
      ['2021-01-10', 209296],
      ['2021-01-17', 216445],
      ['2021-01-24', 223945],
      ['2021-01-31', 231012],
      ['2021-02-07', 238532],
      ['2021-02-14', 245977],
      ['2021-02-21', 254221],
      ['2021-02-28', 264325],
      ['2021-03-07', 277091],
      ['2021-03-14', 292752],
      ['2021-03-21', 310550],
      ['2021-03-28', 330193],
      ['2021-04-04', 351334],
      ['2021-04-11', 371678],
      ['2021-04-18', 389492],
      ['2021-04-25', 406437],
      ['2021-05-02', 421316],
      ['2021-05-09', 434715],
      ['2021-05-16', 448208],
      ['2021-05-23', 461057],
      ['2021-05-30', 472531],
      ['2021-06-06', 486272],
      ['2021-06-13', 500800],
      ['2021-06-20', 512735],
      ['2021-06-27', 523587],
      ['2021-07-04', 532893],
      ['2021-07-11', 541266],
      ['2021-07-18', 549448],
      ['2021-07-25', 556370],
      ['2021-08-01', 562752],
      ['2021-08-08', 568788],
      ['2021-08-15', 574209],
      ['2021-08-22', 579010],
      ['2021-08-29', 583362],
      ['2021-09-05', 586558],
      ['2021-09-12', 590508],
      ['2021-09-19', 590955],
      ['2021-09-26', 597723],
      ['2021-10-03', 600829],
      ['2021-10-10', 603152],
      ['2021-10-17', 605457],
      ['2021-10-24', 607694],
      ['2021-10-31', 609388],
      ['2021-11-07', 611222],
      ['2021-11-14', 612587],
      ['2021-11-21', 614186],
      ['2021-11-28', 615570],
      ['2021-12-05', 616457],
      ['2021-12-12', 616457],
      ['2021-12-19', 616733],
      ['2021-12-26', 619105],
      ['2022-01-02', 619937],
      ['2022-01-09', 620971],
      ['2022-01-16', 622801],
      ['2022-01-23', 626524],
      ['2022-01-30', 631802],
      ['2022-02-06', 638048],
      ['2022-02-13', 643880],
      ['2022-02-20', 648913],
      ['2022-02-27', 651927],
      ['2022-03-06', 654945],
      ['2022-03-13', 657102],
      ['2022-03-20', 658762],
      ['2022-03-27', 660108],
      ['2022-04-03', 661220],
      ['2022-04-10', 661938],
      ['2022-04-17', 662610],
      ['2022-04-24', 663497],
      ['2022-05-01', 664126],
      ['2022-05-08', 664872],
      ['2022-05-15', 665528],
      ['2022-05-22', 666391],
      ['2022-05-29', 666997],
      ['2022-06-05', 668074],
      ['2022-06-12', 669010],
      ['2022-06-19', 670369],
      ['2022-06-26', 671858],
      ['2022-07-03', 673554],
      ['2022-07-10', 675295],
      ['2022-07-17', 676927],
      ['2022-07-24', 678486],
      ['2022-07-31', 679939],
      ['2022-08-07', 681397],
      ['2022-08-14', 682502],
      ['2022-08-21', 683472],
      ['2022-08-28', 684354],
      ['2022-09-04', 684817],
      ['2022-09-11', 685334],
      ['2022-09-18', 685782],
      ['2022-09-25', 686254],
      ['2022-10-02', 686842],
      ['2022-10-09', 687153],
      ['2022-10-16', 687566],
      ['2022-10-23', 688091],
      ['2022-10-30', 688342],
      ['2022-11-06', 688654],
      ['2022-11-13', 688917],
      ['2022-11-20', 689468],
      ['2022-11-27', 690109],
      ['2022-12-04', 690747],
      ['2022-12-11', 691863],
      ['2022-12-18', 692743],
      ['2022-12-25', 693853],
      ['2023-01-01', 694806],
      ['2023-01-08', 695338],
      ['2023-01-15', 696254],
      ['2023-01-22', 696757],
      ['2023-01-29', 697360],
      ['2023-02-05', 697674],
      ['2023-02-12', 698047],
      ['2023-02-19', 698933],
      ['2023-02-26', 699310],
      ['2023-03-05', 699310],
      ['2023-03-12', 699634],
      ['2023-03-19', 699917],
      ['2023-03-26', 700239],
      ['2023-04-02', 700556],
      ['2023-04-09', 700811],
      ['2023-04-16', 701215],
      ['2023-04-23', 701494],
      ['2023-04-30', 701833],
      ['2023-05-07', 701833],
      ['2023-05-14', 702421],
      ['2023-05-21', 702664],
      ['2023-05-28', 702907],
      ['2023-06-04', 703291],
      ['2023-06-11', 703399],
      ['2023-06-18', 703719],
      ['2023-06-25', 703964],
      ['2023-07-02', 704159],
      ['2023-07-09', 704320],
      ['2023-07-16', 704488],
      ['2023-07-23', 704659],
      ['2023-07-30', 704794],
      ['2023-08-06', 704897],
      ['2023-08-13', 705054],
      ['2023-08-20', 705170],
      ['2023-08-27', 705289],
      ['2023-09-03', 705289],
      ['2023-09-10', 705313],
      ['2023-09-17', 705313],
      ['2023-09-24', 705775],
      ['2023-10-01', 705962],
      ['2023-10-08', 706142],
      ['2023-10-15', 706142],
      ['2023-10-22', 706276],
      ['2023-10-29', 706808],
      ['2023-11-05', 706986],
      ['2023-11-12', 707286],
      ['2023-11-19', 707286],
      ['2023-11-26', 707470],
      ['2023-12-03', 707789],
      ['2023-12-10', 708021],
      ['2023-12-17', 708237],
      ['2023-12-24', 708373],
      ['2023-12-31', 708491],
      ['2024-01-07', 708638],
      ['2024-01-14', 708739],
      ['2024-01-21', 708999],
      ['2024-01-28', 709198],
      ['2024-02-04', 709407],
      ['2024-02-11', 709601],
      ['2024-02-18', 709765],
      ['2024-02-25', 709963],
      ['2024-03-03', 710174],
      ['2024-03-10', 710427],
      ['2024-03-17', 710704],
      ['2024-03-24', 710966],
      ['2024-03-31', 711249],
      ['2024-04-07', 711380],
      ['2024-04-14', 711502],
      ['2024-04-21', 711650],
      ['2024-04-28', 711792],
      ['2024-05-05', 711964],
      ['2024-05-12', 712038],
      ['2024-05-19', 712090],
      ['2024-05-26', 712205],
      ['2024-06-02', 712258],
      ['2024-06-09', 712314],
      ['2024-06-16', 712349],
      ['2024-06-23', 712380],
      ['2024-06-30', 712502],
      ['2024-07-07', 712537],
      ['2024-07-14', 712552],
      ['2024-07-21', 712571],
      ['2024-07-28', 712720],
      ['2024-08-04', 712769],
      ['2024-08-11', 712781],
      ['2024-08-18', 712889],
      ['2024-08-25', 712957]
    ]
    
    function updateDeathNumber() {
      i+= increment;
      if (i >= totalDeaths) {
        clearInterval(interval);
        number.innerText = totalDeaths
      } else {
        while (i > dates[stepDate][1]) stepDate++  
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
    frame: "6hALqgc5iDjKe3Wj0hDkTj",
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


