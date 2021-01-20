export const videoModal = {
    name: 'videoModal',
    template: (video) => 
        `
        <div class="modal-item-song">
            <button class="far fa-times-circle button__close">
            </button>
            <div class="modal-artist">
                <div class="modal-artist-cover">
                    <img src="${video.artworkUrl100}" alt="">
                </div>
                <div class="modal-artist-info">
                    <h3 class="modal-name">${video.trackName}</h3><span>${video.collectionPrice}$</span>
                </div>
                <p class="text modal-artist">${video.artistName}</p>
                <p class="text modal-artist">${video.primaryGenreName}</p>
                <p class="text modal-date">${new Date(video.releaseDate).getFullYear()}</p>
                <a href="${video.trackViewUrl}" class="modal-link">Link in Itunes</a>
            </div>
        </div>
    `,
    render: function ($container, video) {
        console.log('llego hasta aqui');

        console.log(video);
        const html = this.template(video)
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