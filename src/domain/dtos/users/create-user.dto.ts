export class CreateUserDto {
  private constructor(
    public readonly name: string
  ){}

  static create ( props: { [key: string]: any }): [string?, CreateUserDto?] {
    const { name } = props
    if (!name) return ['Name property is required', undefined]

    return [undefined, new CreateUserDto(name)]
  }
}