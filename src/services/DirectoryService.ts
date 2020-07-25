import { Directory } from '../models/Directory'

class DirectoryService {
  async create(info) {
    let data = {}
    try {
      data = await Directory.create({ info: JSON.stringify(info)})
    } catch (err) {
      throw err
    }
    return data
  }
}

export default DirectoryService
