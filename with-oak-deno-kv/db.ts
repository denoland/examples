
export const db = await Deno.openKv();

export async function getTodoItem(
  id: string,
  consistency: "strong" | "eventual"
): Promise<TodoListItem> {
  return await db.get(["list", id], { consistency });
}

export async function getAllTodoItems(
  consistency: "strong" | "eventual"
): Promise<TodoListItem> {
  return await db.list({ prefix: ["list"] }, {
    consistency
  });
}

export async function createTodoItem(
  text: string
): Promise<TodoListItem> {
  const item = {
    id: crypto.randomUUID(),
    text,
    completed: false,
    createdAt: Date.now(),
    updatedAt: Date.now()
  }

  return await db.set(["list", item.id], item);
}

export async function checkOffTodoItem(
  id: string
): Promise<TodoListItem> {
  const item = db.get(["list", id]);
  item.updatedAt = Date.now();
  item.completed = true;
  return await db.set(["list", id], item);
}

export async function deleteTodoItem(
  id: string
): Promise<TodoListItem> {
  return await db.delete(["list", id]);
}



export interface TodoListItem {
  // Non-empty in API request and response
  id?: string;

  // Non-empty in API response
  versionstamp?: string;

  text: string;
  completed: boolean;
  createdAt: number;
  updatedAt: number;
}

