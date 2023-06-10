// Write your code here
import {useState} from 'react'
import {
  ContainerMain,
  LockImage,
  StatusDetails,
  LockButton,
} from './styledComponents'

const Unlock = () => {
  const [lock, setLock] = useState(true)
  const onChangeLock = () => {
    setLock(prevState => !prevState)
  }

  const status = lock ? 'Your device is Locked' : 'Your device is Unlocked'
  const lockImg = lock
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
  const imgAlt = lock ? 'lock' : 'unlock'
  const btnTxt = lock ? 'Unlock' : 'Lock'

  return (
    <ContainerMain>
      <LockImage src={lockImg} alt={imgAlt} />
      <StatusDetails>{status}</StatusDetails>
      <LockButton type="button" onClick={onChangeLock}>
        {btnTxt}
      </LockButton>
    </ContainerMain>
  )
}
export default Unlock
