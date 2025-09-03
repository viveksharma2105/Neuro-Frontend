import { Button } from "./components/Button";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcone } from "./icons/ShareIcon";
import { Card } from "./components/Card";

function App() {
  return (
    <div className="p-4">
      <div className="flex justify-end gap-4">
      <Button
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
  );
}


export default App;
