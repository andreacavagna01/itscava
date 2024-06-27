import {
  Card,
  Image,
  Link,
  Tooltip,
  CardFooter,
  Chip
} from '@nextui-org/react';

export function ToolboxCard({ item }) {
  console.log(item);
  return (
    <Link href={item.url} underline="none" target="blank">
      <Tooltip content={item.description}>
        <Card
          isFooterBlurred
          radius="lg"
          className="border-none py-4 animate-sway p-0"
        >
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={item.imageUrl}
            width={220}
            height={220}
          />
          <CardFooter className="block before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <div className=" w-full">
              <h4 className="font-bold text-base mt-1 mb-1 ">{item.title}</h4>
            </div>
            <div className=" w-full mb-1">
              {item &&
                item.types.map((typeItem: any) => (
                  <Chip radius="sm" className="mr-1">
                    {typeItem}
                  </Chip>
                ))}
            </div>
          </CardFooter>
        </Card>
      </Tooltip>
    </Link>
  );
}
