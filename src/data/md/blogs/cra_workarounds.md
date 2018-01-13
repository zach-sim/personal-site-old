---
title: Workarounds for CRA projects
url: CRA-workarounds
wip: true
date: 2018-01
---

# Workarounds for CRA projects

Sometimes while developing your react application using CRA you get to a stage where you need to utilise more specific configuration.

## react-app-rewired

This allows you to modify your webpack config without ejacting from CRA.

## Webpack loaders

You're able to use custom webpack loaders as needed just by using `import function from 'loader!path_to_file';`
