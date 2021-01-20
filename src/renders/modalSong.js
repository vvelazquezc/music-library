export const songModal = {
    name: 'songModal',
    template: (song) => 
        `
        <div class="modal-item-song">
            <button class="far fa-times-circle button__close">
            </button>
            <div class="modal-song">
                <div class="modal-song-cover">
                    <button value='${song.previewUrl}' id="play" class="fas fa-play"></button>
                </div>
                <div class="modal-song-info">
                    <h3 class="modal-song"${song.trackName}</h3>
                    <span>${song.trackPrice}$</span>
                </div>
                <p class="text modal-artist">${song.artistName}</p>
                <p class="text modal-album">${song.collectionName} <span>${new Date(song.releaseDate)}</span></p>
                <a href="${song.trackViewUrl}" class="modal-link">Link in Itunes</a>
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