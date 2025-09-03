import { ShareIcone } from "../icons/ShareIcon";
interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube";
}

export function Card({ title, link, type }: CardProps) {
  return (
    <div>
      <div className="p-8 bg-white rounded-md  border-gray-200 max-w-72 border min-h-48 min-w-72">
        <div className="flex justify-between">
          <div className="flex text-md">
            <div className="pr-2 text-grey-500">
              <ShareIcone size="lg" />
            </div>
            {title}
          </div>
          <div className="flex items-center">
            <div className="pr-2 text-grey-500">
              <a href={link} target="_blank"></a>
              <ShareIcone size="lg" />
            </div>

            <div className="pr-2 text-grey-500">
              <ShareIcone size="lg" />
            </div>
          </div>
        </div>
        <div className="pt-4">
          {type === "youtube" && (
            <iframe
              className="w-full"
              src={link.replace("watch","embed").replace("?v=","/")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}
          {type === "twitter" && <blockquote className="twitter-tweet"><a href={link.replace("x.com","twitter.com")}></a></blockquote>}
        </div>
      </div>
    </div>
  );
}
