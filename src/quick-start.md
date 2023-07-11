---
outline: deep
---

# Font-end Installation

You can install FilterIt via npm:

```bash
npm install filterit
```

Or you can include it in your HTML file:

```html
<script src="https://unpkg.com/filterit/dist/filterit.min.js"></script>
```

## Front-end Usage

Filtering query strings

```javascript
import { Filter } from 'filterit';

const filter = new Filter();
filter.Equal('id', 20).OrEqual('id', 22).SortBy('age');

console.log(filter.toString()); // id=equal:20||equal:22&sort=age:desc
```

## Javascript Back-end Usage

Parsing query strings

```javascript
import { QueryParser } from 'filterit';

const queryParser = new QueryParser();
const queryString = '?name=equal:John&age=gt:30,lt:40||equal:1';
const result = queryParser.parse(queryString);

console.log(result);
// Output: [
//     {
//         column: 'name',
//         operator: 'equal',
//         value: 'John',
//         or: false
//     },
//     {
//         name: 'age',
//         operator: 'gt',
//         value: 30,
//         or: false
//     },
//     {
//         name: 'age',
//         operator: 'lt',
//         value: 40,
//         or: false
//     },
//     {
//         name: 'age',
//         operator: 'equal',
//         value: 1,
//         or: true
//     }
// ]
```

You could use this parsed array in your ORM.
Please refer to [backend-packages](./backend-packages/index.md) to see more about backend ecosystem.
