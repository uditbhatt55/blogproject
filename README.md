# Django Blog Project

This is a comprehensive Django-based blog project. It includes functionalities for managing blog posts and more.

## Features
- Create, Read, Update, Delete (CRUD) blog posts.
- User management and authentication.
- API endpoints using Django Rest Framework (if configured).

## Local Development Setup

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
You can view the local project by going to http://127.0.0.1:8000/

## Deployment on Render

This project is configured to be uploaded and hosted on Render. 

### Deployment Steps
1. Connect your GitHub repository to Render by creating a new **Web Service**.
2. **Build Command**: Use the following command to install dependencies and run migrations:
   ```bash
   pip install -r requirements.txt && python manage.py collectstatic --noinput && python manage.py migrate
   ```
   *(Note: ensure you have a `requirements.txt` generated before deployment)*
3. **Start Command**: Use `gunicorn` to start the application (you may need to add `gunicorn` to your requirements):
   ```bash
   gunicorn blogproject.wsgi:application
   ```
4. **Environment Variables**: Make sure to set the following variables in your Render dashboard under the Environment section:
   - `PYTHON_VERSION` (e.g., `3.10.0`)
   - `SECRET_KEY` (Your Django secret key)
   - `DEBUG` (Should be set to `False` in production)

Once deployed, you can access the live application via your designated `.onrender.com` URL.

## Project Structure
- `blogproject/` - Project configuration folder
- `blogapp/` - Main blog application folder
- `manage.py` - Django project management script
