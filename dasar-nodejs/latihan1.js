import path from 'path'
import fs, { readFile } from 'fs'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const readableStream = fs.createReadStream(path.resolve(__dirname, './assets/input.txt'), { encoding: 'utf-8' })

const writeableStream = fs.createWriteStream('./assets/text.txt', 'utf-8')

readableStream.pipe(writeableStream)
// const writeableStream = fs.createWriteStream('./assets/text.txt')

// writeableStream.write(readFileInput)
// writeableStream.end()