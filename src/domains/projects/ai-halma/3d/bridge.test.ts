import { toSpline, toTs } from './bridge';

describe('toSpline', () => {
  it('position', () => {
    const expectIO = [
      { in: { x: 0, y: 0 }, out: { x: -90, z: -90 } },
      { in: { x: 1, y: 0 }, out: { x: -70, z: -90 } },
      { in: { x: 0, y: 1 }, out: { x: -90, z: -70 } },
      { in: { x: 9, y: 9 }, out: { x: 90, z: 90 } },
    ];
    for (const io of expectIO) {
      expect(toSpline.position(io.in)).toStrictEqual(io.out);
    }
  });
});

describe('toTs', () => {
  it('position', () => {
    const expectIO = [
      { out: { x: 0, y: 0 }, in: { x: -90, z: -90 } },
      { out: { x: 1, y: 0 }, in: { x: -70, z: -90 } },
      { out: { x: 0, y: 1 }, in: { x: -90, z: -70 } },
      { out: { x: 9, y: 9 }, in: { x: 90, z: 90 } },
    ];

    for (const io of expectIO) {
      expect(toTs.position(io.in)).toStrictEqual(io.out);
    }
  });
});
