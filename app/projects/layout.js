export default function MdxLayout({ children }) {
  // Create any shared layout or styles here
  return (
    <div className="prose prose-sm prose-p:font-mono prose-hr:m-0 prose-hr:border-true-black">
      {children}
    </div>
  );
}
