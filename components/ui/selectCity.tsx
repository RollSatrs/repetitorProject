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

export function SelectCity({value, onChange}: {value:string; onChange:(v:string)=> void}) {
    return (
        <Select value={value} onValueChange={onChange}>
          <SelectTrigger className="w-[250px]">
            <SelectValue placeholder="Выберите город" />
          </SelectTrigger>
          <SelectContent>
            {/* Абайская область */}
            <SelectGroup>
              <SelectLabel>Абайская область</SelectLabel>
              <SelectItem value="semey">Семей</SelectItem>
              <SelectItem value="ayagoz">Аягөз</SelectItem>
              <SelectItem value="uralsk">Усть‑Каменогорск</SelectItem>
            </SelectGroup>

            {/* Акмолинская область */}
            <SelectGroup>
              <SelectLabel>Акмолинская область</SelectLabel>
              <SelectItem value="kokshetau">Кокшетау</SelectItem>
              <SelectItem value="astana">Нур‑Султан</SelectItem>
              <SelectItem value="sandyktau">Сандыктau</SelectItem>
            </SelectGroup>

            {/* Алматинская область */}
            <SelectGroup>
              <SelectLabel>Алматинская область</SelectLabel>
              <SelectItem value="almaty">Алматы</SelectItem>
              <SelectItem value="taldykorgan">Талдыкорган</SelectItem>
              <SelectItem value="kapshagai">Капшагай</SelectItem>
            </SelectGroup>

            {/* Актюбинская область */}
            <SelectGroup>
              <SelectLabel>Актюбинская область</SelectLabel>
              <SelectItem value="aktobe">Актобе</SelectItem>
              <SelectItem value="kumkol">Кумколь</SelectItem>
              <SelectItem value="khromtau">Хромтау</SelectItem>
            </SelectGroup>

            {/* Атырауская область */}
            <SelectGroup>
              <SelectLabel>Атырауская область</SelectLabel>
              <SelectItem value="atyrau">Атырау</SelectItem>
              <SelectItem value="fort‑shevchenko">Форт‑Шевченко</SelectItem>
              <SelectItem value="zhanakorgan">Жанакорган</SelectItem>
            </SelectGroup>

            {/* Карагандинская область */}
            <SelectGroup>
              <SelectLabel>Карагандинская область</SelectLabel>
              <SelectItem value="karaganda">Караганда</SelectItem>
              <SelectItem value="jezkazgan">Жезказган</SelectItem>
              <SelectItem value="temirtau">Темиртау</SelectItem>
            </SelectGroup>

            {/* Костанайская область */}
            <SelectGroup>
              <SelectLabel>Костанайская область</SelectLabel>
              <SelectItem value="kostanay">Костанай</SelectItem>
              <SelectItem value="rudny">Рудный</SelectItem>
              <SelectItem value="arkalyk">Аркалык</SelectItem>
            </SelectGroup>

            {/* Кызылординская область */}
            <SelectGroup>
              <SelectLabel>Кызылординская область</SelectLabel>
              <SelectItem value="kyzylorda">Кызылорда</SelectItem>
              <SelectItem value="baikonur">Байконур</SelectItem>
              <SelectItem value="aralsk">Аральск</SelectItem>
            </SelectGroup>

            {/* Мангыстауская область */}
            <SelectGroup>
              <SelectLabel>Мангистауская область</SelectLabel>
              <SelectItem value="aktau">Актау</SelectItem>
              <SelectItem value="zhanaozen">Жанаозен</SelectItem>
              <SelectItem value="fort‑shevchenko2">Форт‑Шевченко</SelectItem>
            </SelectGroup>

            {/* Северо‑Казахстанская область */}
            <SelectGroup>
              <SelectLabel>Северо‑Казахстанская область</SelectLabel>
              <SelectItem value="petropavl">Петропавловск</SelectItem>
              <SelectItem value="koksu">Коксу</SelectItem>
              <SelectItem value="eskeld">Эскелд</SelectItem>
            </SelectGroup>

            {/* Павлодарская область */}
            <SelectGroup>
              <SelectLabel>Павлодарская область</SelectLabel>
              <SelectItem value="pavlodar">Павлодар</SelectItem>
              <SelectItem value="erigass">Экибастуз</SelectItem>
              <SelectItem value="akzhaj">Акжайык</SelectItem>
            </SelectGroup>

            {/* Туркестанская область */}
            <SelectGroup>
              <SelectLabel>Туркестанская область</SelectLabel>
              <SelectItem value="turkestan">Туркестан</SelectItem>
              <SelectItem value="shayram">Шайрам</SelectItem>
              <SelectItem value="kentau">Кентау</SelectItem>
            </SelectGroup>

            {/* Улытауская область */}
            <SelectGroup>
              <SelectLabel>Улытауская область</SelectLabel>
              <SelectItem value="jezkazgan2">Жезказган</SelectItem>
              <SelectItem value="satpayev">Сатпаев</SelectItem>
              <SelectItem value="karazhal">Каражал</SelectItem>
            </SelectGroup>

            {/* Жамбылская область */}
            <SelectGroup>
              <SelectLabel>Жамбылская область</SelectLabel>
              <SelectItem value="taraz">Тараз</SelectItem>
              <SelectItem value="shardara">Шардара</SelectItem>
              <SelectItem value="sayram">Сайрам</SelectItem>
            </SelectGroup>

            {/* Восточно‑Казахстанская область */}
            <SelectGroup>
              <SelectLabel>Восточно‑Казахстанская область</SelectLabel>
              <SelectItem value="uralsk2">Усть‑Каменогорск</SelectItem>
              <SelectItem value="ridder">Риддер</SelectItem>
              <SelectItem value="altai">Алтай</SelectItem>
            </SelectGroup>

          </SelectContent>
        </Select>
    )
}
