export const artistModal = {
    name: 'artistModal',
    template: (artist) => 
    `
    <div class="modal-item">
        <button class="far fa-times-circle button__close">
        </button>
        <div class="modal-artist">
            <div class="modal-img">
                <img src="https://image.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg" alt="error404">
            </div>
            <div class="modal-info">
                <h3 class="modal-artist">${artist.artistName}</h3>
            </div>
            <p class="text modal-text modal-genre">${artist.primaryGenreName}</p>
            <p class="modal-link"><a href="${artist.artistLinkUrl}" class="modal-link">Link in Itunes</a></p>
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