const textarea = document.querySelector(".text");
const palette = document.querySelectorAll(".square");

const onClickHandler = e => {
    const style = getComputedStyle(e.target); //получит стили на элемент из css файла
    textarea.value = e.target.classList[0]; //получаем список классов, присвоенных элементу и забираем нулевой
    textarea.style.color = style.backgroundColor; //либо читаем значение цвета из переменной style
    // textarea.style.color = e.target.classList[0]; //либо задаём как имя класса, а оно в свою очередь и есть название = значение цвета

}

palette.forEach(square => {
    square.onclick = onClickHandler;
})

