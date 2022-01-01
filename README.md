# DistroAPI
![Tux the penguin](https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/249px-Tux.svg.png)


# Table of Contents
- [About](#about)
- [Technologies](#technologies)
- [Development Setup](#dev-setup)


## About
DistroAPI is an open source REST API for users to find information on many different Linux distributions.

### Routes
|Route          |HTTP Methods|Descriptions
|---------------|------------|-----------------------------------------------|
|/distros       |GET         |Displays all distros                           |
|/distros       |POST        |Adds new distro                                |
|/distros/:name |GET         |Displays distro with specified name            |
|/distros/:name |PUT         |Edits distro with specified name's information |
|/distros/:name |DELETE      |Deletes distro with specified name             |


## Technologies
This project was created with the following technologies:\
![node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![mongodb](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

- Node.JS (v16.13.1)
- Express.JS (v4.17.2)
- MongoDB (v5.0.5)


## Development Setup
First clone the repository
```git clone https://github.com/braedenkinggg/DistroAPI```

Then navigate to the project directory and install the dependencies
```
cd DistroAPI
npm install
```

Next add a ```.env``` file to the projects root directory

Add this to the ```.env``` file if you plan on using MongoDB locally
```
MONGO_URI=mongodb://localhost:27017/databaseName
```

Otherwise add this replace this example URI with the URI to your atlas cluster
```
MONGO_URI=mongodb+srv://username:password@cluster0.example.mongodb.net/database_name
```

And finally start the server
```
npm start
or
npm run dev
```