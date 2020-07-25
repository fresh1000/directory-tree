import { directoryTree } from '../directoryTree'

class DirectoryTreeService {
  getDirectoryTree(path: string) {
    return directoryTree(path)
  }
}

export default DirectoryTreeService