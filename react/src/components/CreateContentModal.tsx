import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";

export function CreateContentModal({ open, onClose }) {
  return (
    <div>
      {open && (
        <div className="w-screen h-screen bg-slate-200 fixed top-0 left-0 opacity-60 flex justify-center">
          <div className="flex justify-center flex-col">
            <span className="bg-white p-4 rounded-lg ">
              <div className="flex justify-end">
                <div onClick={onClose} className="cursor-pointer">
                  <CrossIcon size="lg" />
                </div>
              </div>
              <div>
                <Input placeholder={"Title"} />
                <Input placeholder={"Links"} />
              </div>
              <div className="flex justify-center p-4">
                <Button size="md"  Variant="primary" title="Submit" />
              </div>
            </span> 
          </div>
        </div>
      )}
    </div>
  );
}

