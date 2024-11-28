class BaseModel {
  createAt = Date.now()

  validate() {
    throw new Error('This method must be implemented in child class')
  }
}

export default BaseModel
