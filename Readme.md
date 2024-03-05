# Ticketing Project

This project is a ticketing application built using microservices architecture, Docker, and Kubernetes.

## Overview

The ticketing project aims to create a scalable and robust ticketing system using microservices. The system allows users to buy, sell, and manage tickets for various events.

## Technologies Used

- **Microservices**: The application is built using a microservices architecture to decouple different functionalities and ensure scalability and maintainability.
- **Docker**: Docker is used to containerize each microservice, enabling easy deployment and scaling across different environments.
- **Kubernetes**: Kubernetes is used for orchestrating and managing the containers in a production environment, providing features like scaling, load balancing, and self-healing.
- **Node.js**: Node.js is used as the primary runtime environment for building the backend services.
- **Express.js**: Express.js is used as the web application framework for Node.js, providing a robust set of features for building web applications and APIs.
- **MongoDB**: MongoDB is used as the database to store ticket and user information.
- **NextJs**: Nextjs is used for building the frontend user interface, providing a responsive and interactive experience for users.

## Architecture

The ticketing application consists of several microservices, each responsible for a specific functionality:

1. **Auth Service**: Handles user authentication and authorization.
2. **Ticket Service**: Manages ticket creation, listing, and updating.
3. **Order Service**: Handles the creation and management of ticket orders.
4. **Payment Service**: Processes payment transactions for ticket orders.
5. **Expiration Service**: Manages the expiration of orders and releases tickets back into the pool.
6. **Frontend**: Provides the user interface for browsing and purchasing tickets.

