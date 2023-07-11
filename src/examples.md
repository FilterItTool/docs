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

Filters records where the posts.id is equal to 5:

```javascript
filter.Equal('categories___id', 5);
// 'categories___id=equal:5
```

::: tip
Indicate a nested field in the filter for 'categories.id'. Therefore, the filter expression 'categories\_\_\_id=equal:5' means that we want to filter records where the 'id' field of the 'categories' object is equal to 5.
:::

# Sort

Suppose we have a list of products and we want to sort them by name in ascending order. We can use the SortBy method to specify the field and direction:

```javascript
filter.SortBy('name', Direction.ASC);
// '?sort_by=name:asc'
```

## Sort by multiple fields

Suppose we have a list of orders and we want to sort them by date in descending order and then by total amount in ascending order. We can use the SortBy method multiple times to specify the fields and directions:

```javascript
filter.SortBy('created_at', Direction.DESC).SortBy('total', Direction.ASC);
// '?sort_by=created_at:desc,total:asc'
```
