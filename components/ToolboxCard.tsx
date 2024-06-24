import { Card, CardHeader, CardBody, Image } from '@nextui-org/react';

export function ToolboxCard({ item }) {
  console.log(item);
  return (
    <a href={item.url} target="blank">
      <Card className="py-4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">{item.types[0]}</p>
          <small className="text-default-500">{item.description}s</small>
          <h4 className="font-bold text-large">{item.title}</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={item.imageUrl}
            width={270}
          />
        </CardBody>
      </Card>
    </a>
  );
}
