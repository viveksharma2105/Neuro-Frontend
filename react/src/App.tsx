import './App.css'
import { Button } from './components/ui/Button'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcone } from './icons/ShareIcon'
//
function App() {
  

  return (
    <>
   <Button Variant='primary' size='lg' startIcon = {<PlusIcon size='lg'/>} title='Add Content'></Button>

   <Button Variant='secondary' size='lg' startIcon = {<ShareIcone size='lg'/>} title='Share'></Button>
  

    </>
   
  )
}

export default App
