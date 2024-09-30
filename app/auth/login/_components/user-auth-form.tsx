"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Icons } from "@/components/icons"
import { Login } from "@/types/auth"
import { useRouter } from "next/navigation"
import { AuthService } from "@/services/auth-service"
import { toast } from "@/hooks/use-toast"
import { useEffect, useState } from "react"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [errorMessage, setErrorMessage] = useState<string>("")

  const router = useRouter()
  const { login, getToken } = AuthService()

  useEffect(() => {
    const auth = getToken()
    if (auth) {
      router.push("/dashboard")
    }
  }, [getToken, router])

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    const data: Login = { username, password }
    
    if (await login(data)) {
      toast({
        title: "Đăng nhập thành công",
      })
      router.push("/dashboard")
    } else {
      setErrorMessage(
        "Tài khoản hoặc mật khẩu không chính xác, vui lòng kiểm tra lại."
      )
      setIsLoading(false)
    }
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="username">
              Username
            </Label>
            <Input
              id="username"
              placeholder="username"
              type="text"
              autoCapitalize="none"
              autoComplete="username"
              autoCorrect="off"
              disabled={isLoading}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              required
              disabled={isLoading}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign In
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <p className="text-center text-sm text-red-500">{errorMessage}</p>
        </div>
      </div>
    </div>
  )
}
