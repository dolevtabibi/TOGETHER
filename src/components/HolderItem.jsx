export default function HolderItem({image, description})
{
    const imageSize = "100px";
  return (
    <li>
    <img src ={image} width={imageSize} height={imageSize} alt={description}/>
    <p>{description}</p>
    </li>
  );
}