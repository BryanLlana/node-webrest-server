import { Server } from "./presentation/server"

(async () => {
  main()
})()

function main() {
  const server = new Server({ port: 8080 })
  server.start()
}