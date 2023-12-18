export class UpdateUserDto {
  private constructor(
    public readonly id: number,
    public readonly name?: string,
    public readonly completedAt?: Date
  ) { }

  get values() {
    const returnObj: { [key: string]: any } = {}

    if (this.name) returnObj.name = this.name
    if (this.completedAt) returnObj.completedAt = this.completedAt

    return returnObj
  }

  static create(props: { [key: string]: any }): [string?, UpdateUserDto?] {
    const { id, name, completedAt } = props
    let newCompletedAt = completedAt

    if ( !id || isNaN(Number(id)) ) {
      return ['Id must be a valid number', undefined]
    }

    if (completedAt) {
      newCompletedAt = new Date(completedAt)
      if (newCompletedAt.toString() === 'Invalid Date') {
        return ['CompletedAt must be a valid date', undefined]
      }
    }
    if (!name) return ['Name property is required', undefined]

    return [undefined, new UpdateUserDto(id, name, newCompletedAt)]
  }
}