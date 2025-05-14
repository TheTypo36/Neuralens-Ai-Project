export interface propDocument {
  product_name: string;
  price: number;
  category: string;
  description: string;
  manufacturer: string;
  color: string;
  size: Array<number | string>;
  dimension: string;
  image_url: string;
}

export function Card(props: propDocument) {
  return (
    <div className="m-3 bg-blend-hue p-10 h-auto rounded-2xl shadow-2xl shadow-gray-400 hover:scale-110 font-mono text-gray-600 text-xl ">
      <h1>{props.product_name}</h1>
      <img src={props.image_url} className="w-80 h-80" />
      <h3>
        color: {props.color} | category: {props.category}
      </h3>
      <p>{props.manufacturer}</p>
      <p>price: {props.price}</p>
    </div>
  );
}
