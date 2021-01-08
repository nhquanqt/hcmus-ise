FROM mysql

# Update
RUN apt-get update

# Install nodejs
RUN apt-get install -y nodejs
# Install npm
RUN apt-get install -y npm
# Install modules
RUN npm install express sequelize mysql2 cors body-parser
RUN npm install react react-router-dom bootstrap axios