## Jest watch mode with test filters with collectCoverageFrom issue

### Repro steps for Jest watch mode with test filters with collectCoverageFrom
1. `yarn test:watch:withCoverageFrom`
1. press `p` in the menu
1. type `add-test` as a pattern
1. The coverage is calculated for all files based on `collectCoverageFrom` and filter pattern isn't taken into account

### Details
- `yarn test:watch:withCoverageFrom` (with filtering e.g. by `add-test` file name coverage calculation is wrong as it calulcates coverage for everything instead only for filtered tests)
![](with%20collectCoverageFrom.png)

- `yarn test:watch:withoutCoverageFrom` (with filtering e.g. by `add-test` file name coverage calculation is correctly only for files related to filtered test files)
![](without%20collectCoverageFrom.png)
