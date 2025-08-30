import './App.css'
import { Button } from './components/ui/Button'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcone } from './icons/ShareIcon'

function App() {
  

  return (
    <>
    <Button startIcon={<PlusIcon/>} size='sm' varient='primary' text='Share'/>
    <Button startIcon={<ShareIcone/>}size='md' varient='secondary' text='Add Content'/>
    <Button size='lg' varient='secondary' text='Add Content'/>


    </>
   
  )
}

export default App
