const songModal = {
    name: 'songModal',
    template: (song, artist, album) => `
        <div class="modal-item-song">
            <button class="far fa-times-circle button__close">
            </button>
            <div class="modal-song">
                <div class="modal-song-cover">
                    <button value='${song.previewUrl}' id="play" class="fas fa-play"></button>
                </div>
                <div class="modal-song-info">
                    <h3 class="modal-song">Name of the song</h3>
                    <span>2,99€</span>
                </div>
                <p class="text modal-artist">Name of Artist</p>
                <p class="text modal-album">Name of Album <span>2019</span></p>
                <p modal-link>link in Itunes</p>
            </div>
        </div>
        <div class="modal-item-background"></div>
    `,
    render: function ($container, song) {
        const html = this.template(song, artist)
        const $modal = $(html)

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