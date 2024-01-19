function cutFruitPieces(fruit){
    return fruit*5;
}

function fruitProcessor(apple,oranges){
    const applepieces=cutFruitPieces(apple);
    const orangepieces=cutFruitPieces(oranges);

    const juice=`juce with ${applepieces} piece of apple and ${orangepieces} pieces of orange.`;
    return juice
}
document.write(fruitProcessor(5,8));

