// pages/signup.tsx
import { GalleryVerticalEnd } from "lucide-react"
import { SignupForm } from "@/components/signup-form"

export default function SignupPage() {
  return (
    <div className="grid lg:grid-cols-2">
      {/* Левая колонка: логотип + форма */}
      <div className="flex flex-col p-6 md:p-10 h-screen">
        {/* Логотип */}
        <div className="flex justify-center gap-2 md:justify-start mb-4">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex h-6 w-6 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="h-4 w-4" />
            </div>
            Acme Inc.
          </a>
        </div>

        {/* Форма с прокруткой */}
        <div className="flex-1 flex flex-col items-center  overflow-auto">
          <div className="w-full max-w-xs">
            <SignupForm />
          </div>
        </div>
      </div>

      {/* Правая колонка: картинка */}
      <div className="bg-muted relative hidden lg:block h-screen">
        <img
          src="/logo1.jpeg"
          alt="Изображение"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}
