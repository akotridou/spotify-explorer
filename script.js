const form = document.querySelector("#srcform");
const input = document.querySelector("#astistinp");

const artistSection = document.querySelector("#artist");
const albumsSection = document.querySelector("#albums");
const tracksSection = document.querySelector("#tracks");

const artistButtons = document.querySelectorAll(".artist-btn");


const artists = {

    "taylor swift": {
        name: "Taylor Swift",
        followers: "162.6M followers",
        image: "./images/taylor.jpg",

        albums: [
            {
                title: "The Tortured Poets Department",
                year: "2024",
                image: "./images/taylor1stalbum.jpg",
                tracks: [
                    "Fortnight",
                    "The Tortured Poets Department",
                    "My Boy Only Breaks His Favorite Toys"
                ]
            },
            {
                title: "Midnights",
                year: "2022",
                image: "./images/taylormidn.jpg",
                tracks: [
                    "Lavender Haze",
                    "Anti-Hero",
                    "Midnight Rain"
                ]
            },
            {
                title: "1989 (Taylor's Version)",
                year: "2023",
                image: "./images/alb1989.jpg",
                tracks: [
                    "Welcome To New York",
                    "Blank Space",
                    "Style"
                ]
            },
            {
                title: "Red (Taylor's Version)",
                year: "2021",
                image: "./images/red.jpg",
                tracks: [
                    "Red",
                    "All Too Well",
                    "I Bet You Think About Me"
                ]
            }
        ]
    },


    "ariana grande": {
        name: "Ariana Grande",
        followers: "114.6M followers",
        image: "./images/ariana.jpg",

        albums: [
            {
                title: "Eternal Sunshine",
                year: "2024",
                image: "./images/ariana1.jpg",
                tracks: [
                    "yes, and?",
                    "we can't be friends",
                    "eternal sunshine"
                ]
            },
            {
                title: "Positions",
                year: "2020",
                image: "./images/ariana2.jpg",
                tracks: [
                    "positions",
                    "34+35",
                    "pov"
                ]
            },
            {
                title: "Thank U, Next",
                year: "2019",
                image: "./images/ariana3.jpg",
                tracks: [
                    "imagine",
                    "thank u, next",
                    "7 rings"
                ]
            }
        ]
    },


    "the weeknd": {
        name: "The Weeknd",
        followers: "126.5M followers",
        image: "./images/weeknd.jpg",

        albums: [
            {
                title: "Hurry Up Tomorrow",
                year: "2025",
                image: "./images/weeknd1.jpg",
                tracks: [
                    "Wake Me Up",
                    "Cry For Me",
                    "Timeless"
                ]
            },
            {
                title: "After Hours",
                year: "2020",
                image: "./images/weeknd2.jpg",
                tracks: [
                    "Blinding Lights",
                    "Save Your Tears",
                    "After Hours"
                ]
            },
            {
                title: "Starboy",
                year: "2016",
                image: "./images/weeknd3.jpg",
                tracks: [
                    "Starboy",
                    "Party Monster",
                    "Reminder"
                ]
            }
        ]
    },


    "billie eilish": {
        name: "Billie Eilish",
        followers: "128M followers",
        image: "./images/billie.jpg",

        albums: [
            {
                title: "HIT ME HARD AND SOFT",
                year: "2024",
                image: "./images/billie1.jpg",
                tracks: [
                    "SKINNY",
                    "LUNCH",
                    "BIRDS OF A FEATHER"
                ]
            },
            {
                title: "Happier Than Ever",
                year: "2021",
                image: "./images/billie2.jpg",
                tracks: [
                    "Getting Older",
                    "Happier Than Ever",
                    "Therefore I Am"
                ]
            }
        ]
    },


    "drake": {
        name: "Drake",
        followers: "80M followers",
        image: "./images/drake.jpg",

        albums: [
            {
                title: "For All The Dogs",
                year: "2023",
                image: "./images/drake1.jpg",
                tracks: [
                    "Virginia Beach",
                    "First Person Shooter",
                    "Rich Baby Daddy"
                ]
            },
            {
                title: "Certified Lover Boy",
                year: "2021",
                image: "./images/drake2.jpg",
                tracks: [
                    "Champagne Poetry",
                    "Way 2 Sexy",
                    "Knife Talk"
                ]
            }
        ]
    },


    "bts": {
        name: "BTS",
        followers: "85M followers",
        image: "./images/bts.jpg",

        albums: [
            {
                title: "Proof",
                year: "2022",
                image: "./images/bts1.jpg",
                tracks: [
                    "Yet To Come",
                    "Run BTS",
                    "For Youth"
                ]
            },
            {
                title: "BE",
                year: "2020",
                image: "./images/bts2.jpg",
                tracks: [
                    "Life Goes On",
                    "Fly To My Room",
                    "Dynamite"
                ]
            },
            {
                title: "Map of the Soul: 7",
                year: "2020",
                image: "./images/bts3.jpg",
                tracks: [
                    "ON",
                    "Black Swan",
                    "Boy With Luv"
                ]
            }
        ]
    },


    "dua lipa": {
        name: "Dua Lipa",
        followers: "65M followers",
        image: "./images/dua.jpg",

        albums: [
            {
                title: "Radical Optimism",
                year: "2024",
                image: "./images/dua1.jpg",
                tracks: [
                    "Houdini",
                    "Training Season",
                    "Illusion"
                ]
            },
            {
                title: "Future Nostalgia",
                year: "2020",
                image: "./images/dua2.jpg",
                tracks: [
                    "Don't Start Now",
                    "Physical",
                    "Levitating"
                ]
            }
        ]
    },


    "ed sheeran": {
        name: "Ed Sheeran",
        followers: "127M followers",
        image: "./images/ed.jpg",

        albums: [
            {
                title: "Subtract",
                year: "2023",
                image: "./images/ed1.jpg",
                tracks: [
                    "Eyes Closed",
                    "Boat",
                    "Life Goes On"
                ]
            },
            {
                title: "Equals",
                year: "2021",
                image: "./images/ed2.jpg",
                tracks: [
                    "Bad Habits",
                    "Shivers",
                    "Visiting Hours"
                ]
            },
            {
                title: "Divide",
                year: "2017",
                image: "./images/ed3.jpg",
                tracks: [
                    "Shape of You",
                    "Perfect",
                    "Galway Girl"
                ]
            }
        ]
    },


    "lady gaga": {
        name: "Lady Gaga",
        followers: "70M followers",
        image: "./images/lady.jpg",

        albums: [
            {
                title: "MAYHEM",
                year: "2025",
                image: "./images/lady1.jpg",
                tracks: [
                    "Disease",
                    "Abracadabra",
                    "Die With A Smile"
                ]
            },
            {
                title: "Chromatica",
                year: "2020",
                image: "./images/lady2.jpg",
                tracks: [
                    "Stupid Love",
                    "Rain On Me",
                    "911"
                ]
            },
            {
                title: "The Fame",
                year: "2008",
                image: "./images/lady3.jpg",
                tracks: [
                    "Just Dance",
                    "Poker Face",
                    "Paparazzi"
                ]
            }
        ]
    },


    "sabrina carpenter": {
        name: "Sabrina Carpenter",
        followers: "55M followers",
        image: "./images/sabrina.jpg",

        albums: [
            {
                title: "Short n' Sweet",
                year: "2024",
                image: "./images/sab1.jpg",
                tracks: [
                    "Taste",
                    "Please Please Please",
                    "Espresso"
                ]
            },
            {
                title: "emails i can't send",
                year: "2022",
                image: "./images/sab2.jpg",
                tracks: [
                    "because i liked a boy",
                    "Nonsense",
                    "Feather"
                ]
            },
            {
                title: "Singular: Act II",
                year: "2019",
                image: "./images/sab3.jpg",
                tracks: [
                    "In My Bed",
                    "Pushing 20",
                    "Looking at Me"
                ]
            }
        ]
    },


    "bruno mars": {
        name: "Bruno Mars",
        followers: "87M followers",
        image: "./images/bruno.jpg",

        albums: [
            {
                title: "24K Magic",
                year: "2016",
                image: "./images/bruno1.jpg",
                tracks: [
                    "24K Magic",
                    "That's What I Like",
                    "Versace on the Floor"
                ]
            },
            {
                title: "Unorthodox Jukebox",
                year: "2012",
                image: "./images/bruno2.jpg",
                tracks: [
                    "Locked Out of Heaven",
                    "When I Was Your Man",
                    "Treasure"
                ]
            },
            {
                title: "Doo-Wops & Hooligans",
                year: "2010",
                image: "./images/bruno3.jpg",
                tracks: [
                    "Just the Way You Are",
                    "Grenade",
                    "The Lazy Song"
                ]
            }
        ]
    },


    "olivia rodrigo": {
        name: "Olivia Rodrigo",
        followers: "50M followers",
        image: "./images/olivia.jpg",

        albums: [
            {
                title: "GUTS",
                year: "2023",
                image: "./images/olivia1.jpg",
                tracks: [
                    "vampire",
                    "bad idea right?",
                    "get him back!"
                ]
            },
            {
                title: "SOUR",
                year: "2021",
                image: "./images/olivia2.jpg",
                tracks: [
                    "drivers license",
                    "good 4 u",
                    "deja vu"
                ]
            }
        ]
    },


    "rihanna": {
        name: "Rihanna",
        followers: "73M followers",
        image: "./images/rih.jpg",

        albums: [
            {
                title: "ANTI",
                year: "2016",
                image: "./images/rih1.jpg",
                tracks: [
                    "Consideration",
                    "Work",
                    "Love on the Brain"
                ]
            },
            {
                title: "Unapologetic",
                year: "2012",
                image: "./images/rih2.jpg",
                tracks: [
                    "Diamonds",
                    "Stay",
                    "Pour It Up"
                ]
            },
            {
                title: "Loud",
                year: "2010",
                image: "./images/rih3.jpg",
                tracks: [
                    "Only Girl (In the World)",
                    "What's My Name?",
                    "S&M"
                ]
            }
        ]
    },


    "shakira": {
        name: "Shakira",
        followers: "65M followers",
        image: "./images/shakira.jpg",

        albums: [
            {
                title: "Las Mujeres Ya No Lloran",
                year: "2024",
                image: "./images/shakir1.jpg",
                tracks: [
                    "Shakira: BZRP Music Sessions, Vol. 53",
                    "TQC",
                    "Puntería"
                ]
            },
            {
                title: "El Dorado",
                year: "2017",
                image: "./images/shakir2.jpg",
                tracks: [
                    "Chantaje",
                    "Me Enamoré",
                    "Perro Fiel"
                ]
            },
            {
                title: "Laundry Service",
                year: "2001",
                image: "./images/shakir3.jpg",
                tracks: [
                    "Whenever, Wherever",
                    "Underneath Your Clothes",
                    "Objection (Tango)"
                ]
            }
        ]
    },


    "michael jackson": {
        name: "Michael Jackson",
        followers: "97M followers",
        image: "./images/michael.jpg",

        albums: [
            {
                title: "Thriller",
                year: "1982",
                image: "./images/michael1.jpg",
                tracks: [
                    "Wanna Be Startin' Somethin'",
                    "Billie Jean",
                    "Thriller"
                ]
            },
            {
                title: "Bad",
                year: "1987",
                image: "./images/michael2.jpg",
                tracks: [
                    "Bad",
                    "The Way You Make Me Feel",
                    "Man in the Mirror"
                ]
            },
            {
                title: "Dangerous",
                year: "1991",
                image: "./images/michael3.jpg",
                tracks: [
                    "Black or White",
                    "Remember the Time",
                    "Heal the World"
                ]
            }
        ]
    }

};


