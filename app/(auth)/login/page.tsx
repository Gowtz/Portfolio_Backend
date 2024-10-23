"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useFormState } from "react-dom";
import { z } from "zod";
import { formSchema } from "@/types/user";
import { Button } from "@/components/ui/button";
import { authenticate } from "@/lib/action";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useActionState } from "react";


export function ProfileForm() {
  const [errorMessage, formAction, isPending] = useFormState(authenticate, undefined)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });


  return (
    <Form {...form}>
      <form action={formAction} className="space-y-8">
        <h1 className="text-2xl font-semibold ">Login</h1>
      
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input type="text" placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input  type="password" placeholder="Pass" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </Form>
  );
}

export default function page() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[370px] m-auto border border-zinc-800 rounded-xl p-5">
        <ProfileForm />
      </div>
    </div>
  );
}
