import { request, response } from 'express';
import { prisma } from '../data/postgres';
import { CreateUserDto, UpdateUserDto } from '../domain/dtos';

export class UsuariosController {
  //* DI
  constructor () {

  }

  public getUsuarios = async (req = request, res = response) => {
    const users = await prisma.user.findMany()
    res.json(users)
  }

  public getUsuario = async (req = request, res = response) => {
    const id = +req.params.id
    if (isNaN(id)) return res.status(400).json({ error: 'ID argument is not a number'})

    const user = await prisma.user.findFirst({
      where: {
        id
      }
    })

    if (!user) return res.status(404).json({ error: `User with id ${id} not found`})

    res.json(user)
  }

  public createUsuario = async (req = request, res = response) => {
    const [error, createUserDto] = CreateUserDto.create(req.body)
    if (error) return res.status(400).json({ error })

    const userCreated = await prisma.user.create({
      data: createUserDto!
    })

    res.json(userCreated)
  }

  public updateUsuario = async (req = request, res = response) => {
    const id = +req.params.id
    const [error, updateUserDto] = UpdateUserDto.create({ ...req.body, id })

    if (error) return res.status(400).json({ error })

    const user = await prisma.user.findFirst({
      where: {
        id
      }
    })

    if (!user) return res.status(404).json({ error: `User with id ${id} not found`})

    const userUpdated = await prisma.user.update({
      data: updateUserDto!.values,
      where: {
        id
      }
    })

    res.json(userUpdated)
  }

  public deleteUsuario = async (req = request, res = response) => {
    const id = +req.params.id

    if (isNaN(id)) return res.status(400).json({ error: 'ID argument is not a number'})

    const user = await prisma.user.findFirst({
      where: {
        id
      }
    })

    if (!user) return res.status(404).json({ error: `User with id ${id} not found`})

    const userDeleted = await prisma.user.delete({
      where: {
        id
      }
    })

    res.json(userDeleted)
  }
}