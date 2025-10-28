import type { HeaderLinks } from "../../../Types";

type Props = { data: HeaderLinks };

function HeaderLinkDisplayer(props: Props) {
  const { data } = props;
  return (
    <ul className=" w-full gap-8 items-center justify-evenly font-medium hidden lg:flex ">
      {data.map((link, id) => (
        <li
          key={id}
          className="transition-colors duration-300 hover:text-primary "
        >
          <a href={link.href}> {link.label} </a>
        </li>
      ))}
    </ul>
  );
}

export default HeaderLinkDisplayer;
