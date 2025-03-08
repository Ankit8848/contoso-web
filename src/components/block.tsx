import clsx from "clsx";
import { ReactNode } from "react";

type Props = {
  /**
   * The content to be rendered inside the block.
   */
  children: ReactNode;

  /**
   * Additional class names to be applied to the outer div.
   */
  outerClassName?: string;

  /**
   * Additional class names to be applied to the inner div.
   */
  innerClassName?: string;
};

/**
 * A reusable block component that provides a consistent layout structure.
 * It wraps its children with two nested divs, allowing for custom styling
 * through the `outerClassName` and `innerClassName` props.
 *
 * @param {Props} props - The props for the Block component.
 * @param {ReactNode} props.children - The content to be rendered inside the block.
 * @param {string} [props.outerClassName] - Additional class names to be applied to the outer div.
 * @param {string} [props.innerClassName] - Additional class names to be applied to the inner div.
 * @returns {JSX.Element} The rendered Block component.
 */
export const Block = ({ children, outerClassName, innerClassName }: Props) => {
  return (
    <div className={clsx(outerClassName)}>
      <div
        className={clsx("max-w-screen-xl pl-3 pr-3 xl:mx-auto", innerClassName)}
      >
        {children}
      </div>
    </div>
  );
};

export default Block;
