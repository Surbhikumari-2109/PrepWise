export const questionBank = {
  dsa: {
    easy: [
      {
        id: 1,
        question: "Which data structure follows FIFO?",
        options: ["Stack", "Queue", "Tree", "Graph"],
        answer: "Queue",
      },
      {
        id: 2,
        question: "Which data structure follows LIFO?",
        options: ["Queue", "Stack", "Tree", "Graph"],
        answer: "Stack",
      },
      {
        id: 3,
        question: "Which data structure stores data in nodes?",
        options: ["Array", "Tree", "String", "Queue"],
        answer: "Tree",
      },
    ],

    medium: [
      {
        id: 1,
        question: "What is the time complexity of Binary Search?",
        options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
        answer: "O(log n)",
      },
      {
        id: 2,
        question: "Which traversal uses a queue?",
        options: ["DFS", "BFS", "Inorder", "Postorder"],
        answer: "BFS",
      },
      {
        id: 3,
        question: "Which data structure is used in recursion?",
        options: ["Queue", "Array", "Stack", "Graph"],
        answer: "Stack",
      },
    ],

    hard: [
      {
        id: 1,
        question: "Dijkstra Algorithm is used for?",
        options: [
          "Sorting",
          "Shortest Path",
          "Searching",
          "Traversal",
        ],
        answer: "Shortest Path",
      },
      {
        id: 2,
        question: "AVL Tree is a?",
        options: [
          "Balanced Tree",
          "Binary Heap",
          "Graph",
          "Linked List",
        ],
        answer: "Balanced Tree",
      },
      {
        id: 3,
        question: "Heap Sort complexity is?",
        options: ["O(n)", "O(log n)", "O(n log n)", "O(n²)"],
        answer: "O(n log n)",
      },
    ],
  },

  java: {
    easy: [
      {
        id: 1,
        question: "Java is a?",
        options: [
          "Programming Language",
          "Database",
          "OS",
          "Browser",
        ],
        answer: "Programming Language",
      },
      {
        id: 2,
        question: "Which keyword creates an object?",
        options: ["new", "class", "this", "void"],
        answer: "new",
      },
      {
        id: 3,
        question: "Java is platform?",
        options: [
          "Dependent",
          "Independent",
          "Semi",
          "None",
        ],
        answer: "Independent",
      },
    ],

    medium: [
      {
        id: 1,
        question: "Which concept allows multiple forms?",
        options: [
          "Inheritance",
          "Encapsulation",
          "Polymorphism",
          "Abstraction",
        ],
        answer: "Polymorphism",
      },
      {
        id: 2,
        question: "Parent class inheritance keyword?",
        options: [
          "implements",
          "extends",
          "super",
          "this",
        ],
        answer: "extends",
      },
      {
        id: 3,
        question: "JVM stands for?",
        options: [
          "Java Virtual Machine",
          "Java Variable Method",
          "Java Version Manager",
          "None",
        ],
        answer: "Java Virtual Machine",
      },
    ],

    hard: [
      {
        id: 1,
        question: "Which collection stores unique values?",
        options: ["List", "Set", "Queue", "Array"],
        answer: "Set",
      },
      {
        id: 2,
        question: "HashMap complexity for search?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
        answer: "O(1)",
      },
      {
        id: 3,
        question: "Which package contains ArrayList?",
        options: [
          "java.io",
          "java.util",
          "java.lang",
          "java.sql",
        ],
        answer: "java.util",
      },
    ],
  },
  dbms: {
  easy: [
    {
      id: 1,
      question: "What does DBMS stand for?",
      options: [
        "Database Management System",
        "Data Backup Management System",
        "Database Machine System",
        "Data Mining Software",
      ],
      answer: "Database Management System",
    },

    {
      id: 2,
      question: "Which language is used to interact with databases?",
      options: [
        "HTML",
        "CSS",
        "SQL",
        "Java"
      ],
      answer: "SQL",
    },

    {
      id: 3,
      question: "Which SQL command is used to fetch data?",
      options: [
        "INSERT",
        "UPDATE",
        "DELETE",
        "SELECT"
      ],
      answer: "SELECT",
    },
  ],

  medium: [
    {
      id: 1,
      question: "Which normal form removes partial dependency?",
      options: [
        "1NF",
        "2NF",
        "3NF",
        "BCNF"
      ],
      answer: "2NF",
    },

    {
      id: 2,
      question: "Primary Key can contain?",
      options: [
        "Duplicate values",
        "NULL values",
        "Unique values only",
        "Any values"
      ],
      answer: "Unique values only",
    },

    {
      id: 3,
      question: "Which JOIN returns matching rows from both tables?",
      options: [
        "LEFT JOIN",
        "RIGHT JOIN",
        "INNER JOIN",
        "FULL JOIN"
      ],
      answer: "INNER JOIN",
    },
  ],

  hard: [
    {
      id: 1,
      question: "BCNF is stricter than?",
      options: [
        "1NF",
        "2NF",
        "3NF",
        "4NF"
      ],
      answer: "3NF",
    },

    {
      id: 2,
      question: "Which indexing structure is commonly used in DBMS?",
      options: [
        "Stack",
        "Queue",
        "B+ Tree",
        "Linked List"
      ],
      answer: "B+ Tree",
    },

    {
      id: 3,
      question: "Transaction properties are known as?",
      options: [
        "CRUD",
        "SQL",
        "ACID",
        "JOIN"
      ],
      answer: "ACID",
    },
  ]
},
  "computer networks": {
    easy: [
      {
        id: 1,
        question: "What does LAN stand for?",
        options: [
          "Local Area Network",
          "Large Area Network",
          "Logical Area Network",
          "None",
        ],
        answer: "Local Area Network",
      },
      {
        id: 2,
        question: "Which device connects networks?",
        options: ["Switch", "Hub", "Router", "Repeater"],
        answer: "Router",
      },
      {
        id: 3,
        question: "IP stands for?",
        options: [
          "Internet Protocol",
          "Internal Protocol",
          "Internet Process",
          "None",
        ],
        answer: "Internet Protocol",
      },
    ],

    medium: [
      {
        id: 1,
        question: "OSI model has how many layers?",
        options: ["5", "6", "7", "8"],
        answer: "7",
      },
      {
        id: 2,
        question: "TCP is?",
        options: [
          "Connection Oriented",
          "Connectionless",
          "Protocolless",
          "None",
        ],
        answer: "Connection Oriented",
      },
      {
        id: 3,
        question: "Which layer handles routing?",
        options: [
          "Transport",
          "Network",
          "Data Link",
          "Session",
        ],
        answer: "Network",
      },
    ],

    hard: [
      {
        id: 1,
        question: "Which protocol is used for secure web communication?",
        options: ["HTTP", "HTTPS", "FTP", "SMTP"],
        answer: "HTTPS",
      },
      {
        id: 2,
        question: "Port number of HTTPS?",
        options: ["21", "25", "80", "443"],
        answer: "443",
      },
      {
        id: 3,
        question: "DNS converts?",
        options: [
          "IP to MAC",
          "Domain to IP",
          "MAC to IP",
          "None",
        ],
        answer: "Domain to IP",
      },
    ],
  },
};