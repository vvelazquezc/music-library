export const artistModal = {
    name: 'artistModal',
    template: (artist) => 
    `
        <div class="modal-item-song">
            <button class="far fa-times-circle button__close">
            </button>
            <div class="modal-artist">
                <div class="modal-artist-cover">
                <img src="" alt="">
                </div>
                <div class="modal-artist-info">
                    <h3 class="modal-artist">${artist.artistName}</h3>
                </div>
                <p class="text modal-genre">${artist.artistType}</p>
                <a href="${artist.artistLinkUrl}" class="modal-link">Link in Itunes</a>
            </div>
        </div>
        <div class="modal-item-background"></div>
    `,
    render: function ($container, artist) {
        const html = this.template(artist)
        const $modal = $(html)

        const $closeModal = $modal.find('.button__close')
        const $closeBackground = $modal.find('.modal-item-background')

        $closeModal.on('click', () => {
            $modal.remove()
        })
        $closeBackground.on('click', () => {
            $modal.remove()
        })

        $container.append($modal)
    }
}