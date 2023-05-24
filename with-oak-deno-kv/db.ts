import { db } from "https://deno.land/std@0.185.0/media_types/_db.ts";

export interface User {
  id: string;
  email: string;
  name: string;
  password: string;
}

export interface Address {
  city: string;
  street: string;
}

/**
 * Open KV.
 */

const kv = await Deno.openKv();

/**
 * Upsert user.
 * @param user
 */

export async function upsertUser(user: User) {
  const userKey = ["user", user.id];
  const userByEmailKey = ["user_by_email", user.email];

  const oldUser = await kv.get<User>(userKey);

  const op = kv.atomic();
  if (!oldUser.value) {
    op.check(oldUser)
      .set(userByEmailKey, user.id)
      .set(userKey, user);
  } else {
    op.check(oldUser)
      .delete(userByEmailKey, oldUser.value.email)
      .set(userByEmailKey, user.id)
      .set(userKey, user);
  }

  let res = { ok: false };
  while (!res.ok) {
    res = await op.commit();
  }
}

/**
 * Update user and address.
 * @param user
 * @param address
 */

export async function updateUserAndAddress(user: User, address: Address) {
  const userKey = ["user", user.id];
  const userByEmailKey = ["user_by_email", user.email];
  const addressKey = ["user_address", user.id];

  const oldUser = await kv.get<User>(userKey);

  const op = kv.atomic();
  if (!oldUser.value) {
    op.check(oldUser)
      .set(userByEmailKey, user.id)
      .set(userKey, user)
      .set(addressKey, address);
  } else {
    op.check(oldUser)
      .delete(userByEmailKey, oldUser.value.email)
      .set(userByEmailKey, user.id)
      .set(userKey, user)
      .set(addressKey, address);
  }
  let res = { ok: false };
  while (!res.ok) {
    res = await op.commit();
  }
}

/**
 * Get all users.
 * @returns <User>
 */

export async function getAllUsers() {
  const users = [];
  for await (const res of kv.list({ prefix: ["user"] })) {
    users.push(res.value);
  }
  return users;
}

/**
 * Get user by id.
 * @param id
 * @returns
 */

export async function getUserById(id: string): Promise<User> {
  const key = ["user", id];
  return (await kv.get(key)).value as User;
}

/**
 * Get user by email.
 * @param email
 * @returns
 */

export async function getUserByEmail(email: string) {
  const userByEmailKey = ["user_by_email", email];
  const id = (await kv.get(userByEmailKey)).value as string;
  const userKey = ["user", id];
  return (await kv.get(userKey)).value as User;
}

/**
 * Get address by user id.
 * @param id
 * @returns Address
 */

export async function getAddressByUserId(id: string) {
  const key = ["user_address", id];
  return (await kv.get(key)).value as Address;
}

/**
 * Delete user by id.
 * @param id
 */

export async function deleteUserById(id: string) {
  const userKey = ["user", id];
  const oldUser = await kv.get<User>(userKey);
  const userByEmailKey = ["user_by_email", oldUser.value.email];
  const oldUserIdByEmail = await kv.get(userByEmailKey);
  const addressKey = ["user_address", id];

  if (id !== oldUserIdByEmail.value) {
    throw new Error("User by email does not match user.");
  }

  let res = { ok: false };
  while (!res.ok) {
    res = await kv.atomic()
      .check(oldUser)
      .check(oldUserIdByEmail)
      .delete(userKey)
      .delete(userByEmailKey)
      .delete(addressKey)
      .commit();
  }
}
