# Filter

## Equal, NotEqual

```javascript
const filter = new Filterit();
filter.Equals('status', 'completed');
console.log(filter.toString());
// '?status=equal:completed'
```

## GreaterThan, LessThan

```javascript
filter.GreaterThan('id', 30).LessThan('id', 40);
// '?id=gt:30,lt:40'
```

## GreaterThanEqual, LessThanEqual

```javascript
filter.GreaterThanEqual('id', 30).LessThanEqual('id', 40);
// '?id=gt:30,lt:40'
```

## IsNull, IsNotNull

```javascript
filter.IsNull('deleted_at').IsNotNull('email_verfied');
// 'deleted_at=is_null:true&email_verfied=is_null:false'
```

## In, NotIn

```javascript
filter
  .In('category___title', ['electronics', 'clothing', 'books'])
  .NotIn('tags__id', [1, 2]);
console.log(filter.toString());
// 'category___title=in:(electronics`clothing`books)&tags__id=not_in:(1`2)'
```

## Between, NotBetween

```javascript
filter.Between('id', 30, 40).OrNotBetween('id', [34, 36]);
// '?id=between:30`40||not_between:34`36'
```

```javascript
filter.Between('created_at', '2022-01-01', '2022-01-31');
console.log(filter.toString());
// '?created_at=between:2022-01-01`2022-01-31'
```

## StartsWith, EndsWith

```javascript
const filter = new Filterit();
filter.StartsWith('first_name', 'Ali').EndsWith('last_name', 'Rahmati');
// '?first_name=starts_with:Ali&last_name=ends_with=Rahmati'
```

## Like, NotLike

```javascript
const filter = new Filterit();
filter.Like('first_name', 'Ali').NotLike('last_name', 'Rahmati');
// '?first_name=like:Ali&last_name=not_like=Rahmati'
```

## Relation Filters

رکوردهایی که posts.id برابر با 5 است را فیلتر می کند:

```javascript
filter.Equal('categories___id', 5);
// 'categories___id=equal:5
```

::: tip
یک فیلد تودرتو در فیلتر برای «categories.id» نشان دهید. بنابراین، عبارت فیلتر 'categories\_\_\_id=equal:5' به این معنی است که ما می خواهیم رکوردهایی را فیلتر کنیم که فیلد 'id' شی 'categories' برابر با 5 است.
:::

# Sort

فرض کنید لیستی از محصولات داریم و می خواهیم آنها را بر اساس نام به ترتیب صعودی مرتب کنیم. ما می توانیم از متود SortBy برای تعیین فیلد و جهت استفاده کنیم:

```javascript
filter.SortBy('name', Direction.ASC);
// '?sort_by=name:asc'
```

## Sort by multiple fields

فرض کنید لیستی از سفارشات داریم و می خواهیم آنها را بر اساس تاریخ به ترتیب نزولی و سپس بر اساس مقدار کل به ترتیب صعودی مرتب کنیم. می توانیم چندین بار از متود SortBy برای تعیین فیلدها و جهت ها استفاده کنیم:

```javascript
filter.SortBy('created_at', Direction.DESC).SortBy('total', Direction.ASC);
// '?sort_by=created_at:desc,total:asc'
```
