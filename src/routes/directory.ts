import { Router } from 'express'
import DirectoryController from '../controllers/DirectoryController'

const router = Router()
const directoryController = new DirectoryController()

router.post('/directory-tree', directoryController.directoryTree)

export default router
