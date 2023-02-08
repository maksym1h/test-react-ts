import fs from 'fs'
import axios from 'axios'

async function saveArrayFromApiToFile() {
  const response = await axios.get(
    'https://www.sreality.cz/api/en/v2/estates?category_main_cb=1&category_type_cb=1&per_page=500'
  )
  const arrayOfObjects = response.data

  await fs.promises.writeFile(
    './src/data/data.js',
    JSON.stringify(arrayOfObjects),
    'utf-8'
  )
  console.log('Initial array of objects is saved to data.js')
}

async function readAndShowFile() {
  const fileData = await fs.promises.readFile('./src/data/data.js', 'utf-8')
  const arrayOfObjects = JSON.parse(fileData)

  const items: { names: string; images: string; id: string }[] = []
  for (let x = 0; x < 500; x++) {
    const names = arrayOfObjects._embedded.estates[x].name
    const images = arrayOfObjects._embedded.estates[x]._links.images[0].href
    const id = arrayOfObjects._embedded.estates[x].hash_id
    items.push({ names, images, id })
    await fs.promises.writeFile(
      './src/data/data.js',
      `const data = ${JSON.stringify(items)}; export default data`,
      'utf-8'
    )
  }
  console.log('Final array of objects is rewrited to data.js')
  return items
}

async function run() {
  await saveArrayFromApiToFile()
  await readAndShowFile()
}

run()

export default run
