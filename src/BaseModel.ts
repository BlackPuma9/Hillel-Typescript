abstract class BaseModel {
  public createAt: number = Date.now()

  public abstract validate(): void
}

export default BaseModel
