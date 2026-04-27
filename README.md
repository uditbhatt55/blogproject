# Django Blog Project

This is a comprehensive Django-based blog project. It includes functionalities for managing blog posts and more.

## Features
- Create, Read, Update, Delete (CRUD) blog posts.
- User management and authentication.
- API endpoints using Django Rest Framework (if configured).

## Getting Started

### Prerequisites
- Python 3.x
- Django 5.x+
- Django REST Framework (if applicable)

### Installation
1. Clone the repository to your local machine.
2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/Scripts/activate  # On Windows
   ```
3. Install dependencies:
   ```bash
   pip install django djangorestframework django-cors-headers
   ```
4. Run migrations:
   ```bash
   python manage.py migrate
   ```
5. Start the development server:
   ```bash
   python manage.py runserver
   ```

### Running the server
You can view the project by going to http://127.0.0.1:8000/

## Project Structure
- `blogproject/` - Project configuration folder
- `blogapp/` - Main blog application folder
- `manage.py` - Django project management script
