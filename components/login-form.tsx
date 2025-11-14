"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handlerSubmit = async(e: React.FormEvent) =>{
    e.preventDefault()
    const res = await fetch("/login/user")
  }

  return (
    <form onSubmit={handlerSubmit} className={cn("flex flex-col gap-6", className)} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Вход в аккаунт</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Введите ваш email и пароль для входа в аккаунт
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input 
            id="email" 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="example@mail.com" 
            required 
          />
        </Field>
        <Field>
          <div className="flex items-center">
            <FieldLabel htmlFor="password">Пароль</FieldLabel>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Забыли пароль?
            </a>
          </div>
          <Input 
            id="password" 
            type="password"  
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </Field>
        <Field>
          <Button type="submit">Войти</Button>
        </Field>
        <Field>
          <FieldDescription className="text-center">
            У вас нет аккаунта?{" "}
            <a href="/auth/register" className="underline underline-offset-4">
              Зарегистрироваться
            </a>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  )
}
