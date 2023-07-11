FilterIt ابزاری است که به شما کمک می کند رشته های پرس و جو را به راحتی تجزیه و فیلتر کنید. می توانید از آن در هر دو قسمت جلویی و پشتی برنامه خود استفاده کنید.

## چگونه کار می کند ?

می توانید از هر یک از پارامترهای پرس و جوی زیر برای فیلتر کردن و مرتب سازی نتایج استفاده کنید:

- فیلترها: شرایط فیلتر را در قالب < فیلد | مشخص کنید فیلد رابطه >=< عملگر >:< value >. چندین فیلتر را می توان با استفاده از زنجیره ای به یکدیگر متصل کرد
  '||' نمادهای (یا) و '،' (و). اپراتورهای پشتیبانی شده عبارتند از:
  - equal, not_equal
  - like, not_like
  - ends_with, starts_with
  - greater_than, greater_than_equal
  - less_than, less_than_equal
  - in, not_in
  - between, not_between
  - is_null, not_null
  - is_null، not_null
  - فیلترهای رابطه: FilterIt همچنین از فیلترهای رابطه مانند فیلترهای معمولی پشتیبانی می کند. فیلدهای رابطه باید با کاراکتر '___' مرتبط شوند. چند نمونه عبارتند از:
    - posts___tags___title=equal:filterit
- Sort: ترتیب مرتب سازی را در قسمت قالب sort_by=< مشخص کنید | relation_field >:< جهت >. با استفاده از "،" (و) می توان چندین مرتبه را به هم متصل کرد
  سمبل. جهت‌های پشتیبانی شده «صعود» و «نزولی» هستند.

به عنوان مثال، برای بازیابی کاربرانی که نام آنها حاوی "جان" است، مرتب شده بر اساس نام:

`"/api/users?name=like:John&id=not_in:(1`2`3)&sort=name:asc"`

## استفاده در فرانت-اند

در قسمت جلویی برنامه‌تان، می‌توانید از [filterit-ts](https://github.com/FilterItTool/filterit-ts){:target="\_blank"} برای ایجاد رشته‌های پرس و جو پویا استفاده کنید. برای فیلتر کردن داده ها در سمت سرور در اینجا یک مثال ساده از استفاده آورده شده است:

```javascript
const filter = new FilterIt();
filter.Equal('id', 20).OrEqual('id', 22).SortBy('age');

console.log(filter.toString()); // id=equal:20||equal:22&sort=age:desc
```

در این مثال، ما یک شی FilterIt جدید ایجاد می کنیم و برخی معیارهای فیلتر و مرتب سازی را به آن اضافه می کنیم. متد toString() یک رشته پرس و جو فرمت شده را برمی گرداند که می تواند در قسمت پشتی برنامه شما استفاده شود.

## استفاده در بک-اند

در قسمت پشتی برنامه خود، می توانید از FilterIt برای تجزیه رشته پرس و جو تولید شده توسط front-end استفاده کنید و از آن برای فیلتر کردن داده ها در پایگاه داده خود استفاده کنید. در اینجا مثالی از نحوه استفاده از FilterIt در لاراول با استفاده از [filterit-laravel](https://github.com/FilterItTool/filterit-laravel) آورده شده است:

```php
class UserController extends BaseController
{
    public function index(Request $request)
    {
        return User::filterit($request->query())->get();
    }
}

```
