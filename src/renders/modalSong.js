export const songModal = {
    name: 'songModal',
    template: (song) => 
        `
        <div class="modal-item">
            <button class="far fa-times-circle button__close">
            </button>
            <div class="modal-song">
                <div class="modal-cover" style="background: url('${song.artworkUrl100}') no-repeat; background-size: cover; background-position: center;">
                    <button value='${song.previewUrl}' id="play" class="fas fa-play"></button>
                </div>
                <div class="modal-info">
                    <h3 class="modal-song modal-title1">${song.trackName}</h3>
                    <span class="modal-price">${song.trackPrice}$</span>
                </div>
                <h4 class="modal-artist">${song.artistName}</h4>
                <p class="text modal-album modal-text">${song.collectionName} - <span class="modal-date">${new Date(song.releaseDate).getFullYear()}</span></p>
                <p class="modal-link"><a href="${song.trackViewUrl}" class="modal-link">Link in Itunes</a></p>
            </div>
        </div>
        <div class="modal-item-background"></div>
    `,
    render: function ($container, song) {
        const html = this.template(song)
        const $modal = $(html)
        console.log('llego hasta aqui');

        const $closeModal = $modal.find('.button__close')
        const $closeBackground = $modal.find('.modal-item-background')
        const $songModal = $modal.find('.modal-song')
        const $albumModal = $modal.find('.modal-album')
        const $linkModal = $modal.find('.modal-link')

        $closeModal.on('click', () => {
            $modal.remove()
        })
        $closeBackground.on('click', () => {
            $modal.remove()
        })

        $container.append($modal)
    }
}