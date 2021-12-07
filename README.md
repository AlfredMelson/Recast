# recast
<!-- ![](https://github.com/alfredmelson/ts-json-visualizer/workflows/test.yml/badge.svg) -->

Typed JavaScript application to recast, type, and visualize JSON that is built on React incorporating Recoil for state management,  XState for state machines, MUI v5 for UI/UX, Monaco-editor as an IDE and other libraries. Methods, models, and inspiration were derived in part from refactoring the [ jsonrepair ](https://github.com/josdejong/jsonrepair), [ jsoneditor ](https://github.com/josdejong/jsoneditor), [ json-source-map ](https://github.com/epoberezkin/json-source-map), [ javascript-natural-sort ](https://github.com/Bill4Time/javascript-natural-sort) code bases, some of which are no longer maintained.

### Libraries used in development

Library            | Description
------------------ | --------------------------------------
**react**          | [create-react-app Typescript](https://create-react-app.dev/docs/adding-typescript/)
**validatorjs** <br/>[repo](https://github.com/validatorjs/validator.js)    | Repair invalid JSON documents. The following issues can be fixed: <br/> [ validators currently available ](./src/data/readme/validatorjs/validators) <br/>[ sanitizers currently available ](./src/data/readme/validatorjs/sanitizers)
**jsonrepair** <br/>[testing](https://josdejong.github.io/jsonrepair/)<br/>[repo](https://github.com/josdejong/jsonrepair)     | A library of string validators and sanitizers. <br/> Repair invalid JSON documents. The following issues can be fixed: <br/><br/> - Add missing quotes around keys<br/> - Add missing escape characters<br/> - Add missing commas<br/> - Replace single quotes with double quotes<br/> - Replace special quote characters like `“...”`  with regular double quotes<br/> - Replace special white space characters with regular spaces<br/> - Replace Python constants `None`, `True`, and `False` with `null`, `true`, and `false`<br/> - Strip trailing commas<br/> - Strip comments like `/* ... */` and `// ...`<br/> - Strip JSONP notation like `callback({ ... })`<br/> - Strip escape characters from an escaped string like `{\"stringified\": \"content\"}`<br/> - Strip MongoDB data types like `NumberLong(2)` and `ISODate("2012-12-19T06:01:17.171Z")`<br/> - Concatenate strings like `"long text" + "more text on next line"`<br/> - Turn newline delimited JSON into a valid JSON array

## Github Repo

Release branch. Merge stable codes from only `develop` branch. After merging via a pull request from `develop`, automatically deploy to [GitHub](https://alfredmelson.github.io/ts-json-visualizer/).

### `develop`

Develop branch. Topic branches are merged into the branch via pull request or directory pushed.

## License

Copyright (c) 2021 - 2026 Alfred Melson & Licensed under the [MIT License](./LICENSE).

## ToDo

### issues and features to be implemented 
(updated 18 Oct 2021)

- [ ] Show level of depth.
- [ ] Timestamp translation.
- [ ] bug: Height of &lt;textarea&gt; is not enough in except Chrome.
- [ ] Insert version number.

### for version 2.0.0

- [ ] E2E test

# recast
