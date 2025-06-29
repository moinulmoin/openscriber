"use server"

import { kv } from "@vercel/kv"

export type FormState = {
  status: "idle" | "success" | "error"
  message?: string
  position?: number
}

export async function joinWaitlist(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  try {
    const email = formData.get("email") as string

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || !emailRegex.test(email)) {
      return {
        status: "error",
        message: "Please enter a valid email address"
      }
    }

    // Check if email already exists
    const exists = await kv.sismember("waitlist:emails", email)
    if (exists) {
      return {
        status: "error",
        message: "You're already on the waitlist!"
      }
    }

    // Add email to set (prevents duplicates)
    await kv.sadd("waitlist:emails", email)

    // Store signup timestamp
    await kv.hset(`waitlist:user:${email}`, {
      email,
      timestamp: new Date().toISOString()
    })

    // Increment total count
    const count = await kv.incr("waitlist:count")

    return {
      status: "success",
      message: "Welcome to the waitlist! We'll notify you when OpenScriber launches.",
      position: count
    }
  } catch (error) {
    console.error("Waitlist error:", error)
    return {
      status: "error",
      message: "Something went wrong. Please try again."
    }
  }
}