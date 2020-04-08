# Dependency Injection in Typescript

[Dependency inversion](https://en.wikipedia.org/wiki/Dependency_inversion_principle) is a complicated topic. This repo explores the most common, simple issue as it relates to software development.

## Build

```shell
yarn
yarn build
```

## No dependency injection

In `src/noDI`.

```shell
yarn start:noDI
```

This is our starting point. Just a couple of classes with dependencies created in the constructors.

## Mutator dependency injection

In `src/mutatorDI`.

```shell
yarn start:mutatorDI
```

DI enabled only by calling setters.

## Constructor dependency injection

In `src/constructorDI`.

```shell
yarn start:constructorDI
```

DI enabled by passing parameters to constructors.

## Simple dependency injection driven by an inversion of control container

In `src/simpleDI`.

```shell
yarn start:simpleDI
```

This moves the dependency setup to another module to encapsulate the inversion of control logic. This technique is often referred to as a "container", though that term most often applies to larger DI frameworks.

## Dependency injection using the Inversify framework

In `src/InversifyDI`.

```shell
yarn start:InversifyDI
```

Demonstrates a naïve use of [Inversify][inversify] for dependency injection. This appears to be one of the more popular frameworks, but hasn't seen much recent activity.

[inversify]: http://inversify.io/
