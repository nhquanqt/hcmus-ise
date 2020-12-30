# hcmus-ise

## Installation
Build dockerfile
```
./build_docker.sh
```
Run image
```
./run.sh
```
Execute container
```
./exec.sh
```
To remove all the docker
```
./uninstall.sh
```

Note: Use `sudo` for root request

## Start server
After exec to container bash, move to `/project/` directory, then run `npm start`

Note: If you encounter any error because of module missing, please run `npm install express body-parser cors --save` (there would be more modules required in the future).
