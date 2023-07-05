From python:3.8.16

ENV PYTHONUNBUFFERED 1

RUN apt-get -y update
RUN apt-get -y install vim

RUN mkdir /back
COPY . /back

WORKDIR /back

RUN pip install --upgrade pip
RUN pip install -r requirements.txt

EXPOSE 8000
# CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "back.wsgi:application"]
