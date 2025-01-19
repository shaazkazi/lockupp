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

    const videoData = {
        "base_url": "https://43.251.84.25:8080/TV%20SHOWS/Hindi/Lock%20Upp/Season%201/",
        "links": [
            {
                "href": "Lock%20Upp%202022%20Hind%20Bad%20Ass%20Finale%201080P%20MX%20WEB-DL%20H264%20AAC%202.0%20%20-%20LatestHDmovies.mp4",
                "title": "Lock Upp 2022 Hind Bad Ass Finale 1080P MX WEB-"
            },
            {
                "href": "Lock%20Upp%202022%20Hindi%20S01E01%201080p%20WEB-DL%20H264%20AAC2.0-%5BHasan%5D.mp4",
                "title": "Lock Upp 2022 Hindi S01E01 1080p WEB-DL H264 AA"
            },
            {
                "href": "Lock%20Upp%202022%20Hindi%20S01E03%201080P%20MX%20WEB-DL%20H264%20AAC2.0-%5BHasan%5D.mp4",
                "title": "Lock Upp 2022 Hindi S01E03 1080P MX WEB-DL H264"
            },
            {
                "href": "Lock%20Upp%202022%20Hindi%20S01E04%201080P%20MX%20WEB-DL%20H264%20AAC2.0-%5BHasan%5D.mp4",
                "title": "Lock Upp 2022 Hindi S01E04 1080P MX WEB-DL H264"
            },
            {
                "href": "Lock%20Upp%202022%20Hindi%20S01E07%201080P%20MX%20WEB-DL%20H264%20AAC2.0-%5BHasan%5D.mp4",
                "title": "Lock Upp 2022 Hindi S01E07 1080P MX WEB-DL H264"
            },
            {
                "href": "Lock%20Upp%202022%20Hindi%20S01E08%201080P%20MX%20WEB-DL%20H264%20AAC2.0-%5BHasan%5D.mp4",
                "title": "Lock Upp 2022 Hindi S01E08 1080P MX WEB-DL H264"
            },
            {
                "href": "Lock%20Upp%202022%20Hindi%20S01E09%201080P%20MX%20WEB-DL%20H264%20AAC2.0-%5BHasan%5D.mp4",
                "title": "Lock Upp 2022 Hindi S01E09 1080P MX WEB-DL H264"
            },
            {
                "href": "Lock%20Upp%202022%20Hindi%20S01E10%201080P%20MX%20WEB-DL%20H264%20AAC2.0-%5BHasan%5D.mp4",
                "title": "Lock Upp 2022 Hindi S01E10 1080P MX WEB-DL H264"
            },
            {
                "href": "Lock%20Upp%202022%20Hindi%20S01E11%201080P%20MX%20WEB-DL%20H264%20AAC2.0-%5BHasan%5D.mp4",
                "title": "Lock Upp 2022 Hindi S01E11 1080P MX WEB-DL H264"
            },
            {
                "href": "Lock%20Upp%202022%20Hindi%20S01E13%201080P%20MX%20WEB-DL%20H264%20AAC%202.0-%5BHasan%5D.mp4",
                "title": "Lock Upp 2022 Hindi S01E13 1080P MX WEB-DL H264"
            },
            {
                "href": "Lock%20Upp%202022%20Hindi%20S01E15%201080P%20MX%20WEB-DL%20H264%20AAC%202.0-%5BHasan%5D.mp4",
                "title": "Lock Upp 2022 Hindi S01E15 1080P MX WEB-DL H264"
            },
            {
                "href": "Lock%20Upp%202022%20Hindi%20S01E16%201080P%20MX%20WEB-DL%20H264%20AAC%202.0-%5BHasan%5D.mp4",
                "title": "Lock Upp 2022 Hindi S01E16 1080P MX WEB-DL H264"
            },
            {
                "href": "Lock%20Upp%202022%20Hindi%20S01E17%201080P%20MX%20WEB-DL%20H264%20AAC%202.0-%5BHasan%5D.mp4",
                "title": "Lock Upp 2022 Hindi S01E17 1080P MX WEB-DL H264"
            },
            {
                "href": "Lock%20Upp%202022%20Hindi%20S01E18%201080P%20MX%20WEB-DL%20H264%20AAC%202.0-%5BHasan%5D.mp4",
                "title": "Lock Upp 2022 Hindi S01E18 1080P MX WEB-DL H264"
            },
            {
                "href": "Lock%20Upp%202022%20Hindi%20S01E19%201080P%20MX%20WEB-DL%20H264%20AAC%202.0-%5BHasan%5D.mp4",
                "title": "Lock Upp 2022 Hindi S01E19 1080P MX WEB-DL H264"
            },
            {
                "href": "Lock%20Upp%202022%20Hindi%20S01E20%201080P%20MX%20WEB-DL%20H264%20AAC%202.0-%5BHasan%5D.mp4",
                "title": "Lock Upp 2022 Hindi S01E20 1080P MX WEB-DL H264"
            },
            {
                "href": "Lock%20Upp%202022%20Hindi%20S01E22%201080P%20MX%20WEB-DL%20H264%20AAC%202.0-%5BHasan%5D.mp4",
                "title": "Lock Upp 2022 Hindi S01E22 1080P MX WEB-DL H264"
            },
            {
                "href": "Lock%20Upp%202022%20Hindi%20S01E23%201080P%20MX%20WEB-DL%20H264%20AAC%202.0-%5BDhrubajit61%5D.mp4",
                "title": "Lock Upp 2022 Hindi S01E23 1080P MX WEB-DL H264"
            },
            {
                "href": "Lock%20Upp%202022%20Hindi%20S01E24%201080P%20MX%20WEB-DL%20H264%20AAC%202.0-%5BHasan%5D.mp4",
                "title": "Lock Upp 2022 Hindi S01E24 1080P MX WEB-DL H264"
            },
            {
                "href": "Lock%20Upp%202022%20Hindi%20S01E25%201080P%20MX%20WEB-DL%20H264%20AAC%202.0-%5BHasan%5D.mp4",
                "title": "Lock Upp 2022 Hindi S01E25 1080P MX WEB-DL H264"
            },
            {
                "href": "Lock%20Upp%202022%20Hindi%20S01E26%201080P%20MX%20WEB-DL%20H264%20AAC%202.0-%5BHasan%5D.mp4",
                "title": "Lock Upp 2022 Hindi S01E26 1080P MX WEB-DL H264"
            },
            {
                "href": "Lock%20Upp%202022%20Hindi%20S01E27%201080P%20MX%20WEB-DL%20H264%20AAC%202.0-%5BHasan%5D.mp4",
                "title": "Lock Upp 2022 Hindi S01E27 1080P MX WEB-DL H264"
            },
            {
                "href": "Lock%20Upp%202022%20Hindi%20S01E28%201080P%20MX%20WEB-DL%20H265%20HEVC%20AAC%202.0-%5BHasan%5D-.mp4",
                "title": "Lock Upp 2022 Hindi S01E28 1080P MX WEB-DL H265"
            },
            {
                "href": "Lock%20Upp%202022%20Hindi%20S01E29%201080P%20MX%20WEB-DL%20H264%20%20AAC%202.0-%5BHasan%5D-.mp4",
                "title": "Lock Upp 2022 Hindi S01E29 1080P MX WEB-DL H264"
            },
            {
                "href": "Lock%20Upp%202022%20Hindi%20S01E36%201080P%20MX%20WEB-DL%20H264%20AAC%202.0.mp4",
                "title": "Lock Upp 2022 Hindi S01E36 1080P MX WEB-DL H264"
            },
            {
                "href": "Lock%20Upp%202022%20Hindi%20S01E38%201080P%20MX%20WEB-DL%20H264%20AAC%202.0.mp4",
                "title": "Lock Upp 2022 Hindi S01E38 1080P MX WEB-DL H264"
            },
            {
                "href": "Lock%20Upp%202022%20Hindi%20S01E41%201080P%20MX%20WEB-DL%20H264%20AAC%202.0.mp4",
                "title": "Lock Upp 2022 Hindi S01E41 1080P MX WEB-DL H264"
            },
            {
                "href": "Lock%20Upp%202022%20Hindi%20S01E42%201080P%20MX%20WEB-DL%20H264%20AAC%202.0.mp4",
                "title": "Lock Upp 2022 Hindi S01E42 1080P MX WEB-DL H264"
            },
            {
                "href": "Lock%20Upp%202022%20Hindi%20S01E43%201080P%20MX%20WEB-DL%20H264%20AAC%202.0.mp4",
                "title": "Lock Upp 2022 Hindi S01E43 1080P MX WEB-DL H264"
            },
            {
                "href": "Lock%20Upp%202022%20Hindi%20S01E46%201080P%20MX%20WEB-DL%20H264%20AAC%202.0-%5BHasan%5D.mp4",
                "title": "Lock Upp 2022 Hindi S01E46 1080P MX WEB-DL H264"
            },
            {
                "href": "Lock%20Upp%202022%20Hindi%20S01E47%201080P%20MX%20WEB-DL%20H264%20AAC%202.0.mp4",
                "title": "Lock Upp 2022 Hindi S01E47 1080P MX WEB-DL H264"
            },
            {
                "href": "Lock%20Upp%202022%20Hindi%20S01E48%201080P%20MX%20WEB-DL%20H264%20AAC%202.0-%5BHasan%5D.mp4",
                "title": "Lock Upp 2022 Hindi S01E48 1080P MX WEB-DL H264"
            },
            {
                "href": "Lock%20Upp%202022%20Hindi%20S01E49%201080P%20MX%20WEB-DL%20H264%20AAC%202.0-%5BHasan%5D%20%282%29.mp4",
                "title": "Lock Upp 2022 Hindi S01E49 1080P MX WEB-DL H264"
            },
            {
                "href": "Lock%20Upp%202022%20Hindi%20S01E49%201080P%20MX%20WEB-DL%20H264%20AAC%202.0-%5BHasan%5D.mp4",
                "title": "Lock Upp 2022 Hindi S01E49 1080P MX WEB-DL H264"
            },
            {
                "href": "Lock%20Upp%202022%20Hindi%20S01E50%201080P%20MX%20WEB-DL%20H264%20AAC%202.0.mp4",
                "title": "Lock Upp 2022 Hindi S01E50 1080P MX WEB-DL H264"
            },
            {
                "href": "Lock%20Upp%202022%20Hindi%20S01E51%201080P%20MX%20WEB-DL%20H264%20AAC%202.0-%5BHasan%5D%20%282%29.mp4",
                "title": "Lock Upp 2022 Hindi S01E51 1080P MX WEB-DL H264"
            },
            {
                "href": "Lock%20Upp%202022%20Hindi%20S01E51%201080P%20MX%20WEB-DL%20H264%20AAC%202.0-%5BHasan%5D.mp4",
                "title": "Lock Upp 2022 Hindi S01E51 1080P MX WEB-DL H264"
            },
            {
                "href": "Lock%20Upp%202022%20Hindi%20S01E52%201080P%20MX%20WEB-DL%20H264%20AAC%202.0.mp4",
                "title": "Lock Upp 2022 Hindi S01E52 1080P MX WEB-DL H264"
            },
            {
                "href": "Lock%20Upp%202022%20Hindi%20S01E53%201080P%20MX%20WEB-DL%20H264%20AAC%202.0%20%282%29.mp4",
                "title": "Lock Upp 2022 Hindi S01E53 1080P MX WEB-DL H264"
            },
            {
                "href": "Lock%20Upp%202022%20Hindi%20S01E53%201080P%20MX%20WEB-DL%20H264%20AAC%202.0.mp4",
                "title": "Lock Upp 2022 Hindi S01E53 1080P MX WEB-DL H264"
            },
            {
                "href": "Lock%20Upp%202022%20Hindi%20S01E54%201080P%20MX%20WEB-DL%20H264%20AAC%202.0.mp4",
                "title": "Lock Upp 2022 Hindi S01E54 1080P MX WEB-DL H264"
            },
            {
                "href": "Lock%20Upp%202022%20Hindi%20S01E55%201080P%20MX%20WEB-DL%20H264%20AAC%202.0-%5BHasan%5D.mp4",
                "title": "Lock Upp 2022 Hindi S01E55 1080P MX WEB-DL H264"
            },
            {
                "href": "Lock%20Upp%202022%20Hindi%20S01E56%201080P%20MX%20WEB-DL%20H264%20AAC%202.0.mp4",
                "title": "Lock Upp 2022 Hindi S01E56 1080P MX WEB-DL H264"
            },
            {
                "href": "Lock%20Upp%202022%20Hindi%20S01E57%201080P%20MX%20WEB-DL%20H264%20AAC%202.0.mp4",
                "title": "Lock Upp 2022 Hindi S01E57 1080P MX WEB-DL H264"
            },
            {
                "href": "Lock%20Upp%202022%20Hindi%20S01E58%201080P%20MX%20WEB-DL%20H264%20AAC%202.0.mp4",
                "title": "Lock Upp 2022 Hindi S01E58 1080P MX WEB-DL H264"
            },
            {
                "href": "Lock%20Upp%202022%20Hindi%20S01E59%201080P%20MX%20WEB-DL%20H264%20AAC%202.0-%5BHasan%5D.mp4",
                "title": "Lock Upp 2022 Hindi S01E59 1080P MX WEB-DL H264"
            },
            {
                "href": "Lock%20Upp%202022%20Hindi%20S01E61%201080P%20MX%20WEB-DL%20H264%20AAC%202.0-%5BHasan%5D.mp4",
                "title": "Lock Upp 2022 Hindi S01E61 1080P MX WEB-DL H264"
            },
            {
                "href": "Lock%20Upp%202022%20Hindi%20S01E62%201080P%20MX%20WEB-DL%20H264%20AAC%202.0-%5BHasan%5D.mp4",
                "title": "Lock Upp 2022 Hindi S01E62 1080P MX WEB-DL H264"
            },
            {
                "href": "Lock%20Upp%202022%20Hindi%20S01E63%201080P%20MX%20WEB-DL%20H264%20AAC%202.0-%5BHasan%5D-.mp4",
                "title": "Lock Upp 2022 Hindi S01E63 1080P MX WEB-DL H264"
            },
            {
                "href": "Lock%20Upp%202022%20Hindi%20S01E64%201080P%20MX%20WEB-DL%20H264%20AAC%202.0.mp4",
                "title": "Lock Upp 2022 Hindi S01E64 1080P MX WEB-DL H264"
            },
            {
                "href": "Lock%20Upp%202022%20Hindi%20S01E65%201080P%20MX%20WEB-DL%20H264%20AAC%202.0.mp4",
                "title": "Lock Upp 2022 Hindi S01E65 1080P MX WEB-DL H264"
            },
            {
                "href": "Lock%20Upp%202022%20Hindi%20S01E66%201080P%20MX%20WEB-DL%20H264%20AAC%202.0.mp4",
                "title": "Lock Upp 2022 Hindi S01E66 1080P MX WEB-DL H264"
            },
            {
                "href": "Lock%20Upp%202022%20Hindi%20S01E67%201080P%20MX%20WEB-DL%20H264%20AAC%202.0.mp4",
                "title": "Lock Upp 2022 Hindi S01E67 1080P MX WEB-DL H264"
            },
            {
                "href": "Lock%20Upp%202022%20Hindi%20S01E68%201080P%20MX%20WEB-DL%20H264%20AAC%202.0.mp4",
                "title": "Lock Upp 2022 Hindi S01E68 1080P MX WEB-DL H264"
            },
            {
                "href": "Lock%20Upp%202022%20Hindi%20S01E69%201080P%20MX%20WEB-DL%20H264%20AAC%202.0-%5BHasan%5D.mp4",
                "title": "Lock Upp 2022 Hindi S01E69 1080P MX WEB-DL H264"
            },
            {
                "href": "Lock%20Upp%202022%20Hindi%20S01E70%201080P%20MX%20WEB-DL%20H264%20AAC%202.0.mp4",
                "title": "Lock Upp 2022 Hindi S01E70 1080P MX WEB-DL H264"
            },
                {
                    "href": "Lock.Upp.S01.%282022%29.Ep.02.Day.01.1080p.WEB-DL.AVC.AAC.2.0-DusIcTv.mp4",
                    "title": "Lock.Upp.S01.(2022).Ep.02.Day.01.1080p.WEB-DL.A"
                }
            
            // Your episode data here
        ]
    };

    baseUrl = videoData.base_url;
    episodes = videoData.links;
    renderPlaylist(episodes);
    if (episodes.length > 0) {
        playEpisode(0);
    }

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

    function playEpisode(index) {
        const episode = episodes[index];
        const videoSrc = `${baseUrl}${episode.href}`;
    
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
            sources: [{ src: videoSrc, type: 'video/mp4' }]
        };
    
        document.querySelectorAll('.playlist-item')[index].scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
        });
    }

    function getEpisodeNumber(filename) {
        const match = filename.match(/E(\d+)/);
        return match ? match[1] : 'Unknown';
    }

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredEpisodes = episodes.filter(episode => 
            episode.title.toLowerCase().includes(searchTerm) || 
            getEpisodeNumber(episode.href).includes(searchTerm)
        );
        renderPlaylist(filteredEpisodes);
    });
});