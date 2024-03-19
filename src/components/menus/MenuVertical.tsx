'use client'
import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import HistoryIcon from '@mui/icons-material/History'
import MonyIcon from '@mui/icons-material/MoneyOff'
import ManagementIcon from '@mui/icons-material/ManageHistorySharp'
import SettingIcon from '@mui/icons-material/Settings'
import SchoolIcon from '@mui/icons-material/School'
import MarketingIcon from '@mui/icons-material/ManageAccounts'
import { OverridableComponent } from '@mui/material/OverridableComponent'
import { SvgIconTypeMap } from '@mui/material/SvgIcon/SvgIcon'

const menuItens = [
  {
    Icon: MarketingIcon,
    gropo: 'Marketing',
    itensMenu: [
      {
        Icon: ManagementIcon,
        titulo: 'Gestão',
      },
      {
        Icon: MonyIcon,
        titulo: 'Finanças',
      },
      {
        Icon: SchoolIcon,
        titulo: 'Horários',
      },
      {
        Icon: HistoryIcon,
        titulo: 'Históricos',
      },
    ],
  },
  {
    Icon: SchoolIcon,
    gropo: 'Escola',
    itensMenu: [
      {
        Icon: ManagementIcon,
        titulo: 'Professores',
      },
      {
        Icon: MonyIcon,
        titulo: 'Estudantes',
      },
      {
        Icon: SchoolIcon,
        titulo: 'Turmas',
      },
      {
        Icon: HistoryIcon,
        titulo: 'Departame.',
      },
    ],
  },
  {
    Icon: SettingIcon,
    gropo: 'Sistema',
    itensMenu: [
      {
        Icon: ManagementIcon,
        titulo: 'Professores',
      },
      {
        Icon: MonyIcon,
        titulo: 'Estudantes',
      },
    ],
  },
]

export function MenuAppBarVertical() {
  const [auth, setAuth] = React.useState(true)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked)
  }

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        className="bg-white/85 text-purple-700 h-[88vh] w-[200px] fixed top-[78px] bottom-0 left-0 rounded"
      >
        <Toolbar className="flex flex-col justify-normal items-start px-0 py-4">
          <div className="w-full h-full /py-4 px-3 flex max-h-[77vh] overflow-auto">
            <ul className="w-full text-left flex flex-col gap-4">
              {menuItens.map(({ Icon, gropo, itensMenu }, index) => (
                <RowElementMenu
                  key={index}
                  Icon={<Icon />}
                  gropo={gropo}
                  itensMenu={itensMenu}
                />
              ))}
            </ul>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

type RowElementProps = {
  Icon: any
  gropo: string
  itensMenu: {
    Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
      muiName: string
    }
    titulo: string
  }[]
}

function RowElementMenu(elemento: RowElementProps) {
  return (
    <li className="flex flex-col text-left w-full">
      <span className="text-slate-400 font-thin space-x-2 flex items-center">
        {elemento.Icon}
        <span className="">{elemento.gropo}</span>
      </span>
      <ul className="pl-4 flex flex-col gap-3 mt-3">
        {elemento.itensMenu.map(({ Icon, titulo }, index) => (
          <li key={index} className="text-left w-full">
            <button className="p-2 w-full flex justify-start items-center border rounded hover:bg-purple-700/10 space-x-2 active:bg-purple-700/20">
              {<Icon />} <span className="font-bold">{titulo}</span>
            </button>
          </li>
        ))}
      </ul>
      <button> </button>
    </li>
  )
}
