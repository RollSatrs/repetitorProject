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
import { SelectCity } from "./ui/selectCity"
import { use, useState } from "react"
import { ButtonGroup } from "./ui/button-group"
import { SelectCource } from "./ui/selectCourse"
import { Select, SelectItem } from "@radix-ui/react-select"
import { SelectEducation } from "./ui/selectEducation"
import { SelectClass } from "./ui/selectClass"

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [role, setRole] = useState<"student" | "schoolchildren" | null>("schoolchildren")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLasttName] = useState("")
  const [email, setEmail] = useState("")
  const [city, setCity] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const [educationType, setEducationType] = useState<"university" | "college">("university")
  const [educationName, setEducationName] = useState("")
  const [cource, setCource] = useState("")

  const [schoolName, setSchoolName] = useState("")
  const [schoolClass, setSchoolClass] = useState("")



  const [error, setError] = useState("")

  

  const handlerSubmit = async(e: React.FormEvent) =>{
    e.preventDefault()
    if(password.length < 8){
      setError("Пароль должен быть не менее 8 символов")
      return 
    }
    if(password !== confirmPassword){
      setError("Пароли не совпадают")
      return
    }

    const paload = {
      role,
      firstName,
      lastName,
      email,
      city,
      phone,
      password,

      // Данные студента
      educationType,
      educationName,
      cource,

      // Данные школьника
      schoolName,
      schoolClass,
    }

    const res = await fetch("/auth/register", {
      method: "POST",
      body: JSON.stringify(paload)
    })

    const data = await res.json()

    if(!res.ok){
      setError(data.message || "Произошла ошибка")
      return      
    }
    
    window.location.href = "/home"

  }

  return (
    <form onSubmit={handlerSubmit} className={cn("flex flex-col gap-6", className)} {...props}>
      <FieldGroup>
        {/* Заголовок */}
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Создать аккаунт</h1>
          <p className="text-muted-foreground text-sm">
            Заполните форму ниже, чтобы создать свой аккаунт
          </p>
        </div>

        <div className="flex justify-center">
          <ButtonGroup >
            <Button 
              onClick={() =>setRole("student")} 
              variant={role === "student" ? "default" : "outline"}
              type="button"
            >
                Студент
            </Button>
            <Button
              onClick={() =>setRole("schoolchildren")} 
              variant={role === "schoolchildren" ? "default" : "outline"}
              type="button" 
            >
              Школьник
            </Button>
          </ButtonGroup>
        </div>

        {/* Полное имя */}
        <Field>
          <FieldLabel htmlFor="firstName">Ваше имя</FieldLabel>
          <Input 
            id="firstName" 
            type="text"  
            placeholder="Имя" 
            required 
            value={firstName} 
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Field>
       <Field>
          <FieldLabel htmlFor="lastName">Ваше фамилия</FieldLabel>
          <Input 
            id="lastName" 
            type="text"  
            placeholder="Фамилия" 
            required 
            value={lastName} 
            onChange={(e) => setLasttName(e.target.value)}
          />
        </Field>
        {/* Email */}
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            type="email"
            placeholder="example@mail.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FieldDescription>
            Мы будем использовать этот email для связи с вами. Ваш email никто не увидит.
          </FieldDescription>
        </Field>

        {/* Город */}

        <Field>
          <FieldLabel htmlFor="city">Выберите город</FieldLabel>
          <SelectCity value={city} onChange={(value) => setCity(value)}/>
        </Field>

        {/* Номер телефона */}
        <Field>
          <FieldLabel htmlFor="phone">Номер телефона</FieldLabel>
          <Input 
            id="phone" 
            type="number"  
            placeholder="87055055567" 
            required 
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Field>

        {role === "student" && (
          <>
            {/* Тип образовательного учреждения */}
            <Field>
              <FieldLabel htmlFor="educationType">Образовательное учреждение</FieldLabel>
              <SelectEducation
                value={educationType}
                onChange={(value) => setEducationType(value as "university" | "college")}
              />
            </Field>
        
            {/* Университет */}
            {educationType === "university" && (
              <>
                <Field>
                  <FieldLabel htmlFor="educationName">Название университета</FieldLabel>
                  <Input
                    id="educationName"
                    type="text"
                    placeholder="Alikhan Bukeyhan University"
                    value={educationName}
                    onChange={(e) => setEducationName(e.target.value)}
                  />
                </Field>
            
                <Field>
                  <FieldLabel htmlFor="cource">Курс</FieldLabel>
                  <SelectCource
                    value={cource}
                    onChange={setCource}
                    options={["1 курс", "2 курс", "3 курс", "4 курс"]}
                  />
                </Field>
              </>
            )}

            {/* Колледж */}
            {educationType === "college" && (
              <>
                <Field>
                  <FieldLabel htmlFor="educationName">Название колледжа</FieldLabel>
                  <Input
                    id="educationName"
                    type="text"
                    placeholder="Казахский колледж IT"
                    value={educationName}
                    onChange={(e) => setEducationName(e.target.value)}
                  />
                </Field>
            
                <Field>
                  <FieldLabel htmlFor="cource">Курс</FieldLabel>
                  <SelectCource
                    value={cource}
                    onChange={setCource}
                    options={["1 курс", "2 курс", "3 курс", "4 курс"]}
                  />
                </Field>
              </>
            )}
          </>
        )}



        {role === "schoolchildren" &&(
          <>
            <Field>
              <FieldLabel htmlFor="schoolName">Название школы</FieldLabel>
              <Input
                id="schoolName"
                type="text"
                placeholder="32 Школа"
                value={schoolName}
                onChange={(e) => setSchoolName(e.target.value)}
              />
            </Field>
            <Field>
              <FieldLabel>Классы</FieldLabel>
              <SelectClass
                value={schoolClass}
                onChange={setSchoolClass}
                options={[
                  "1 класс",
                  "2 класс",
                  "3 класс",
                  "4 класс",
                  "5 класс",
                  "6 класс",
                  "7 класс",
                  "8 класс",
                  "9 класс",
                  "10 класс",
                  "11 класс",
                ]}
              />
            </Field>
          </>
        )}

        {/* Пароль */}
        <Field>
          <FieldLabel htmlFor="password">Пароль</FieldLabel>
          <Input 
            id="password" 
            type="password" 
            required 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FieldDescription>
            Пароль должен быть не менее 8 символов.
          </FieldDescription>
        </Field>
        
        {/* Подтверждение пароля */}
        <Field>
          <FieldLabel htmlFor="confirm-password">Подтвердите пароль</FieldLabel>
          <Input 
            id="confirm-password" 
            type="password" 
            required 
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <FieldDescription>Пожалуйста, подтвердите ваш пароль.</FieldDescription>
        </Field>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        {/* Кнопка */}
        <Field>
          <Button type="submit">Создать аккаунт</Button>
        </Field>

        <FieldDescription className="px-6 text-center">
          Уже есть аккаунт? <a href="/auth/login">Войти</a>
        </FieldDescription>
        {/* <FieldSeparator>Или продолжить с помощью</FieldSeparator> */}

        {/* Вход через GitHub */}
        {/* <Field>
          <Button variant="outline" type="button" className="flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5">
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                fill="currentColor"
              />
            </svg>
            Зарегистрироваться через GitHub
          </Button>
          <FieldDescription className="px-6 text-center">
            Уже есть аккаунт? <a href="#">Войти</a>
          </FieldDescription>
        </Field> */}
      </FieldGroup>
    </form>
  )
}
  