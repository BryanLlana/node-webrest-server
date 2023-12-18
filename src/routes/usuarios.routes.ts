import { Router } from 'express'
import { UsuariosController } from '../controllers/usuario.controller'

export class UsuarioRoutes {
  static get routes(): Router {
    const router = Router()
    const usuarioController = new UsuariosController()

    router.post('/', usuarioController.createUsuario)
    router.get('/', usuarioController.getUsuarios)
    router.get('/:id', usuarioController.getUsuario)
    router.put('/:id', usuarioController.updateUsuario)
    router.delete('/:id', usuarioController.deleteUsuario)

    return router
  }
}