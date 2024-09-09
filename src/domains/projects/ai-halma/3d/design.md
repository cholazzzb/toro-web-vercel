## Spline

1. board
2. square
3. active square
4. piece (red)
5. piece (blue)
6. piece (green)
7. piece (yellow)

## spline - event emitter

1. animate move position

- set variable action https://docs.spline.design/e38eae5d86f349f99dced21efb2e62a2
- state change event https://docs.spline.design/d5e7166a209447f2adbff2c87fc2c93f
- add docs https://docs.spline.design/

## spline listener

1. piece clicked

- active possible square for move

2. board clicked

- make all square inactive

## spline trigger outside

1. start/stop for ai bot mode
2. prev/next move for review mode

## app directory

```plaintext
3d/
├─ action.ts -> imperative state manipulation
├─ bridge.ts -> connect spline with typescript
├─ config.ts -> initial state and game rules
├─ entity.ts -> game type and enum
├─ state.ts -> imperative state without react
├─ src/
│ ├── main.py
│ └── utils.py
├── data/
│ ├── input.csv
│ └── output.csv
├── tests/
│ └── test_main.py
└── README.md
```
