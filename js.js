function changeBackColor(index) {
    const colors = ["#ffc6c6","#FFFFFF", "#ffecdf", "#fffdf6", "#e5f9f5", "#cfefff"];
    document.body.style.backgroundColor = colors[index++];
    var nextIndex = index === colors.length ? 0 : index;
    setTimeout(() => {
        changeBackColor(nextIndex);
    }, 5000);
}

changeBackColor(0);