"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import postVideoContent from "@/api/postVideoContent"
import { Button } from "@/components/ui/button"
import { alertState } from "@/atoms/AlertAtom"
import { useRecoilState } from "recoil"
import type { AxiosError } from "axios"

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
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  title: z.string().trim().min(1, {
    message: "Title is required",
  }),
  content: z.string().trim().min(1, {
    message: "Content is required",
  }),
})

function VideoDataForm() {
  const [alertStateData, setAlertStateData] = useRecoilState(alertState)

  const rowCount = 10
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    try {
      const response = await postVideoContent(values.title, values.content, [])
      if (response === "success") {
        setAlertStateData({
          type: "default",
          title: "Video Creation In Progress",
          description: "Please Check Video in Generated Videos",
        })
      } else {
        setAlertStateData({
          type: "destructive",
          title: "Server Error",
          description: "Some Erorr occored on the Server",
        })
      }
    } catch (err: any) {
      setAlertStateData({
        type: "destructive",
        title: "Error On Submission",
        description: err.message,
      })
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-4 py-8 sm:w-[24rem]"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter the Title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content Text</FormLabel>
              <FormControl>
                <Textarea
                  rows={rowCount}
                  placeholder="Your Content Text"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Video Generation will use this Text.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div />
        <Button className="w-full" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  )
}

export default VideoDataForm
