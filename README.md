Real-Time Chat Application
A powerful and responsive real-time chat application built using React, Node.js, MongoDB, Socket.IO, and Tailwind CSS. This app provides a seamless chat experience with user authentication powered by JWT tokens, enabling secure and instant communication.

Features
1. Real-Time Messaging: Chat with other users instantly using Socket.IO for live updates.
2. Secure Authentication: User sign-up and login with JWT for session management and security.
3. Persistent Chat History: All messages are stored in MongoDB, ensuring chat data is never lost.
4. User Status: Display online/offline status of users in real-time.
5. Notifications: Get notified when new messages are received.
6. Responsive Design: Built with Tailwind CSS for a fully responsive and modern UI.

Technologies Used
1. Frontend
   i) React: JavaScript library for building user interfaces.
   ii) Tailwind CSS: Utility-first CSS framework for rapid UI development.
   iii)  Socket.IO Client: For real-time communication with the server.

2. Backend
   i) Node.js & Express: Backend framework for building APIs.
   ii) Socket.IO: Enables real-time, bi-directional communication.
   iii) MongoDB & Mongoose: NoSQL database for storing chat and user data.
   iv) JWT & bcrypt: Secure authentication and password encryption.

Security Features
1. Password Encryption: User passwords are hashed using bcrypt for enhanced security.
2. JWT Authentication: Ensures secure token-based authentication for protected routes.
3. Protected Routes: Only authenticated users can access chat features.
