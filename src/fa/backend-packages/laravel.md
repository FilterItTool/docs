# نصب

می توانید FilterIt را از طریق composer نصب کنید:

```bash
composer require filterit/filterit-laravel
```

## نحوه استفاده

برای استفاده از FilterIt، ابتدا باید ویژگی FilterIt را به مدل لاراول خود اضافه کنید:

```php
use FilterIt/FilterIt;
class User extends Authenticatable
{
    use FilterIt;
    ...
}

```

ویژگی FilterIt یک متد FilterIt را ارائه می دهد که می تواند برای اعمال فیلترها و مرتب سازی بر روی مدل شما استفاده شود. آن وقت می توانید
از این روش در کنترلر خود برای بازیابی نتایج فیلتر شده استفاده کنید:

```php
class UserController extends BaseController
{
    public function index(Request $request)
    {
        return User::FilterIt($request->query())->get();
    }
}
```
