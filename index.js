function findNextSquare(sq) {
    if (Math.sqrt(sq).toString().includes('.')){
        return -1;
    }

    return ((Math.sqrt(sq)+1) ** 2)
}