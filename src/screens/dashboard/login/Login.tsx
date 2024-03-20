import { Email, Password } from '@mui/icons-material'
import { Box, TextField } from '@mui/material'
export default function Login() {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <div className="m-auto min-h-[360px] w-[340px] shadow bg-slate-200 p-4 rounded flex flex-col gap-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl text-purple-700 font-bold">
            Painel de Login
          </h2>
          <p className="text-sm">Para acessar a Dashboard faça aqui o login</p>
        </div>
        <div>
          <form action="" className="space-y-10">
            <div className="flex flex-col gap-10">
              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <Email
                  sx={{ color: 'action.active', mr: 1, my: 0.5 }}
                  className="text-purple-700"
                />
                <TextField
                  id="input-with-sx"
                  label="Email"
                  variant="standard"
                  className="w-full"
                  type="email"
                />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <Password
                  sx={{ color: 'action.active', mr: 1, my: 0.5 }}
                  className="text-purple-700"
                />
                <TextField
                  id="input-with-sx"
                  label="Senha"
                  variant="standard"
                  type="password"
                  className="w-full"
                />
              </Box>
            </div>
            <div className="flex flex-col gap-3">
              <button className="w-full p-3 rounded bg-purple-700/60 text-white font-bold active:bg-purple-700/10">
                Login
              </button>
              <div className="text-right">
                <button className="italic hover:text-purple-700/60">
                  Esqueci a minha senha
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
