import { Request, Response } from 'express'
import DirectoryService from '../services/DirectoryService'
import DirectoryTreeService from '../services/DirectoryTreeService'

class DirectoryController {
  async directoryTree (req: Request, res: Response) {
    let directoryData: any = {}
    try {
      const directoryTreeService = new DirectoryTreeService()
      directoryData = directoryTreeService.getDirectoryTree(req.body.path)
    } catch (err) {
      return res.status(500).send({ error: 'Cannot parse directory data'});
    }

    try {
      const directoryService = new DirectoryService()
      directoryService.create(directoryData)
    } catch (err) {
      return res.status(500).send({ error: 'Cannot save directory data'});
    }
    return res.status(200).send(directoryData);
  }
}

export default DirectoryController
