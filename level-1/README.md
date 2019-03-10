# Welcome to Full Stack - Level 1

## Objectives

* Given the API: https://jsonplaceholder.typicode.com/users create a webpage that displays user data
* Only allow the user to select from a subset of the available keys from a dropdown
* The dropdown has to be dynamically populated on page load
* Display the user's name + value of the selected key in a table
* Correctly handle values of keys which are not strings (i.e. Address)
* Project must be source controlled

<br />

## Bonus Objectives

* Instead of using the given API, implement a RESTful API that serves the same data
* Serve application in a Docker container using the Nginx Image
* Instead of a single field, allow users to select multiple keys

<br />

## Notes

### Serving the web page via Nginx + Docker

Create a nginx.conf and set the port and root. The root directive specifies the root directory that will be used to search for a file. Here we're setting up our Nginx server to listen on port 80 of our Docker container and serving our files from /app:

``` nginx
  server {
    listen       80;
    server_name  localhost;
    location / {
      root   /app;
      index  index.html;
      try_files $uri $uri/ /index.html;
    }
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
      root   /usr/share/nginx/html;
    }
  }
```

Create a simple Dockerfile. We're using the latest nginx image from Docker Hub, setting our WORKDIR to /app and copying all files in the current directory to /app in the container. Lastly, copy the nginx.conf we created in the previous step to /etc/nginx/nginx.conf:


``` docker
FROM nginx:latest
WORKDIR /app
COPY . .
COPY nginx.conf /etc/nginx/nginx.conf
```

Create a shell script that will allow us to quickly rebuild and restart our image whenever we make changes:

``` bash
# Kill the container
docker kill level-1

# Remove the container
docker rm level-1

# Remove the image
docker rmi full-stack-development/level-1 

# Build the image
docker image build  -t full-stack-development/level-1 .

# Run the container, map port 8089 of host machine to port 80 of container
docker container run -d -p 8089:80 --name level-1 full-stack-development/level-1 

# Display running containers
docker ps 

```

