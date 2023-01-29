# typescript-tutorial

<!-- TOC -->
* [typescript-tutorial](#typescript-tutorial)
  * [Sources](#sources)
  * [How to](#how-to)
    * [Install and configure the project](#install-and-configure-the-project)
      * [Install Typescript](#install-typescript)
        * [In your project](#in-your-project)
        * [Globally](#globally)
      * [Install the project](#install-the-project)
<!-- TOC -->

## Sources

- [Udemy course](https://www.udemy.com/course/understanding-typescript/)
- [Typescript main page](https://www.typescriptlang.org/)

## How to

Each section/chapter of the course has been converted in a dedicated branch. Checkout the branch you want to develop/read by following the provided TOC:

### Project's TOC
1. [Main branch](https://github.com/zankyr/typescript-tutorial): the entry point of the project
2. [Section 1: Getting started](https://github.com/zankyr/typescript-tutorial/tree/section-1-installing-ts)

### Install and configure the project
#### Install Typescript
##### In your project

1. First install [Node.js](https://nodejs.org/en/)
2. Then run the following command:
   ```shell
   npm install typescript --save-dev
   ```
3. You can try the Typescript compiler with this command:
   ```shell
   npx tsc
   ```

##### Globally

A global installation allows you

- to install Typescript once, so you don't have to replicate the installation project-wide for each of your projects;
- to run the `tsc` command directly, without calling `npx`

To execute a global installation:

1. Run the command
   ```shell
   npm install -g typescript
   ```

#### Install the project
1. Checkout this repository
2. Run `npm install` to install the project dependencies
3. Run `npm start` to start `lite-server`
4. Run `tsc <FILE>`, where `<FILE>` is the Typescript file you're working on, to compile the file and notify `lite-server` about the changes, so the HTML file can be automatically udpated