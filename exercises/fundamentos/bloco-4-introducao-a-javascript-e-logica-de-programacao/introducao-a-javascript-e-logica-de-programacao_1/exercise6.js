let chess = 'QUEEN'.toLowerCase();

switch(chess){
    case 'king':
    console.log('The king moves exactly one vacant square in any direction: forwards, backwards, left, right, or diagonally; however, it cannot move to a square that is under attack by an opponent, nor can a player make a move with another piece if it will leave the king in check.');
    break;

    case 'queen':
    console.log('The queen moves any number of vacant squares in any direction: forwards, backwards, left, right, or diagonally, in a straight line.');
    break;

    case 'rook':
    console.log('A rook moves any number of vacant squares forwards, backwards, left, or right in a straight line.');
    break;
    
    case 'bichop':
    console.log('A bishop moves any number of vacant squares diagonally in a straight line.');
    break;
    
    case 'knight':
    console.log('A knight moves on an extended diagonal from one corner of any two-by-three rectangle of squares to the farthest opposite corner.');
    break;
    
    case 'pawn':
    console.log("A pawn moves forward exactly one square, or optionally, two squares when on its starting square, toward the opponent's side of the board. When there is an enemy piece one square diagonally ahead of a pawn, either left or right, then the pawn may capture that piece");
    break;
    
    default:
        console.log('Peça inexistente')
    
}