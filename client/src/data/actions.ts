"use server";

import { subscribeService } from "./services";

export async function subscribeAction(prevState: any, formData: FormData) {
  const email:any = formData.get("email");
  const responseData = await subscribeService(email);
  return {
    ...prevState,
    successMessage: "Successfully Subscribed"
  }
}