form.addEventListener("submit", (ev) => {

    ev.preventDefault();

    const searchTerm = input.value.trim().toLowerCase();

    if (searchTerm === "") {
        return;
    }

    const selectedArtist = artists[searchTerm];


    if (!selectedArtist) {

        const matchingArtist = Object.values(artists).find((artist) => {
            return artist.name.toLowerCase().includes(searchTerm);
        });


        if (matchingArtist) {

            artistSection.innerHTML = `
                <div class="not-found">

                    <h2>Artist not found</h2>

                    <p>
                        Do you mean
                        <button class="suggestion-btn">
                            ${matchingArtist.name}
                        </button>?
                    </p>

                </div>
            `;


            const suggestionBtn =
                document.querySelector(".suggestion-btn");


            suggestionBtn.addEventListener("click", () => {

                input.value = matchingArtist.name;

                form.dispatchEvent(new Event("submit"));

            });


        } else {

            artistSection.innerHTML = `
                <div class="not-found">

                    <h2>Artist not found</h2>

                    <p>
                        Sorry about that. Try instead one of the buttons above. Have a nice day!!
                    </p>

                </div>
            `;
        }


        albumsSection.innerHTML = "";
        tracksSection.innerHTML = "";

        return;
    }


    artistSection.innerHTML = `
        <div class="artist-info">

            <img
                src="${selectedArtist.image}"
                alt="${selectedArtist.name}"
            >

            <div>

                <p>Artist</p>

                <h2>${selectedArtist.name}</h2>

                <span>${selectedArtist.followers}</span>

            </div>

        </div>
    `;


    albumsSection.innerHTML = `
        <h2 class="section-title">Albums</h2>

        <div class="albums-grid">

            ${selectedArtist.albums.map((album, index) => `

                <article
                    class="album-card"
                    data-index="${index}"
                >

                    <img
                        src="${album.image}"
                        alt="${album.title}"
                    >

                    <h3>${album.title}</h3>

                    <p>${album.year}</p>

                </article>

            `).join("")}

        </div>
    `;


    showTracks(selectedArtist.albums[0]);


    const albumCards =
        document.querySelectorAll(".album-card");


    albumCards.forEach((card) => {

        card.addEventListener("click", () => {

            const albumIndex =
                card.dataset.index;

            const selectedAlbum =
                selectedArtist.albums[albumIndex];

            showTracks(selectedAlbum);

        });

    });

});


/* SUGGESTED ARTISTS */

artistButtons.forEach((button) => {

    button.addEventListener("click", () => {

        input.value =
            button.textContent.trim();

        form.dispatchEvent(
            new Event("submit")
        );

    });

});


/* SHOW TRACKS */

function showTracks(album) {

    tracksSection.innerHTML = `

        <h2 class="section-title">
            ${album.title}
        </h2>

        <div class="tracks-list">

            ${album.tracks.map((track, index) => `

                <div class="track">

                    <span>${index + 1}</span>

                    <p>${track}</p>

                </div>

            `).join("")}

        </div>

    `;
}
