function onSubmit(e) {
  e.preventDefault()

  document.querySelector('.msg').textContent= ''
  document.querySelector('#image').src = ''

  const prompt = document.querySelector('#prompt').value

  if (prompt === '') {
    alert('add some text!')
    return
  }

  generateImgReq(prompt)
} 

async function generateImgReq(prompt) {
  try {
    showLoader()
    const response = await fetch('/openai/generateimage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({prompt})
    })

    if(!response.ok) {
      removeLoader()
      throw new Error('could not generate image...')
    }
    const data = await response.json()
    // console.log(data)
    
    const imgUrl = data.data
    
    document.querySelector('#image').src = imgUrl
    
    removeLoader()
  } catch (error) {
    document.querySelector('.msg').textContent = error
  }
}

function showLoader() {
  document.querySelector('.spinner').classList.add('show')
}

function removeLoader() {
  document.querySelector('.spinner').classList.remove('show')
}

document.querySelector('#image-form').addEventListener('submit', onSubmit)
