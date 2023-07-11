# Installation

You can install FilterIt via composer:

```bash
composer require filterit/filterit-laravel
```

## Usage

To use the FilterIt, you first need to add the FilterIt trait to your Laravel model:

```php
use FilterIt/FilterIt;
class User extends Authenticatable
{
    use FilterIt;
    ...
}

```

The FilterIt trait provides a FilterIt method that can be used to apply filters and sorts to your model. You can then
use this method in your controller to retrieve filtered results:

```php
class UserController extends BaseController
{
    public function index(Request $request)
    {
        return User::FilterIt($request->query())->get();
    }
}
```
