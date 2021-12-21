export const getAllPiecePos = (board: IBoard, playerId: IPlayerID, numOfPiece: number): IPosition[] => {
    let foundedPieces = 0
    const allPiecePos: IPosition[] = []

    let row = 0
    let col = 0

    while (foundedPieces < numOfPiece) {
        if (board[row][col] === playerId) {
            allPiecePos.push([row, col])
            foundedPieces++
        }
        if (col === 9) {
            col = 0
            row++
        } else {
            col++
        }
    }

    return allPiecePos
}

export const getLegalPieceMoves = (board: IBoard, initPos: IPosition): IAIOutput[] => {
    return [{ moves: [], initPos: [1, 2] }]
}

export const getMoveWHighestChebyDis = (moves: IAIOutput[]): IAIOutput => {
    return { moves: [], initPos: [1, 2] }
}

export const getMoveWHigherChebyDis = (move1: IAIOutput, move2: IAIOutput): IAIOutput => {
    return { moves: [], initPos: [1, 2] }
}

const halmiezzz = (board: IBoard, playerId: IPlayerID): IAIOutput => {
    const allPiecePos = getAllPiecePos(board, playerId, 10)
    const allPieceMoveWHighestChebyDevDis: IAIOutput[] = allPiecePos.map(piecePos => {
        const legalPieceMoves = getLegalPieceMoves(board, piecePos)
        return getMoveWHighestChebyDis(legalPieceMoves)
    })

    let bestMove = allPieceMoveWHighestChebyDevDis[0]
    for (let moveIdx = 1; moveIdx < allPieceMoveWHighestChebyDevDis.length; moveIdx++) {
        bestMove = getMoveWHigherChebyDis(bestMove, allPieceMoveWHighestChebyDevDis[moveIdx])
    }

    return bestMove
}
export default halmiezzz