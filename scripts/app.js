function main() {

  const workit = document.querySelector('#workit')
  const audio1 = document.querySelector('#audio1')
  audio1.src = 'soundfiles/work_it.wav'
  workit.addEventListener('click', () => {
    audio1.play()
  })

  const makeit = document.querySelector('#makeit')
  const audio2 = document.querySelector('#audio2')
  audio2.src = 'soundfiles/make_it.wav'
  makeit.addEventListener('click', () => {
    audio2.play()
  })

  const doit = document.querySelector('#doit')
  const audio3 = document.querySelector('#audio3')
  audio3.src = 'soundfiles/do_it.wav'
  doit.addEventListener('click', () => {
    audio3.play()
  })

  const makesus = document.querySelector('#makesus')
  const audio4 = document.querySelector('#audio4')
  audio4.src = 'soundfiles/makes_us.wav'
  makesus.addEventListener('click', () => {
    audio4.play()
  })

  const harder = document.querySelector('#harder')
  const audio5 = document.querySelector('#audio5')
  audio5.src = 'soundfiles/harder.wav'
  harder.addEventListener('click', () => {
    audio5.play()
  })

  const better = document.querySelector('#better')
  const audio6 = document.querySelector('#audio6')
  audio6.src = 'soundfiles/better.wav'
  better.addEventListener('click', () => {
    audio6.play()
  })

  const faster = document.querySelector('#faster')
  const audio7 = document.querySelector('#audio7')
  audio7.src = 'soundfiles/faster.wav'
  faster.addEventListener('click', () => {
    audio7.play()
  })

  const stronger = document.querySelector('#stronger')
  const audio8 = document.querySelector('#audio8')
  audio8.src = 'soundfiles/stronger.wav'
  stronger.addEventListener('click', () => {
    audio8.play()
  })

  const morethan = document.querySelector('#morethan')
  const audio9 = document.querySelector('#audio9')
  audio9.src = 'soundfiles/more_than.wav'
  morethan.addEventListener('click', () => {
    audio9.play()
  })

  const hour = document.querySelector('#hour')
  const audio10 = document.querySelector('#audio10')
  audio10.src = 'soundfiles/hour.wav'
  hour.addEventListener('click', () => {
    audio10.play()
  })

  const our = document.querySelector('#our')
  const audio11 = document.querySelector('#audio11')
  audio11.src = 'soundfiles/our.wav'
  our.addEventListener('click', () => {
    audio11.play()
  })

  const never = document.querySelector('#never')
  const audio12 = document.querySelector('#audio12')
  audio12.src = 'soundfiles/never.wav'
  never.addEventListener('click', () => {
    audio12.play()
  })

  const ever = document.querySelector('#ever')
  const audio13 = document.querySelector('#audio13')
  audio13.src = 'soundfiles/ever.wav'
  ever.addEventListener('click', () => {
    audio13.play()
  })

  const after = document.querySelector('#after')
  const audio14 = document.querySelector('#audio14')
  audio14.src = 'soundfiles/after.wav'
  after.addEventListener('click', () => {
    audio14.play()
  })

  const workis = document.querySelector('#workis')
  const audio15 = document.querySelector('#audio15')
  audio15.src = 'soundfiles/work_is.wav'
  workis.addEventListener('click', () => {
    audio15.play()
  })

  const over = document.querySelector('#over')
  const audio16 = document.querySelector('#audio16')
  audio16.src = 'soundfiles/over.wav'
  over.addEventListener('click', () => {
    audio16.play()
  })

  window.addEventListener('keydown', event => {
    switch (event.key) {
      case 'q':
        audio1.play()
        return
      case 'w':
        audio2.play()
        return
      case 'e':
        audio3.play()
        return
      case 'r':
        audio4.play()
        return
      case 't':
        audio5.play()
        return
      case 'y':
        audio6.play()
        return
      case 'u':
        audio7.play()
        return
      case 'i':
        audio8.play()
        return
      case 'o':
        audio9.play()
        return
      case 'p':
        audio10.play()
        return
      case 'a':
        audio11.play()
        return
      case 's':
        audio12.play()
        return
      case 'd':
        audio13.play()
        return
      case 'f':
        audio14.play()
        return
      case 'g':
        audio15.play()
        return
      case 'h':
        audio16.play()

    }
  })

}

window.addEventListener('DOMContentLoaded', main)