// functions/tasks.js

let tasks = [
    { id: 1, name: 'Task 1', status: 'Pending' },
    { id: 2, name: 'Task 2', status: 'Completed' },
    { id: 3, name: 'Task 3', status: 'In Progress' },
  ];
  
  // GET: Get all tasks
  const getTasks = async () => {
    return {
      statusCode: 200,
      body: JSON.stringify(tasks),
    };
  };
  
  // POST: Add a new task
  const addTask = async (body) => {
    const { name, status } = JSON.parse(body);
    const newTask = {
      id: tasks.length + 1,
      name: name || 'New Task',
      status: status || 'Pending',
    };
    tasks.push(newTask);
    return {
      statusCode: 201,
      body: JSON.stringify(newTask),
    };
  };
  
  exports.handler = async (event, context) => {
    // Allow cross-origin requests (CORS)
    const headers = {
      'Access-Control-Allow-Origin': '*', // Or set a specific domain like 'https://yourfrontend.com'
      'Access-Control-Allow-Headers': 'Content-Type',
    };
  
    if (event.httpMethod === 'GET') {
      // Handle GET request to fetch all tasks
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(tasks),
      };
    }
  
    if (event.httpMethod === 'POST') {
      // Handle POST request to add a new task
      return addTask(event.body).then((response) => {
        return { ...response, headers };
      });
    }
  
    // Return 405 Method Not Allowed if method is not supported
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  };
  