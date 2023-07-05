From python:3.8.10

ENV PYTHONUNBUFFERED 1

RUN mkdir /app
COPY . /app

WORKDIR /app

RUN pip install --upgrade pip
RUN pip install -r requirements.txt

EXPOSE 8000

CMD ["gunicorn", "--bind", "0.0.0.0:8000", "stock.wsgi:application"]