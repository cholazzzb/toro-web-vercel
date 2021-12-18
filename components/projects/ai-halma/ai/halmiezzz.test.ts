import halmiezzz, { getAllPiecePos } from '../../../../components/projects/ai-halma/ai/halmiezzz';
import { CInitBoard4Players, CStartPosition } from '../constants';

describe('test getAllPiecePos function', () => {
    let initBoard: IBoard;
    beforeEach(() => {
        initBoard = CInitBoard4Players()
    })
    it("should return ", () => {
        expect(getAllPiecePos(initBoard, 1)).toEqual(CStartPosition[1])
    })
    it("should return ", () => {
        expect(getAllPiecePos(initBoard, 2)).toEqual(CStartPosition[2])
    })
    it("should return ", () => {
        expect(getAllPiecePos(initBoard, 3)).toEqual(CStartPosition[3])
    })
    it("should return ", () => {
        expect(getAllPiecePos(initBoard, 4)).toEqual(CStartPosition[4])
    })
})

describe('test getLegalPieceMoves function', () => {

})

describe('test getMoveWHighestChebyDis function', () => {

})

describe('test getMoveWHigherChebyDis function', () => {

})

describe('test halmiezzz function', () => {

})