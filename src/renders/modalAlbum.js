export const albumModal = {
    name: 'albumModal',
    template: (album) => 
        `
        <div class="modal-item-song">
            <button class="far fa-times-circle button__close">
            </button>
            <div class="modal-artist">
                <div class="modal-artist-cover">
                    <img src="${album.artworkUrl100}" alt="">
                </div>
                <div class="modal-artist-info">
                    <h3 class="modal-album">${album.collectionName}</h3><span>${album.collectionPrice}$</span>
                </div>
                <p class="text modal-artist">${album.artistName}</p>
                <p class="text modal-artist">${album.primaryGenreName}</p>
                <p class="text modal-date">${new Date(album.artistName).getFullYear()}</p>
                <a href="${album.artistViewUrl}" class="modal-link">Link in Itunes</a>
            </div>
        </div>
    `,
    render: function ($container, album) {
        console.log('llego hasta aqui');
        const html = this.template(album)
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