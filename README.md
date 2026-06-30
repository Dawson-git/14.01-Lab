# CS208 Full Stack Final Project - Donut Shop Application

- Name: DawsonvGardels
- GitHub: [https://github.com/Dawson-git/14.01-Lab](https://github.com/Dawson-git/14.01-Lab)
- Term: Spring 2026

## Project Description

A prototype website for Downtown Donuts. Built with Node.js. This website is for a small donut shop that allows users to read about the shop, view the menu, and see comments from other users. The site is built to be semi-modular, with the ability to easily add new menu items in the backend code. The backend is built with Express, and the comments feature uses a MariaDB SQL database to store and retrieve customer comments. All CSS styling is written by hand and does not use any frameworks. Please read the following instructions carefully because some of the setup only needs to be done once.


## Edge Cases

1. What happens if the server/API is unreachable? (The UI should display a friendly
message, not break.) We handle this edge case by sending out an message that says we could not load the comments but all pages are sill acessible.
2. What happens if a user submits a comment with only whitespace? There is an error that says to please enter something into the text box.
3. What happens if a user submits extremely long input (e.g., 10,000 characters)? there is a message that appears becuase we have both in our sql table and javascript to limit the length of the inputs.
4. What happens if the user rapidly double-clicks the submit button? The sql table handles duplicate inputs.

## Install the Database

To set up the database, run the `install_db.sh` script in the setup_scripts
directory. This script will install MariaDB and start the server running. You
only need to run this script once per Codespace.

```bash
./setup_scripts/install_db.sh
```

## Create the Database Tables

Create the initial tables by running the following command:

```bash
sudo mysql -u root -p < ./setup_scripts/create_tables.sql

## Install Dependencies

Install the required dependencies using npm:

```bash
npm install
```

## Run the Application

Start the application using the following command:

```bash
npm start
```

## Access the Application

On Codespaces, you can access the application by forwarding port 3000. Open the
forwarded port in your browser to view the application.
