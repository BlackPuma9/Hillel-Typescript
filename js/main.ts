function replaceArr(text: string, forbiddenWords: Array<string>): string {
  let output = text

  forbiddenWords.forEach(word => {
    const regex = new RegExp(`\\b${word}\\b`, 'gi')
    output = output.replace(regex, '<del>$&</del>')
  })
  return output
}

const form = document.getElementById('textForm') as HTMLFormElement

form.addEventListener('submit', e => {
  e.preventDefault()
  const textInput = document.getElementById('textField') as HTMLInputElement
  const forbiddenWords = document.getElementById(
    'forbiddenWords',
  ) as HTMLInputElement

  const text = textInput.value
  const forbiddenArr = forbiddenWords.value.split(',').map(word => word.trim())

  const result = replaceArr(text, forbiddenArr)

  const resultPlaceholder = document.getElementById(
    'resultPlaceholder',
  ) as HTMLInputElement
  resultPlaceholder.innerHTML = result
})
