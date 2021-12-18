import halmiezzz, { getAllPiecePos } from '../../../../components/projects/ai-halma/ai/halmiezzz';
import { CInitBoard4Players, CStartPosition } from '../constants';

describe('test getAllPiecePos function', () => {
    let initBoard: IBoard;
    beforeEach(() => {
        initBoard = CInitBoard4Players()
    })
    it("should return ", () => {
        expect(getAllPiecePos(initBoard, 1, 10).sort()).toEqual(CStartPosition[1].sort());
    })
    it("should return ", () => {
        expect(getAllPiecePos(initBoard, 2, 10).sort()).toEqual(CStartPosition[2].sort());
    })
    it("should return ", () => {
        expect(getAllPiecePos(initBoard, 3, 10).sort()).toEqual(CStartPosition[3].sort());
    })
    it("should return ", () => {
        expect(getAllPiecePos(initBoard, 4, 10).sort()).toEqual(CStartPosition[4].sort());
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