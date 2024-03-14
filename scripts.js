
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

souCienciaPerformWhenDocumentIsLoaded(() => {
    updatePlaceholderFiles();
    updateViewAsLabel();
});
