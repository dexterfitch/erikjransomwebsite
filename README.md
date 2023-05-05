# What is Django?
## A full stack web framework!

<br />

## Why Django?
- It's the most popular python web framework
    - Mega sites like Youtube, Instagram, and Spotify use Django
- Comes with a built-in admin interface
- Object-relational mapper (ORM)
    - Abstracts the database so we can query and persist data without writing SQL
- Authentication Package
- Built-in Database Handling with SQLite
- Plus a giant community!
-------------------------------------------------
## SETUP ENVIRONMENT (WINDOWS)
First, open Powershell by running it as an administrator

### Make sure you have Python installed
BIG NOTE: Depending on your version of Python your command for python may be `python` or `py`. I will be using `py` for this documentation. You may or may not need the `py -m` prefix before your `pip` and `pipenv` commands, experiment to see what works!
- Type `py --version` to see if you have python already
- If not, get it from [https://www.python.org/downloads/](https://www.python.org/downloads/)
### Make sure pip is installed: 
```
py -m pip --version
```
### Install pipenv:
```
py -m pip install pipenv
```
### To verify:
```
py -m pipenv --version
```
### Install Django: 
```
py -m pip install Django
```
### To verify:
```
py -m django --version
```

-------------------------------------------------

## INSTALLING THE DJANGO PROJECT
- Create a working directory, and CD into it
- Start a Django project: 
```
py -m pipenv install django
```

- In the main project folder terminal, to begin working in that virtual environment, run:

```
py -m pipenv shell
```
- Next, to begin working on the project, run:
```
django-admin startproject petsproject .
``` 
- Django-admin should have created a directiory called `petsproject` now
- We also now have a `manage.py` file, which will contain all of our settings relating to our project
- To start the Django server and confirm for us that it is working, run:
```
py manage.py runserver
```
- To display the location of local virtual environment, run:
```
py -m pipenv --venv
```
- Copy that local address now to your clipboard
- Close the server with CTRL+C and open VSCode with `code .`

-------------------------------------------------

## VSCODE
- Install the Python extension for VSCode
- Using the control palette in VScode (CTRL+Shift+P), search for `Python: Select Interpreter`
    - Click "Enter interpreter path" and paste the path you copied earlier for your local environment
- Open VSCode Terminal
- Run `py manage.py runserver` to make sure it's working

-------------------------------------------------

## STARTING THE PROJECT
Let's take a look at the settings.py file
- `INSTALLED_APPS`
    - Shows all the apps that come pre-packaged with a Django project
    - Comment out the sessions app
- Open a new VSCode terminal
- Run: 
```
py manage.py startapp petsapp
```
- Now we should see a new directory called petsapp has been created
    - The files in this new directory should start to look familiar! 
    - We see models, views, tests, etc! But it's still a little different than what we might be expecting. We'll get into that soon.
- Go back to the `settings.py` file, and make sure you register the new `'petsapp'` in the `INSTALLED_APPS`. It should look like this now:
```
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    # 'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'petsapp',
]
```

-------------------------------------------------

## SETTING UP THE VIEWS
Views in this case, unlike the front end, might be better described as our "Request Handler", what we might call the Controller in Java and Rails backends

In `views.py` add an import to get the response class:
```
from django.http import HttpResponse
```

And then add the following function:
```
def say_hello(request):
    return HttpResponse('Hello World!')
```
-------------------------------------------------

## SETTING UP THE ENDPOINTS
Next, we will need to Map URLs to our View Methods

- Create a new file in the `petsapp` folder
     - It can technically be called anything, but by convention, lets call it `urls.py`
- At the top of the urls.py file, add:
```
from django.urls import path
from . import views
```
- Next, we'll create a special variable named `urlpatterns` - the name is important, because this is what Django is configured to look for by default
- Set this variable to an array, and inside the array, we will create `path` objects:
```
    urlpatterns = [
        path()
    ]
```
- The first argument to the path function is the endpoint string we want to access on the server
- The second argument is the response action from the views file we want to associate with this endpoint
```
urlpatterns = [
    path('hello/', views.say_hello)
]
```
- This is called a "URLConf" or a URL Configuration. 
- We will need to add a reference to this endpoint in the petsproject's urls.py file as well. Let's open that up.
- Add `, include` to the end of `from django.urls import path` so it reads:
```
from django.urls import path, include
```
- Then, in the petsproject's `urls.py` `urlpatterns` array, add:
```
path('petsapp/', include('petsapp.urls'))
```
- Now, when our server is running and we access localhost:8000/petsapp/hello, we should see the string `Hello World!` displayed
-------------------------------------------------

## SETTING UP TEMPLATES
Now this is where it gets a little confusing. What we normally think of as views, in the front-end sense, are called templates in Django.

BIG NOTE: people don't generally use the templating system in Django anymore, with modern best practice being that the back-end server should only serve data to the front end, not HTML, but let's play for a bit anyway!

- Inside of the `petsapp` folder, we will create a folder called `templates`
    - Inside that `templates` folder, add a new file called `hello.html`, and stub it out with a simple:
```
<h1>HEY HEY World!</h1>
```
- Now let's go back to our `views.py` file, to change the response to serve this template instead of our little string!
- Notice that we are importing a function `render` from the `shortcuts` class
- This will allow us to render the python+HTML templates to be served to the front-end
- The render method takes in at least two arguments, the first being the request, and the second being the template name in string form
```
def say_hello(request):
    return render(request, 'hello.html')
```
- Go back to the browser, refresh the page, and see that the changes have been made
- Now, we can go back to `views.py`, and see if we can make our response a little more dynamic and interesting
    - Let's add a python dictionary as a third argument. This is also called a hashmap in Java, or an object in JavaScript
```
def say_hello(request):
    return render(request, 'hello.html', {'name': 'Dex'})
```
- Return to our template, `hello.html`, and modify to take in that `name` parameter, very similar to how we would in React. Note the double curly braces!
```
<h1>HEY HEY {{name}}!</h1>
```
    - Much like React components, we can also add some logic to this template:
```
{% if name %}
<h1>HEY HEY {{name}}!</h1>
{% else %}
<h1>HEY HEY World!</h1>
{% endif %}
```
-------------------------------------------------

## SETTING UP MODELS
- Let's start with one model, such as a Pet.
- Let's also plan what properties a Pet will have: a name, an age, a species, and a breed
    - Django will automatically add the "id" property to our models for us
- Models in Django are much the same a models in other backend applications, and as such are a blueprint for the data objects that will be mapped to a database table and stored.
- Open models.py, and create a new class:
```
class Pet(models.Model):
```
- Next, we will declare the properties for this class, and also the datatypes:
```
class Pet(models.Model):
    name = models.CharField(max_length=500)
    age = models.IntegerField()
    species = models.CharField(max_length=50)
    breed = models.CharField(max_length=200)
```
-------------------------------------------------

## SETTING UP MIGRATIONS
Django comes packaged with SQLite, which is perfectly fine database to use while learning or creating very small applications. Ideally, we would be wiring our Django up with a more robust database system like MySQL or Postgres, but for the purposes of this Demo and in the interest of keeping it simple, we're going to stick with SQLite.

### What is a migration? 
A migration is a configured file that sends commands to a database to create tables and fields for our data that maps to our models.
If we look at our server terminal, we should see messages about unapplied migrations. These migrations are for Django's built in models, not the model that we have just created. Let's go ahead and run those migrations now.
- Exit the server, and run: 
```
py manage.py migrate
```
- To migrate our own classes, we first need to create a migration file for our class
- In the console:
```
py manage.py makemigrations
```
- Notice how it was auto-wired to check the `models.py` file, and new to create a new migration for our new Pet class. It generated a new file in the `petsapp\migrations` folder.
- Let's take a look at that file. Notice how it automatically added that ID field for us.
- Now all we have to do is migrate this file, with the same command as before: 
```
py manage.py migrate
```
- Our new class just had a new table added to this project's database!
- Notice our db.sqlite3 file now!
- Let's install DB Browser for SQLite: [https://sqlitebrowser.org/](https://sqlitebrowser.org/) and open that file in the application
-------------------------------------------------

## MAKING AN API
We can experiment with our queries first in a shell.
- In the terminal, run: 
```
py manage.py shell
``` 
- Next, import our model to the interactive shell with: 
```
from petsapp.models import Pet
```
- You can test that import ran correctly by entering: `Pet` and seeing that we should have a class returned
- To retrieve all of the Pet objects in our database, we can use the command: 
```
Pet.objects.all()
``` 
- We should see an empty QuerySet returned to us, because we have not added any pets yet to our database!
- Let's make one now. Create an instance of the pet class by entering: 
```
pet = Pet()
``` 
- Now when we access `pet`, we should see it has returned an object instance of the Pet class, but it has no properties yet. Let's fill them out!
```
pet.name = "Bambi"
pet.age = 13
pet.species = "Dog"
pet.breed = "Toy Poodle"
```
- To save those properties to the database, let's use the command: 
```
pet.save()
```
- Run 
```
Pet.objects.all()
``` 
- Now, we can see that there is one pet object saved.
- Let's take a look in DB Browser too!
- Notice however that the returned QuerySet doesn't give us much information, just states that there is 1 "object". We can improve how that looks with a little function added to our models.py Pet class:
```
def __str__(self):
    return self.name
```
- Now when we access pet objects, it should display the pet's name! Let's try. Exit the interactive shell with CTRL-Z, and then open it again:
```
py manage.py shell
from petsapp.models import Pet
Pet.objects.all()
```
- Let's close the shell now and get this API online!
- Remember our views.py file? Let's go back there and add this to the top of the file now:
```
from django.core import serializers
from django.http import JsonResponse
from .models import Pet
```
- Let's also create a new function:
```
def get_all_pets(request):
    all_pets = Pet.objects.all()
    all_pets_json = serializers.serialize('json', all_pets)
    return JsonResponse(all_pets_json, safe=False)
```
- We also have to go and edit our urls.py file, and add a new endpoint:
```
path('pets/', views.get_all_pets)
````
- Now let's access our end point: [http://127.0.0.1:8000/petsapp/pets/](http://127.0.0.1:8000/petsapp/pets/) - it works!
-------------------------------------------------

## USING DJANGO ADMIN
- We can access the Django admin panel by going to [http://127.0.0.1:8000/admin/](http://127.0.0.1:8000/admin/), where we will be prompted to enter a username and password - but we haven't created one yet!
- Go back to the terminal, and shut down the server
- To create a new user (a SUPER!user in fact) for the admin panel, we will use this command:
```
py manage.py createsuperuser
```
- At this stage, we will be prompted to enter a username, email, and password
    - Note: Entering the email is optional
- Once our username and password are created, we should be able to login!
-Let's spin up our server again with:
```
py manage.py runserver
```
- After we login, we are directed to the Admin Panel. This is really a CMS (Content Management System), and similar in many regards to other CMS like Wordpress
- Notice however that our Pet instances aren't here - we need to register them first.
- Back in VSCode, let's open the `admin.py` file inside of the `petsapp` folder
- First, let's import the Model for Pets; at the top, add:
```
from .models import Pet
```
- Then, below the import, register the Pet model by adding:
```
admin.site.register(Pet)
```
- Now, back in the admin section of our application, we should now see the Pet model listed, as well as all of our instances of the Pet model which live in our Database!

# Hey, we did it!  🎈🐍
