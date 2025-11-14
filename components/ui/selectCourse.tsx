import * as React from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
interface SelectCourceProps {
  value: string
  onChange: (v: string) => void
  options: string[]
}
export function SelectCource({ value, onChange, options }: SelectCourceProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[250px]">
        <SelectValue placeholder="Выберите курс" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Курс</SelectLabel>
          {options.map((opt) =>(
            <SelectItem key={opt} value= {opt}>
                {opt}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
