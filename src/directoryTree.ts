import * as fs from 'fs'
import * as PATH from 'path'

const readDir = (path: string) => {
	let dirData = {}
	try {
		dirData = fs.readdirSync(path)
	} catch (ex) {
		throw ex
	}
	return dirData
}

export const directoryTree = (path: string, options = null, onEachFile = null, onEachDirectory = null) => {
	const name = PATH.basename(path)
	const item: any = { path, name }
	let stats

	try { 
    stats = fs.statSync(path)
  } catch (e) {
    return null
  }

	if (stats.isFile()) {
		const ext = PATH.extname(path).toLowerCase()

		if (options && options.extensions && !options.extensions.test(ext)) {
      return null
    }
    
		item.type = 'file'

		if (options && options.attributes) {
			options.attributes.forEach((attribute) => {
				item[attribute] = stats[attribute]
			});
		}

		if (onEachFile) {
			onEachFile(item, PATH, stats)
		}
	} else if (stats.isDirectory()) {
		let dirInfo: any = readDir(path)
		if (dirInfo === null) {
      return null
    }

		if (options && options.attributes) {
			options.attributes.forEach((attribute) => {
				item[attribute] = stats[attribute]
			})
		}
		item.children = dirInfo
			.map(child => directoryTree(PATH.join(path, child), options, onEachFile, onEachDirectory))
			.filter(e => !!e)
		item.type = 'directory'
		if (onEachDirectory) {
			onEachDirectory(item, PATH, stats)
		}
	} else {
		return null
  }
  
	return item
}
