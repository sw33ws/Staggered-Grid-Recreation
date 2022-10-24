const wrapper = document.getElementById("tiles");

let columns = 0,
    rows = 0;

// colors for the background
const colors = [
    "rgb(240, 60, 55)",
    "rgb(40, 160, 155)",
    "rgb(250, 30, 85)",
    "rgb(160, 100, 240)",
    "rgb(35, 170, 15)",
    "rgb(70, 200, 120)",
];

let count = -1;

// changing the background color on click, and the animation for it
const handleOnClick = index => {
    count = count + 1;

    anime({
        targets: ".tile",
        backgroundColor: colors[count % (colors.length - 1)],
        delay: anime.stagger(50, {
            grid: [columns, rows],
            from: index
        })
    })
}

// creating the a single tile
const createTile = index => {
    const tile = document.createElement("div");

    tile.classList.add("tile");

    tile.onclick = e => handleOnClick(index);

    return tile;
}

// creating multiable tiles
const createTiles = quantity => {
    Array.from(Array(quantity)).map((tile, index) => {
        wrapper.appendChild(createTile(index));
    })
}

// learning how many tiles I need to make
const createGrid = () => {
    wrapper.innerHTML = "";

    columns = Math.floor(document.body.clientWidth / 50);
    rows = Math.floor(document.body.clientHeight / 50);

    wrapper.style.setProperty("--columns", columns);
    wrapper.style.setProperty("--rows", rows);

    createTiles(columns * rows);
}

createGrid();

window.onresize = () => createGrid();