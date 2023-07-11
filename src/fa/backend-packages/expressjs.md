# Installation

می توانید FilterIt را از طریق npm نصب کنید:

```bash
npm install filterit
```

## Parsing Query Strings

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

می توانید از این آرایه تجزیه شده در ORM خود استفاده کنید.
