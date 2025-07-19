export const seedData = [
  {
    id: "6d6f4f30-53ce-4a7c-8e58-42c1c13f8c5e",
    title: "Mastering useEffect in React",
    author: "Sarah Chen",
    date: "2024-01-15",
    lastUpdatedDate: "2024-01-20",
    tags: ["React", "JavaScript", "Tutorial"],
    image:
      "https://eu-central-1-shared-euc1-02.graphassets.com/AvHQ3RDvFSousA8iwElOKz/F7cSmluHRrO6f7XeSuJy",
    excerpt:
      "Learn how to effectively use the useEffect hook in React to handle side effects like fetching data and interacting with the DOM.",
    content: `# Mastering useEffect in React

The \`useEffect\` hook is essential for managing side effects in React.

## 🧠 What is useEffect?

It allows you to:

- Fetch data
- Subscribe/unsubscribe
- Perform DOM manipulation

## ⚙️ Basic Syntax

\`\`\`js
useEffect(() => {
  console.log("Component mounted");
}, []);
\`\`\`

> The empty array means the effect runs only once, when the component mounts.

## 🌐 Example: Fetching Data

\`\`\`js
useEffect(() => {
  fetch('/api/data')
    .then(res => res.json())
    .then(setData);
}, []);
\`\`\`

![React Effect](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*o8WnXRYp3ghoz8PUXnlxYw.png)
`,
  },
  {
    id: "9e28bd83-2a1e-4d4a-bdf0-2cf0a967c4fb",
    title: "A Beginner's Guide to Markdown",
    author: "Liam Brooks",
    date: "2024-02-22",
    lastUpdatedDate: "2024-02-23",
    tags: ["Markdown", "Writing", "Productivity"],
    image:
      "https://hackernoon.imgix.net/images/1LFWV1HmcxgIDvjV1Yqt5rcv93l2-ydd335s.jpeg",
    excerpt:
      "New to Markdown? This guide walks you through the most common formatting features like bold, italics, code blocks, and more.",
    content: `# A Beginner's Guide to Markdown

Markdown is a lightweight markup language that lets you format text easily.

## ✅ Common Syntax

- **Bold** text with \`**text**\`
- *Italic* text with \`*text*\`
- \`Inline code\` with backticks

## 📦 Code Blocks

\`\`\`python
def greet(name):
    return f"Hello, {name}!"
\`\`\`

## 🌐 Links and Images

- [Google](https://google.com)
- ![Markdown Logo](https://markdown-here.com/img/icon256.png)
`,
  },
  {
    id: "c15e11a9-0c57-4a8b-988f-c104f5b4465f",
    title: "Why Every Developer Should Learn Git",
    author: "Maya Khalid",
    date: "2024-03-10",
    lastUpdatedDate: "2024-03-12",
    tags: ["Git", "Version Control", "Tools"],
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg",
    excerpt:
      "Explore why Git is a must-have skill for developers, from version control basics to collaboration on platforms like GitHub.",
    content: `# Why Every Developer Should Learn Git

Git is the backbone of modern software development.

## 🔄 Version Control

Track changes in your code, collaborate with others, and roll back when necessary.

## ⚙️ Common Commands

- \`git init\` – initialize a repo  
- \`git commit\` – save changes  
- \`git push\` – upload to remote  

## 🌍 GitHub Integration

Platforms like GitHub make collaboration even easier.

`,
  },
  {
    id: "a2e9f5e6-b7c4-4bcf-95e4-cd8e3c112d20",
    title: "Understanding Props vs State in React",
    author: "Daniel Rivera",
    date: "2024-01-10",
    lastUpdatedDate: "2024-01-14",
    tags: ["React", "Beginner", "Concepts"],
    image:
      "https://aglowiditsolutions.com/wp-content/uploads/2022/04/React-Props-vs-State.png",
    excerpt:
      "Confused about props and state in React? This guide explains the differences and when to use each in your components.",
    content: `# Understanding Props vs State in React

React apps rely heavily on two key data types: **props** and **state**.

## 🧩 Props

Props are **read-only** values passed from parent to child components.

\`\`\`js
<MyComponent name="Test" />
\`\`\`

## ⚡ State

State is **local data** managed within a component.

\`\`\`js
const [count, setCount] = useState(0);
\`\`\`

> Think of props as *inputs*, and state as *local memory*.

`,
  },
  {
    id: "fb13b749-5fd0-4128-9d65-2a1d3ff4a70e",
    title: "JavaScript Array Methods You Should Know",
    author: "Emily Tan",
    date: "2024-03-01",
    lastUpdatedDate: "2024-03-04",
    tags: ["JavaScript", "Tips", "Productivity"],
    image:
      "https://media2.dev.to/dynamic/image/width=1600,height=900,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fnd1ek06n5w0b8dtk9gzl.png",
    excerpt:
      "From map() to reduce(), this article covers the most important JavaScript array methods for everyday development.",
    content: `# JavaScript Array Methods You Should Know

Modern JavaScript has powerful array methods. Here are some you must master:

## 🔁 .map()

Transforms each item in an array.

\`\`\`js
[1, 2, 3].map(n => n * 2); // [2, 4, 6]
\`\`\`

## 🔍 .filter()

Returns items that match a condition.

\`\`\`js
users.filter(u => u.active);
\`\`\`

## 🔄 .reduce()

Reduces array to a single value.

\`\`\`js
[1, 2, 3].reduce((a, b) => a + b, 0); // 6
\`\`\`

`,
  },
  {
    id: "437b99fc-d45d-4914-bf21-867efc129ada",
    title: "The Power of Tailwind CSS",
    author: "Nour El-Din Hassan",
    date: "2024-04-12",
    lastUpdatedDate: "2024-04-15",
    tags: ["CSS", "Tailwind", "Styling"],
    image:
      "https://media2.dev.to/dynamic/image/width=1600,height=900,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fxm1216st743rp3vmrc5d.png",
    excerpt:
      "Discover how Tailwind CSS revolutionizes styling in modern web development with utility-first classes and rapid UI building.",
    content: `# The Power of Tailwind CSS

Tailwind CSS is a **utility-first CSS framework** that lets you style apps quickly.

## 🚀 Why Use Tailwind?

- No need to leave your HTML
- Easy to customize
- Great responsive support

## 🧱 Example Button

\`\`\`html
<button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
  Click Me
</button>
\`\`\`

Tailwind can speed up your development process and keep your CSS lean and maintainable.

`,
  },
];
