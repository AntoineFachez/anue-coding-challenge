import { getTodosFromLS, handleSetLSItem, handleGetLSItem } from '@/utils/ls';
import { Todo } from '@/context/TodoContext';

export async function GET(request: Request): Promise<Response> {
  try {
    const todos = await handleGetLSItem('toDos');
    return new Response(JSON.stringify(todos), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in /api/toDos:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch todos' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
export async function POST(request: Request): Promise<Response> {
  console.log('Todos in localStorage:', request);
  try {
    const newTodo: Todo = await request.json();

    // ... (itemName validation) ...

    handleSetLSItem('toDos', newTodo);

    // Log the todos after adding the new one
    const todos = getTodosFromLS('toDos');
    console.log('Todos in localStorage:', todos);

    return new Response('Todo added successfully!', { status: 201 });
  } catch (error) {
    console.error('Error in /api/toDos (POST):', error);
    return new Response(JSON.stringify({ error: 'Failed to add todo' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
