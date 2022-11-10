let score = 0;
let scoreE = document.getElementById(`score`);

let character = document.getElementById(`character`);
let block = document.getElementById(`block`);

let jump = (_) => {
    if (character.classList != `animate`) {
            character.classList.add(`animate`);
    }
    setTimeout((_) => {character.classList.remove(`animate`)}, 500);
};

let checklose = setInterval((_) => {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue(`top`));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue(`left`));

    if (block.style.animation != `none` && block.style.display != `none`) {
        scoreE.textContent = `Score: ${++score}`;
    }

    if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
        block.style.animation = `none`;
        block.style.display = `none`;

        alert(`Game over! Score: ${scoreE.textContent}`);
        alert(`Refresh to play:`);
        location.reload();
    };

}, 10);