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
import LogoutIcon from '@mui/icons-material/Logout'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

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
        <Toolbar className="flex flex-col justify-normal items-start px-0 pt-4 gap-4">
          <div className="w-full /py-4 px-2 flex h-[77vh] overflow-auto">
            <div className="w-full text-left flex flex-col gap-4">
              {menuItens.map(({ Icon, gropo, itensMenu }, index) => (
                <RowElementMenu
                  key={index}
                  Icon={<Icon />}
                  gropo={gropo}
                  itensMenu={itensMenu}
                />
              ))}
            </div>
          </div>
          <button className="flex items-center gap-4 w-full mx-4 text-slate-400">
            <LogoutIcon /> <span>Sair</span>
          </button>
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

function RowElementMenu({ Icon, gropo, itensMenu }: RowElementProps) {
  return (
    <Accordion className="w-full border-none shadow-none p-0">
      <AccordionSummary
        expandIcon={<ArrowDropDownIcon />}
        aria-controls={gropo}
        id="panel2-header"
      >
        <span className="text-slate-400 font-thin space-x-2 flex items-center">
          {Icon}
          <span className="">{gropo}</span>
        </span>
      </AccordionSummary>
      <AccordionDetails className="p-0">
        <ul className="pl-3 flex flex-col gap-3 /mt-3 w-full">
          {itensMenu.map(({ Icon, titulo }, index) => (
            <li key={index} className="text-left w-full text-purple-700">
              <button className="p-2 w-full flex justify-start items-center rounded hover:bg-purple-700/10 space-x-2 active:bg-purple-700/20">
                {<Icon />} <span className="">{titulo}</span>
              </button>
            </li>
          ))}
        </ul>
      </AccordionDetails>
    </Accordion>
  )
}

export function AccordionExpandIcon() {
  return (
    <div>
      {/* <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion> */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails></AccordionDetails>
      </Accordion>
    </div>
  )
}
