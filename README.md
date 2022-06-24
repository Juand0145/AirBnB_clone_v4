# Airbnb clone.


[![Holbertonbnb logo](https://github.com/bdbaraban/holbertonbnb/raw/master/assets/hbnb-logo.png)](https://github.com/bdbaraban/holbertonbnb/blob/master/assets/hbnb-logo.png)

## [](https://github.com/bdbaraban/holbertonbnb/blob/master/README.md#description-house)Description  🏠

Holbertonbnb is a complete full-stack web application, integrating a MySQL database and Flask RESTful API with a dynamic HTML5/CSS3/jQuery front-end.

[![Holbertonbnb logo](https://github.com/bdbaraban/holbertonbnb/raw/master/assets/hbnb-stack.png)](https://github.com/bdbaraban/holbertonbnb/blob/master/assets/hbnb-stack.png)

### [](https://github.com/bdbaraban/holbertonbnb/blob/master/README.md#brennan-what-is-this-your-fourth-airbnb-repo)Brennan, what is this, your fourth Airbnb repo?

Fifth, actually  😅.

Holbertonbnb was the central web application of the Holberton School year one curriculum. The project spanned the course of two months and four versions, each of which you can view at the below links:

1.  [AirBnB_clone](https://github.com/Juand0145/AirBnB_clone)
2.  [AirBnB_clone_v2](https://github.com/Juand0145/AirBnB_clone_v2)
4.  [AirBnB_clone_v4](https://github.com/bdbaraban/AirBnB_clone_v4)

The above versions are separate, isolated codebases. While the first was started from scratch, each of versions 2, 3 and 4 involved inheriting and building on repositories started by previous cohorts at Holberton School. Additionally, the work completed for each version involved collaborating and pair programming with a cohort mate - I worked with a different cohort mate for each version.

This versioning process was a great experience in pair programming and working on unfamiliar, developed codebases. Yet, it was not so great from a portfolio perspective and the want of a central, organized repository where I could show off all the work I coded and learned over the course of this clone.

This repository is just the above - an organized, cleaned up version of Holbertonbnb. Call it a minified build, if you will.

I started this repository as a duplicate of  [AirBnB_clone_v4](https://github.com/Juand0145/AirBnB_clone_v4), the final version worked on within the scope of Holberton's curriculum. Since then, I have:

-   Cut out all irrelevant code, organizing just that needed to deploy the application.
-   Pieced together each of the front-end, back-end and API with strictly  _my_  code, copying in the personal implementations of each that I worked on across all four versions.
-   Spruced up the front-end and wrote new auto-deployment Puppet and Fabric scripts.
-   Wrote thorough, organized documentation for all parts of repo.

### What this repository does include:

-   Models class system built in Python.
    
    -   [Source code](https://github.com/Juand0145/AirBnB_clone_v4/tree/master/models)
    -   [Documentation](https://github.com/bdbaraban/holbertonbnb/blob/master/documentation/MODELS.md)
-   Python console to manage back-end models
    
    -   [Source code](https://github.com/bdbaraban/holbertonbnb/blob/master/console.py)
    -   [Documentation](https://github.com/bdbaraban/holbertonbnb/blob/master/documentation/CONSOLE.md)
-   Flask web application server rendering HTML templates with Jinja2
    
    -   [Source code](https://github.com/bdbaraban/holbertonbnb/blob/master/web_flask)
    -   [Documentation](https://github.com/bdbaraban/holbertonbnb/blob/master/documentation/WEB_FLASK.md)
-   RESTful Flask API
    
    -   [Source code](https://github.com/bdbaraban/holbertonbnb/blob/master/api)
    -   [Documentation](https://github.com/bdbaraban/holbertonbnb/blob/master/documentation/API.md)
    -   Swagger documentation -  [bdbnb.site/apidocs](https://bdbnb.site/apidocs)
-   Automatic deployment scripts.
    
    -   [fabfile.py](https://github.com/bdbaraban/holbertonbnb/blob/master/fabfile.py)
    -   [setup_server.pp](https://github.com/bdbaraban/holbertonbnb/blob/master/setup_server.pp)
    -   [Documentation](https://github.com/bdbaraban/holbertonbnb/blob/master/documentation/DEPLOYMENT.md)

### What this repository does not include:

-   Test suite

Unfortunately, the test suite did not hold up well over the course of four different codebases, and was a bit much to justifiably refactor for this minified repo. Which is too bad, because this project involved a significant amount of time spent developing an unittest test suite testing the entire back-end. If you're interested in looking at tests I was involved in writing, my most signficant test work occurred in  [AirBnB_clone](https://github.com/bdbaraban/AirBnB_clone).

## Dependencies  👫
Application:
| Tool/Library |Version |
|--|--|
| Python |^3.6.4 |
| MySQL|^5.6.0|
|Flask|^1.0.3|
|flasgger|^0.9.2|
|Flask-Cors|^3.0.8|
|mysqlclient|^1.3.10|
|SQLAlchemy|^1.3.5|

Deployment:

|Tool/Library|Version|
|--|--|
|Python|^3.7.3|
|gunicorn|^19.9.0|
|Fabric|^2.4.0|
|Puppet|^5.4.0|


# AirBnB Clone - The Console
The console is the first segment of the AirBnB project at Holberton School that will collectively cover fundamental concepts of higher level programming. The goal of AirBnB project is to eventually deploy our server a simple copy of the AirBnB Website(HBnB). A command interpreter is created in this segment to manage objects for the AirBnB(HBnB) website.

#### Functionalities of this command interpreter:
* Create a new object (ex: a new User or a new Place)
* Retrieve an object from a file, a database etc...
* Do operations on objects (count, compute stats, etc...)
* Update attributes of an object
* Destroy an object

## Table of Content
* [Environment](#environment)
* [Installation](#installation)
* [File Descriptions](#file-descriptions)
* [Usage](#usage)
* [Examples of use](#examples-of-use)
* [Bugs](#bugs)
* [License](#license)

## Environment
This project is interpreted/tested on Ubuntu 14.04 LTS using python3 (version 3.4.3)

## Installation
* Clone this repository: `git clone "https://github.com/alexaorrico/AirBnB_clone.git"`
* Access AirBnb directory: `cd AirBnB_clone`
* Run hbnb(interactively): `./console` and enter command
* Run hbnb(non-interactively): `echo "<command>" | ./console.py`

## File Descriptions
[console.py](console.py) - the console contains the entry point of the command interpreter. 
List of commands this console current supports:
* `EOF` - exits console 
* `quit` - exits console
* `<emptyline>` - overwrites default emptyline method and does nothing
* `create` - Creates a new instance of`BaseModel`, saves it (to the JSON file) and prints the id
* `destroy` - Deletes an instance based on the class name and id (save the change into the JSON file). 
* `show` - Prints the string representation of an instance based on the class name and id.
* `all` - Prints all string representation of all instances based or not on the class name. 
* `update` - Updates an instance based on the class name and id by adding or updating attribute (save the change into the JSON file). 

#### `models/` directory contains classes used for this project:
[base_model.py](/models/base_model.py) - The BaseModel class from which future classes will be derived
* `def __init__(self, *args, **kwargs)` - Initialization of the base model
* `def __str__(self)` - String representation of the BaseModel class
* `def save(self)` - Updates the attribute `updated_at` with the current datetime
* `def to_dict(self)` - returns a dictionary containing all keys/values of the instance

Classes inherited from Base Model:
* [amenity.py](/models/amenity.py)
* [city.py](/models/city.py)
* [place.py](/models/place.py)
* [review.py](/models/review.py)
* [state.py](/models/state.py)
* [user.py](/models/user.py)

#### `/models/engine` directory contains File Storage class that handles JASON serialization and deserialization :
[file_storage.py](/models/engine/file_storage.py) - serializes instances to a JSON file & deserializes back to instances
* `def all(self)` - returns the dictionary __objects
* `def new(self, obj)` - sets in __objects the obj with key <obj class name>.id
* `def save(self)` - serializes __objects to the JSON file (path: __file_path)
* ` def reload(self)` -  deserializes the JSON file to __objects

#### `/tests` directory contains all unit test cases for this project:
[/test_models/test_base_model.py](/tests/test_models/test_base_model.py) - Contains the TestBaseModel and TestBaseModelDocs classes
TestBaseModelDocs class:
* `def setUpClass(cls)`- Set up for the doc tests
* `def test_pep8_conformance_base_model(self)` - Test that models/base_model.py conforms to PEP8
* `def test_pep8_conformance_test_base_model(self)` - Test that tests/test_models/test_base_model.py conforms to PEP8
* `def test_bm_module_docstring(self)` - Test for the base_model.py module docstring
* `def test_bm_class_docstring(self)` - Test for the BaseModel class docstring
* `def test_bm_func_docstrings(self)` - Test for the presence of docstrings in BaseModel methods

TestBaseModel class:
* `def test_is_base_model(self)` - Test that the instatiation of a BaseModel works
* `def test_created_at_instantiation(self)` - Test created_at is a pub. instance attribute of type datetime
* `def test_updated_at_instantiation(self)` - Test updated_at is a pub. instance attribute of type datetime
* `def test_diff_datetime_objs(self)` - Test that two BaseModel instances have different datetime objects

[/test_models/test_amenity.py](/tests/test_models/test_amenity.py) - Contains the TestAmenityDocs class:
* `def setUpClass(cls)` - Set up for the doc tests
* `def test_pep8_conformance_amenity(self)` - Test that models/amenity.py conforms to PEP8
* `def test_pep8_conformance_test_amenity(self)` - Test that tests/test_models/test_amenity.py conforms to PEP8
* `def test_amenity_module_docstring(self)` - Test for the amenity.py module docstring
* `def test_amenity_class_docstring(self)` - Test for the Amenity class docstring

[/test_models/test_city.py](/tests/test_models/test_city.py) - Contains the TestCityDocs class:
* `def setUpClass(cls)` - Set up for the doc tests
* `def test_pep8_conformance_city(self)` - Test that models/city.py conforms to PEP8
* `def test_pep8_conformance_test_city(self)` - Test that tests/test_models/test_city.py conforms to PEP8
* `def test_city_module_docstring(self)` - Test for the city.py module docstring
* `def test_city_class_docstring(self)` - Test for the City class docstring

[/test_models/test_file_storage.py](/tests/test_models/test_file_storage.py) - Contains the TestFileStorageDocs class:
* `def setUpClass(cls)` - Set up for the doc tests
* `def test_pep8_conformance_file_storage(self)` - Test that models/file_storage.py conforms to PEP8
* `def test_pep8_conformance_test_file_storage(self)` - Test that tests/test_models/test_file_storage.py conforms to PEP8
* `def test_file_storage_module_docstring(self)` - Test for the file_storage.py module docstring
* `def test_file_storage_class_docstring(self)` - Test for the FileStorage class docstring

[/test_models/test_place.py](/tests/test_models/test_place.py) - Contains the TestPlaceDoc class:
* `def setUpClass(cls)` - Set up for the doc tests
* `def test_pep8_conformance_place(self)` - Test that models/place.py conforms to PEP8.
* `def test_pep8_conformance_test_place(self)` - Test that tests/test_models/test_place.py conforms to PEP8.
* `def test_place_module_docstring(self)` - Test for the place.py module docstring
* `def test_place_class_docstring(self)` - Test for the Place class docstring

[/test_models/test_review.py](/tests/test_models/test_review.py) - Contains the TestReviewDocs class:
* `def setUpClass(cls)` - Set up for the doc tests
* `def test_pep8_conformance_review(self)` - Test that models/review.py conforms to PEP8
* `def test_pep8_conformance_test_review(self)` - Test that tests/test_models/test_review.py conforms to PEP8
* `def test_review_module_docstring(self)` - Test for the review.py module docstring
* `def test_review_class_docstring(self)` - Test for the Review class docstring

[/test_models/state.py](/tests/test_models/test_state.py) - Contains the TestStateDocs class:
* `def setUpClass(cls)` - Set up for the doc tests
* `def test_pep8_conformance_state(self)` - Test that models/state.py conforms to PEP8
* `def test_pep8_conformance_test_state(self)` - Test that tests/test_models/test_state.py conforms to PEP8
* `def test_state_module_docstring(self)` - Test for the state.py module docstring
* `def test_state_class_docstring(self)` - Test for the State class docstring

[/test_models/user.py](/tests/test_models/test_user.py) - Contains the TestUserDocs class:
* `def setUpClass(cls)` - Set up for the doc tests
* `def test_pep8_conformance_user(self)` - Test that models/user.py conforms to PEP8
* `def test_pep8_conformance_test_user(self)` - Test that tests/test_models/test_user.py conforms to PEP8
* `def test_user_module_docstring(self)` - Test for the user.py module docstring
* `def test_user_class_docstring(self)` - Test for the User class docstring


## Examples of use
```
vagrantAirBnB_clone$./console.py
(hbnb) help

Documented commands (type help <topic>):
========================================
EOF  all  create  destroy  help  quit  show  update

(hbnb) all MyModel
** class doesn't exist **
(hbnb) create BaseModel
7da56403-cc45-4f1c-ad32-bfafeb2bb050
(hbnb) all BaseModel
[[BaseModel] (7da56403-cc45-4f1c-ad32-bfafeb2bb050) {'updated_at': datetime.datetime(2017, 9, 28, 9, 50, 46, 772167), 'id': '7da56403-cc45-4f1c-ad32-bfafeb2bb050', 'created_at': datetime.datetime(2017, 9, 28, 9, 50, 46, 772123)}]
(hbnb) show BaseModel 7da56403-cc45-4f1c-ad32-bfafeb2bb050
[BaseModel] (7da56403-cc45-4f1c-ad32-bfafeb2bb050) {'updated_at': datetime.datetime(2017, 9, 28, 9, 50, 46, 772167), 'id': '7da56403-cc45-4f1c-ad32-bfafeb2bb050', 'created_at': datetime.datetime(2017, 9, 28, 9, 50, 46, 772123)}
(hbnb) destroy BaseModel 7da56403-cc45-4f1c-ad32-bfafeb2bb050
(hbnb) show BaseModel 7da56403-cc45-4f1c-ad32-bfafeb2bb050
** no instance found **
(hbnb) quit
```
