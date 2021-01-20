export const albumModal = {
    name: 'albumModal',
    template: (album) => 
        `
        <div class="modal-item">
            <button class="far fa-times-circle button__close">
            </button>
            <div class="modal-artist">
                <div class="modal-cover" style="background: url('${album.artworkUrl100}') no-repeat; background-size: cover; background-position: center;">
                    <img src="${album.artworkUrl100}" alt="">
                </div>
                <div class="modal-info">
                    <h3 class="modal-album modal-title1">${album.collectionName}</h3><span>${album.collectionPrice}$</span>
                </div>
                <h4 class="modal-artist">${album.artistName}</h4>
                <p class="text modal-text modal-genre">${album.primaryGenreName}</p>
                <p class="text modal-text modal-date">${new Date(album.releaseDate).getFullYear()}</p>
                <p class="modal-link"><a href="${album.artistViewUrl}">Link in Itunes</a></p>
            </div>
        </div>
        <div class="modal-item-background"></div>
    `,
    render: function ($container, album) {
        console.log(album);
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