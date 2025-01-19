document.addEventListener('DOMContentLoaded', () => {
    let currentEpisodeIndex = 0;
    let episodes = [];
    let baseUrl = '';

    const player = new Plyr('#player', {
        controls: [
            'play-large',
            'restart',
            'rewind',
            'play',
            'fast-forward',
            'progress',
            'current-time',
            'duration',
            'mute',
            'volume',
            'settings',
            'fullscreen'
        ],
        settings: ['quality', 'speed'],
        keyboard: { focused: true, global: true },
        tooltips: { controls: true, seek: true },
        speed: { selected: 1, options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2] }
    });

    // Navigation controls
    document.getElementById('prevEpisode')?.addEventListener('click', playPrevious);
    document.getElementById('nextEpisode')?.addEventListener('click', playNext);

    function playPrevious() {
        if (currentEpisodeIndex > 0) {
            currentEpisodeIndex--;
            playEpisode(currentEpisodeIndex);
        }
    }

    function playNext() {
        if (currentEpisodeIndex < episodes.length - 1) {
            currentEpisodeIndex++;
            playEpisode(currentEpisodeIndex);
        }
    }

    // Auto next episode
    player.on('ended', () => {
        if (currentEpisodeIndex < episodes.length - 1) {
            playNext();
        }
    });

    fetch('links.json')
        .then(response => response.json())
        .then(data => {
            baseUrl = data.base_url;
            episodes = data.links;
            renderPlaylist(episodes);
        })
        .catch(error => console.error('Error:', error));

    function renderPlaylist(episodeList) {
        const playlist = document.getElementById('playlist');
        playlist.innerHTML = '';

        episodeList.forEach((episode, index) => {
            const item = document.createElement('div');
            item.classList.add('playlist-item');
            item.innerHTML = `
                <i class="fas fa-play-circle"></i>
                <div class="episode-info">
                    <div>Episode ${getEpisodeNumber(episode.href)}</div>
                    <div class="episode-title">${episode.title}</div>
                </div>
            `;
            
            item.addEventListener('click', () => {
                currentEpisodeIndex = index;
                playEpisode(index);
            });

            playlist.appendChild(item);
        });
    }

    // Move search functionality here
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredEpisodes = episodes.filter(episode => 
            episode.title.toLowerCase().includes(searchTerm) || 
            getEpisodeNumber(episode.href).includes(searchTerm)
        );
        renderPlaylist(filteredEpisodes);
    });

    function playEpisode(index) {
        const episode = episodes[index];
        const originalUrl = `${baseUrl}${episode.href}`;
        const proxyUrl = `/proxy?url=${encodeURIComponent(originalUrl)}`;
    
        document.querySelectorAll('.playlist-item').forEach(item => 
            item.classList.remove('active')
        );
        document.querySelectorAll('.playlist-item')[index].classList.add('active');
    
        const episodeTitle = document.getElementById('currentEpisode');
        if (episodeTitle) {
            episodeTitle.textContent = `Episode ${getEpisodeNumber(episode.href)} - ${episode.title}`;
        }

        player.source = {
            type: 'video',
            sources: [{ src: proxyUrl, type: 'video/mp4' }]
        };
    
        // Optional: Scroll playlist item into view
        document.querySelectorAll('.playlist-item')[index].scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
        });
    }

    function getEpisodeNumber(filename) {
        const match = filename.match(/E(\d+)/);
        return match ? match[1] : 'Unknown';
    }
});