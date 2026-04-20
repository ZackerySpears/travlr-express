CS 465 Full Stack Development Reflection

Zackery Spears

Architecture

In this full stack project, I used multiple types of frontend development. The customer-facing side of the application used Express with HTML, CSS, JavaScript, and Handlebars templates. This approach worked well for the public website because the pages were rendered on the server and delivered as complete views to the browser. I used routes, controllers, views, and models in an MVC structure to organize that part of the application. Later in the project, I built the admin side as a single-page application using Angular. The Angular SPA was more dynamic because it allowed the browser to update content without reloading the whole page. It used reusable components, services, and TypeScript to build a more interactive experience for managing trip data.

The Express customer-facing site and the Angular admin SPA both served important roles, but they worked differently. The Express site was better for public-facing pages and template-driven rendering, while the Angular SPA provided a richer user experience for administration because it could retrieve and update data through API calls in real time. This showed me the difference between server-rendered applications and client-rendered single-page applications.

The backend used a NoSQL MongoDB database because it worked well with the flexible, document-based data structure of this project. MongoDB stores data in JSON-like documents, which made it a strong fit for trip data and user data in this application. It also integrated well with Node.js and Mongoose, allowing me to create schemas, models, and validation more efficiently than with a more rigid relational structure.

Functionality

JSON is different from JavaScript because JSON is a data format, while JavaScript is a programming language. JSON is used to store and exchange structured data, while JavaScript includes logic, variables, functions, and application behavior. In this project, JSON tied together the frontend and backend because the backend API returned trip data in JSON format, and the Angular frontend consumed that JSON to display trips, edit them, and add new ones. This made JSON the shared format that allowed the different parts of the application to communicate.

Throughout the full stack process, I refactored code several times to improve functionality and efficiency. One important example was refactoring the original static HTML pages into Handlebars templates using MVC. This made the public site cleaner and easier to maintain. Another example was moving trip data from a static JSON file into MongoDB and then creating REST API endpoints so the application could retrieve live data instead of hardcoded values. I also refactored the admin interface into Angular components such as the trip list, trip card, and trip form. This improved the organization of the code and made the interface more reusable.

Reusable UI components provided several benefits. They reduced duplication, made updates easier, and helped keep the application consistent. For example, a single trip card component could display multiple trips without rewriting the same code over and over. This made the application more modular and easier to expand in the future.

Testing

In this project, I learned that methods, endpoints, and security all play important roles in a full stack application. Methods such as GET, POST, PUT, and DELETE each serve a different purpose in CRUD functionality. GET retrieves data, POST creates new records, PUT updates existing records, and DELETE removes records. Endpoints are the URLs that connect these methods to the backend logic, such as /api/trips or /api/trips/:tripId. Together, methods and endpoints define how the frontend and backend communicate.

I used multiple ways to test the API endpoints. I tested GET routes in the browser and tested POST, PUT, and DELETE routes in Postman. Postman was especially useful because it allowed me to send JSON request bodies, include authorization headers, and verify the status codes and returned data. As the application became more secure, testing became more complex because protected routes required a valid JWT token. I had to verify that requests without a token were rejected with unauthorized responses and that requests with a valid token succeeded. This helped me better understand how authentication and authorization work in a secure full stack system.

Security added an important extra layer to testing. Once login and token-based authentication were added, the admin CRUD endpoints had to be tested both with and without a token. This showed me that security is not just about creating a login form, but also about protecting backend routes and making sure only authorized users can perform sensitive actions.

Reflection

This course has helped me move closer to my professional goals by giving me practical experience building a complete full stack web application. Before this course, I had experience with coding concepts and smaller projects, but this course helped me understand how all the pieces of a real full stack application work together. I gained experience with Express, Handlebars, MongoDB, Mongoose, REST APIs, Angular, Postman, and JWT authentication. I also learned how to structure an application using MVC, how to build a SPA, and how to connect the frontend and backend in a more professional way.

The skills I learned and developed in this course make me a more marketable candidate because they reflect real-world development practices. I improved my ability to work with databases, APIs, component-based frontend development, security, testing, and debugging. I also became more comfortable troubleshooting issues across multiple layers of an application, which is an important skill in software development. Overall, this course helped me strengthen both my technical skills and my confidence in building modern web applications, and it has made me feel more prepared for future software development roles.
