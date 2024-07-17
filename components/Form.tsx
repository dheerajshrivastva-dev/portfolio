"use client"

import { FC } from 'react'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

//component import
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from './ui/textarea'
import { ArrowRightIcon, MailIcon, MessageSquare, User } from 'lucide-react'

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z
  .string()
  .min(1, { message: "This field has to be filled." })
  .email("This is not a valid email."),
  message: z.string().min(1, {
    message: "message can not be empty"
  })
})

interface FormProps {
  
}

const ContactForm: FC<FormProps> = ({}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className='relative flex items-center'>
                  <Input placeholder="Name" {...field} />
                  <User className='absolute right-6' />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="relative flex items-center">
                  <Input placeholder="Email" {...field} />
                  <MailIcon className='absolute right-6' size={20} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
              <div className="relative flex items-center">
                <Textarea placeholder="Type Your Message Here." {...field} />
                <MessageSquare className='absolute right-6 top-4' size={20} />
              </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className='flex items-center max-w-[166px] gap-x-1' type="submit">
          Let&apos;s Talk
          <ArrowRightIcon size={20} />
        </Button>
      </form>
    </Form>
  )
}

export default ContactForm
