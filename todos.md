## docker addition

### ~~volume mounting: try to to setup local change should reflect chnages while running with docker on local~~

### docker multi stage builds

### docker networking: bridge, host, none

## optimization things possible on docker:

### 1. choose lightweight minimal base image like slim or alpine images

### 2. layer caching : order of each docker layer matters

### 3. use dockerignore file

### 4. multi stage build to only get final stage in the image and other stages will get deleted after their work
