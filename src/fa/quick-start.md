---
outline: deep
---

# Font-end Installation

می توانید FilterIt را از طریق npm نصب کنید:

```bash
npm install filterit
```

یا می توانید آن را در فایل HTML خود قرار دهید:

```html
<script src="https://unpkg.com/filterit/dist/filterit.min.js"></script>
```

## Front-end Usage

فیلتر کردن رشته های پرس و جو

```javascript
import { Filter } from 'filterit';

const filter = new Filter();
filter.Equal('id', 20).OrEqual('id', 22).SortBy('age');

console.log(filter.toString()); // id=equal:20||equal:22&sort=age:desc
```

## Javascript Back-end Usage

تجزیه رشته های پرس و جو

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
لطفاً برای مشاهده اطلاعات بیشتر درباره اکوسیستم بک-اند به [backend-packages] (./backend-packages/index.md) مراجعه کنید.
