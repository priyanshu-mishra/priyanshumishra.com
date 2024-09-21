# Priyanshu Mishra - Portfolio Website

This is my personal developer portfolio built with [Next.js](https://nextjs.org/), [React](https://reactjs.org/), and TailwindCSS for styling, serving as my website to showcase some of my projects, experiences, and personal interests/pursuits. 

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Development Server](#running-the-development-server)
- [Building for Production](#building-for-production)
- [Exporting the Project](#exporting-the-project)
- [Deployment](#deployment)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- Responsive design that works on various devices (different styling based on mobile/tablet/desktop views)
- Dynamic project sections showcasing various engineering projects.
- Integration of SVG icons and images.
- Built with modern web technologies including TypeScript, React and Tailwind CSS.

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- A code editor (like [Visual Studio Code](https://code.visualstudio.com/))

### Installation

1. Clone the repository:

   ```bash
   https://github.com/priyanshu-mishra/priyanshumishra.com.git
   ```

2. Navigate to the project directory
3. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Development Server

To start the development server, run:

 ```bash
   npm run dev
   ```
Open your browser and go to [http://localhost:3000](http://localhost:3000) to see the application in action. The page will auto-update as you edit the files.

### Building for Production

To create an optimized production build, run:

```bash
   npm run build
   ```

This command compiles the application and prepares it for deployment.

### Exporting the Project

To export the project as static files, run:

```bash
   npm run export
   ```

This will generate an `out` directory containing all the static files needed for deployment.

## Deployment

You can deploy the project using various platforms. Here’s how to deploy it on [Vercel](https://vercel.com/):

1. Sign up or log in to Vercel.
2. Click on "New Project" and import your GitHub repository.
3. Follow the prompts to configure your project.
4. Vercel will automatically deploy your project and provide a live URL.
5. (Bonus) You can also deploy it directly through Vercel CLI (as I did, [check out this guide](https://vercel.com/docs/cli/deploying-from-cli))

Alternatively, you can upload the contents of the `out` directory to your web hosting provider (like Hostinger) under the `public_html` directory. If you are deploying using nameservers, check the appropriate CNAME and A NAME settings, or you could also go the extra mile and use a VPS, but I'm sure you can find plenty of guides online on how to go on about any of those routes).

## Folder Structure

The project has the following folder structure:

```
portfolio-website/
├── public/                # Static files (images, icons, etc.)
├── src/                   # Source files
│   ├── assets/            # Assets (images, icons)
│   │   ├── images/        # Image files (PNG, JPG)
│   │   └── icons/         # SVG icon files
│   ├── components/        # Reusable components
│   ├── sections/          # Different sections of the portfolio
│   ├── app/               # Next.js app directory
│   └── styles/            # Global styles
├── .gitignore             # Git ignore file
├── next.config.mjs        # Next.js configuration
├── package.json           # Project metadata and dependencies
└── README.md              # Project documentation

```


## Contributing

Contributions are welcome! If you have suggestions for improvements or want to report a bug, please open an issue or submit a pull request.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or feedback, feel free to reach out:

- **Email**: priyanshu.mishra@nyu.edu
- **Website**: [priyanshumishra.com](https://priyanshumishra.com)
- **Instagram**: [@priyanshu.mishra_](https://www.instagram.com/priyanshu.mishra_/)

---

Thank you for checking out my portfolio! I hope you find it interesting or informative. Feel free to ping me on my socials or email me if you have any thoughts/would like to talk about a cool project/idea:)
