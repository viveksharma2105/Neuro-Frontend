import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function Signup() {
  const usernameRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();

  function signup() {
     const username = usernameRef.current?.value;
     const password = passwordRef.current?.value;
     

    
  }
  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white rounded-xl border min-w-48 p-8">
        <Input ref={usernameRef}placeholder="Username" />
        <Input ref={passwordRef}placeholder="Password" />

        <div className="justify-center flex pt-4">
          <Button onClick={signup} loading={false} size="md" Variant="primary" title="Signup" fullWidth={true} />
        </div>

      </div>
    </div>
  );
}
