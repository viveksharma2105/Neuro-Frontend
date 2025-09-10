import { Button } from "../components/Button";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcone } from "../icons/ShareIcon";
import { Card } from "../components/Card";
import { CreateContentModal } from "../components/CreateContentModal";
import { useState } from "react";
import { Sidebar } from "../components/Sidebar";

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  return <div>
    <Sidebar/>
    <div className="p-4 ml-72 min-h-screen bg-grey-100 border-2">
      <CreateContentModal open={modalOpen} onClose={()=>{
        setModalOpen(false)
      }}/>
      <div className="flex justify-end gap-4">
      <Button onClick={()=>{
        setModalOpen(true)
      }}
        Variant="primary"
        size="lg"
        startIcon={<PlusIcon size="lg" />}
        title="Add Content"
      ></Button>

      <Button
        Variant="secondary"
        size="lg"
        startIcon={<ShareIcone size="lg" />}
        title="Share"
      ></Button>
</div>
      <div className="flex gap-4">
        <Card
          type="twitter"
          link="https://x.com/kirat_tw/status/1633685473821425666"
          title="First-tweet"
        />
        <Card
          type="youtube"
          link="https://www.youtube.com/watch?v=cHwQowOzAf0"
          title="First-video"
        />
      </div>
    </div>
    </div>
    
    
  
}


export default Dashboard;
