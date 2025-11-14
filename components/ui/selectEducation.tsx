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

export type EducationType = "university" | "college"

interface SelectEducationTypeProps {
  value: EducationType
  onChange: (v: EducationType) => void
}

export function SelectEducation({ value, onChange }: SelectEducationTypeProps) {
  return (
    <Select value={value} onValueChange={(val) => onChange(val as EducationType)}>
      <SelectTrigger className="w-[250px]">
        <SelectValue placeholder="Тип образовательного учреждения" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Тип учреждения</SelectLabel>
          <SelectItem value="university">Университет</SelectItem>
          <SelectItem value="college">Колледж</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
