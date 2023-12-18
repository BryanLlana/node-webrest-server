import { envs } from "./config/plugins/envs"
import { Server } from "./presentation/server"
import { UsuarioRoutes } from "./routes/usuarios.routes"

(async () => {
  main()
})()

function main() {
  const server = new Server({ port: envs.PORT, publicPath: envs.PUBLIC_PATH, routes: UsuarioRoutes.routes })
  server.start()
}