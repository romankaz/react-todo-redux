# Build Docker Image

In the project durectory, you can run:

### `docker build -f .\Dockerfile.prod -t my-first-image:latest .`

# Run Docker Image

Execute the following command in order to run docker image on Port 80:

### `docker run -it -p 80:80 --rm my-first-image:latest`

# Test Application 

Open http://localhost to view it in the browser.