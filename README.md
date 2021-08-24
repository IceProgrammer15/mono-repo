# Monorepo : A Comparison

### Presentation slides: [https://docs.google.com/presentation...](https://docs.google.com/presentation/d/1hOWR0X3EFlzqHfbYEBS493rEyXoRGCmBTiuc-69Ilk4/edit?usp=sharing)

## Lerna:

### Bootstrap
```
npx lerna bootstrap
```
### Start Web
```
npx lerna run --scope=@ali/web start
```
### Build lib1
```
npx lerna run --scope=@ali/lib1 build
```


## Nx:

### Bootstrap
```
npm install
```

### Build lib1 & lib2
```
nx build lib1
```

### Start web and watch for changes
```
nx serve web
```

## Rush:
### Bootstrap
```
rush install
```

### Build
```
rush build
```

### Build and watch for changes up TO @ali/web project 
```
rush build:watch --to-except @ali/web
#or
rush build:watch -T @ali/web
```