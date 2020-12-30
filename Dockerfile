FROM mysql

# Update
RUN apt-get update

# Install nodejs
RUN apt-get install -y nodejs
# Install npm
RUN apt-get install -y npm
